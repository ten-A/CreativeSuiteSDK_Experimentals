/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


$._kcon = {
	cnvt : function(){
		var nbr = "0123456789０１２３４５６７８９";
		var knz = "〇一二三四五六七八九";
		var N = ["0","1","2","3","4","5","6","7","8","9"];
		var K = ["〇","一","二","三","四","五","六","七","八","九","〇","一","二","三","四","五","六","七","八","九"];
		var tgt = app.selection;
		var i,j,tg;
		var pos;

		for (j=0;j<tgt.length;j++){
			tg = tgt[j];
			if(app.activeDocument.selection[j].orientation=="TextOrientation.VERTICAL"){
				for(i=0;i<tg.characters.length;i++){
					if(nbr.indexOf(tg.characters[i].contents)>-1)
						tg.characters[i].contents = K[nbr.indexOf(tg.characters[i].contents)];
				}
			} else {
				for(i=0;i<tg.characters.length;i++){
					if(knz.indexOf(tg.characters[i].contents)>-1)
						tg.characters[i].contents = N[knz.indexOf(tg.characters[i].contents)];
					}
				}
			pos = tg.contents.indexOf("十");
			while(pos>=0){
				if (tg.contents.length==1) {
					tg.characters[0].contents = "10";
					break;
					}
				if (pos==(tg.contents.length-1)){
					if(nbr.indexOf(tg.characters[pos-1].contents)>=0){
						tg.characters[0].contents = "0";
						break;
						} else {
							tg.characters[0].contents = "10";
							break;
							}
					}
				if (pos==0){
					if(nbr.indexOf(tg.characters[pos+1].contents)>=0){
						tg.characters[0].contents = "1";
						pos = tg.contents.indexOf("十");
						continue;
						} else {
							tg.characters[0].contents = "10";
							pos = tg.contents.indexOf("十");
							continue;
							}
					}
				if(nbr.indexOf(tg.characters[pos-1].contents)>=0){
					if(nbr.indexOf(tg.characters[pos+1].contents)>=0){
						tg.characters[pos].contents = "";
						} else {
							tg.characters[pos].contents = "0";
							}
					} else if(nbr.indexOf(tg.characters[pos+1].contents)>=0) {
						tg.characters[pos].contents = "1";
						} else {
							tg.characters[pos].contents = "10";
							}
				pos = tg.contents.indexOf("十");
				}
			}
		}
	}