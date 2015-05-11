function getFilePath(){
	var fdr = Folder.selectDialog("Please select SCRIP FOLDER...");
	return fdr.fsName;
	}

function callScript(fl){
    $.level = 0;
	try {
		$.evalFile (fl);
		} catch(e) {
			alert (e);
			}
	}
