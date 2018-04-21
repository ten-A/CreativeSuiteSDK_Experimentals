# secureftp  
Create SFTP connections in node.js to remote servers

### Install
```
npm install secureftp
```

### Features:
- Supports infinite commands with arguments
- Fully supported SFTP methods
- Handles all the dirty stuff under the hood
	  
### Usage:
```javascript
	var SFTP = require('secureftp');
	
	// CONNECT to '127.0.0.0' as 'root' 
	var sftp = new SFTP('root', '127.0.0.0');
	
	// RUN Commands
	// 1. Argument: cd /root/project/public
	// 2. Argument: ls -1
	sftp('cd /root/project/public', 'ls -1', function(data){
		console.log(data);
	});
	
	// GET HELP with:
	sftp('help', function(data){ console.log(data); });
```

### Setup SFTP Instance Arguments
```javascript
{
	"user"	: "root" 		// the username to connect with
	"host"	: "127.0.0.0"	// the host to reach usually an IP
}
```

### SFTP function Arguments
You can have inifinite command arguments, the last one is the callback function
```javascript
sftp(command, command2 ... , callback)
```

### Warning
- The module only works if `rsa key` is configured with the server you want to reach

### Todo
- Single time login with a password.