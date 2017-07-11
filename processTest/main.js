function createProess(){
	var createProcessResult = window.cep.process.createProcess("/bin/ps", "x", "");
	if (0 == createProcessResult.err) {
		var gPID = createProcessResult.data;
		var stdoutResult = window.cep.process.stdout(gPID, function(output) {
			console.log(output);
			console.log(output.match(/\s+?(\d+).+Illustrator/));
			alert("Illustrators PID :  " + RegExp.$1);
			});
		}
	else {
		alert("createProcess failed");
		}
	}

