function makeLabel(tx){
	var arr = tx.split("\n");
	vat tg = app.activeDocument.textFrames;
	for (var i=0;i<arr.length;i++){
		tg[i].contents = arr[i].replace(/,/g, "\n");
		}
	}
