// secureftp module 
module.exports = function(user, host){
	var child_process = require('child_process');
	function write(command, callback){
		var message = '';
		var sftp = child_process.spawn('sftp', [host, user]);
		
		sftp.stdout.on('data', function (data){
			message += data.toString();
		});
		
		sftp.stderr.on('data', function (data) {
			// CONNECT
			var connect_message = 'Connected to ' + host + '.\n';
			if(data == connect_message){
				console.log('run command ' + command);
				sftp.stdin.write(command);
				sftp.stdin.end();
			}
		});
		
		sftp.on('exit', function (code) {
			console.log('sftp exit');
			// EXIT
			if(code != 0){
				console.log('sftp child process exited with code ' + code);
			} else if(callback) {
				// REMOVE sftp>command's
				message = message.replace(/sftp\>\s([^\n]+)\n/gi, ''); 
				
				// REMOVE \n from end
				message = message.slice(0, message.length-1 ); 
				
				// END sftp route
				callback(message)
			}
		});
	}
	return function(){
		var command = '';
		if(arguments.length < 2){
			var command = arguments[0];
		} else {
			for(var i = 0; i < arguments.length-1; i++){
				command += arguments[i] + '\n';
			}
		}
		
		var callback = arguments[arguments.length-1];
		if(typeof callback == 'function'){
			write(command, callback);
		} else {
			write(command, false);
		}
	}
}