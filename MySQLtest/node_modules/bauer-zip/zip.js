/*!
**  bauer-zip -- Zip and unzip files and folders.
**  Copyright (c) 2014 Yuri Neves Silveira <http://yneves.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Distributed on <http://github.com/yneves/node-bauer-zip>
*/
// - -------------------------------------------------------------------- - //
// - libs

var lib = {
	fs: require("fs"),
	path: require("path"),
	jszip: require("jszip"),
	decompress: require("decompress-zip"),
	factory: require("bauer-factory"),
};

// - -------------------------------------------------------------------- - //

var z = lib.factory.object({

	zip: {

		// .zip(source,target)
		ss: function(rootDir,saveTo) {
			var zip = new lib.jszip();
			rootDir = lib.path.resolve(rootDir);
			function recurse(fullPath,parentZip) {
				var stat = lib.fs.statSync(fullPath);
				var dir = lib.path.dirname(fullPath);
				var file = lib.path.basename(fullPath);
				if (stat.isDirectory()) {
					var folderZip = parentZip.folder(file);
					var files = lib.fs.readdirSync(fullPath);
					var count = files.length;
					files.forEach(function(file) {
						var filePath = lib.path.resolve(fullPath,file);
						recurse(filePath,folderZip);
					});
				} else {
					var data = lib.fs.readFileSync(fullPath);
					parentZip.file(file,data);
				}
			}
			recurse(rootDir,zip);
			var buffer = zip.generate({
				compression: "DEFLATE",
				type: "nodebuffer",
			});
			lib.fs.writeFileSync(saveTo,buffer,{ encoding: "binary" });
			return z;
		},

		// .zip(source,target,callback)
		ssf: function(rootDir,saveTo,done) {
			var zip = new lib.jszip();
      rootDir = lib.path.resolve(rootDir);
      function recurse(fullPath,parentZip,callback) {
				lib.fs.stat(fullPath,function(err,stat) {
					if (err) return callback(err);
					var dir = lib.path.dirname(fullPath);
					var file = lib.path.basename(fullPath);
					if (stat.isDirectory()) {
						var folderZip = parentZip.folder(file);
						lib.fs.readdir(fullPath,function(err,files) {
							if (err) return callback(err);
							if (!files.length) return callback();
							var count = files.length;
							files.forEach(function(file) {
								var filePath = lib.path.resolve(fullPath,file);
								recurse(filePath,folderZip,function(err) {
									if (!--count) {
										callback(err);
									}
								});
							});
						});
					} else {
						lib.fs.readFile(fullPath,function(err,data) {
							parentZip.file(file,data);
							callback(err);
						});
					}
        });
      }
      recurse(rootDir,zip,function(error) {
        if (error) {
					done(error);
				} else {
          var buffer = zip.generate({
            compression: "DEFLATE",
            type: "nodebuffer",
          });
          lib.fs.writeFile(saveTo,buffer,{ encoding: "binary" },function(error) {
            done(error);
          });
        }
      });
			return z;
		}

	},

	unzip: {

		// .unzip(source,target,callback)
		ssf: function(zipPath,directoryPath,done) {
      var name = lib.path.basename(zipPath);
      var unzipper = new lib.decompress(zipPath);
      unzipper.on("error",function(error) {
        done(error);
      });
      unzipper.on("extract",function() {
        done();
      });
      unzipper.extract({
        path: directoryPath,
      });
			return z;
		},

	},

});

// - -------------------------------------------------------------------- - //

module.exports = z;

// - -------------------------------------------------------------------- - //
