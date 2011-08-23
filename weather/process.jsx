function processXML(getCnt) {
	var result = new Array();
	var reDate = /http:.+\d{4}(\d\d)(\d\d)/;
	var month,day,weather,hi,lo;
	var weXml = new XML(getCnt);
	var nsURI = weXml.namespace();
	var nmSpc = new Namespace(nsURI);
	setDefaultXMLNamespace(nmSpc);

	tgt = weXml.channel;
	title = tgt.title.toString();
	app.activeDocument.textFrames[0].contents = title;
	for (var i=0;i<7;i++){
		tgt.item[i].link.toString().match(reDate);
		month = RegExp.$1;
		day = RegExp.$2;
		tgt.item[i].description.toString().match(/(.+)\s-\s(.+)\/(.+)/);
		weather = RegExp.$1;
		hi = RegExp.$2;
		lo = RegExp.$3;
		result.push([month, day, weather, hi, lo]);
		}
	processArtwork(result);
	return true;
	}


function processArtwork(dat){
	var tg = app.activeDocument.groupItems;
	for (var i=0;i<7;i++){
		num = processSymbol (dat[i][2]);
		if (num>0){
			tgSym = app.activeDocument.symbolItems.add(app.activeDocument.symbols[num]);
			tgSym.top = tg[i].pathItems[0].top;
			tgSym.left = tg[i].pathItems[0].left;
			tgSym.width = tg[i].pathItems[0].width;
			tgSym.height = tg[i].pathItems[0].height;
			}
		tg[i].textFrames[0].contents = dat[i][1]
		tg[i].textFrames[1].contents = dat[i][0]
		tg[i].textFrames[3].contents = dat[i][4]
		tg[i].textFrames[4].contents = dat[i][3]
		tg[i].textFrames[5].contents = dat[i][2];
		}
	}


function processSymbol(str){
	var fstChar = str.substr (0, 1);
	if (fstChar=="晴"){
		if (str.length==1) return 0;
		if (str.match("曇")) return 1;
		if (str.match("雨")) return 2;
		if (str.match("雪")) return 3;
		if (str.match("雷")) return 4;
		}
	if (fstChar=="曇"){
		if (str.length==2) return 5;
		if (str.match("晴")) return 6;
		if (str.match("雨")) return 7;
		if (str.match("雪")) return 8;
		if (str.match("雷")) return 9;
		}
	if (fstChar=="雨"){
		if (str.length==1) return 10;
		if (str.match("晴")) return 11;
		if (str.match("曇")) return 12;
		if (str.match("雪")) return 13;
		if (str.match("雷")) return 14;
		}
	if (fstChar=="雪"){
		if (str.length==1) return 15;
		if (str.match("晴")) return 16;
		if (str.match("曇")) return 17;
		if (str.match("雨")) return 18;
		if (str.match("雷")) return 19;
		}
	return -1
	}
