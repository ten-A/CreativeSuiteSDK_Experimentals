// - -------------------------------------------------------------------- - //
// - libs

var z = require("../");
var fs = require("fs");
var cwd = __dirname + "/../";
var assert = require("assert");

// - -------------------------------------------------------------------- - //
// - Zip

describe("Zip",function() {

  it("zip sync",function() {
    var file = __dirname + "/test-sync.zip";
    z.zip(cwd,file);
    assert.ok(fs.existsSync(file));
    fs.unlinkSync(file);
  });

  it("zip sync empty dir",function() {
    var dir = __dirname + "/empty";
    var file = __dirname + "/test-sync-empty.zip";
    z.zip(dir,file);
    assert.ok(fs.existsSync(file));
    fs.unlinkSync(file);
  });

  it("zip async",function(done) {
    var file = __dirname + "/test-async.zip";
    z.zip(cwd,file,function(error) {
      fs.exists(file,function(exists) {
        assert.ok(exists);
        fs.unlink(file,function(error) {
          done(error);
        });
      });
    });
  });

  it("unzip async",function(done) {
    var file = __dirname + "/test.zip";
    z.unzip(file,__dirname,function(error) {
      var content = __dirname + "/test-zip-content";
      fs.exists(content,function(exists) {
        assert.ok(exists);
        fs.unlink(content,function(error) {
          done(error);
        });
      })
    });
  });

});

// - -------------------------------------------------------------------- - //
