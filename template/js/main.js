(function () {
	'use strict';
	var csInterface = new CSInterface(); //CEPのライブラリ

	function init() {
		themeManager.init(); //パネルをアプリケーションテーマカラーに同期させる為のライブラリ
		$("#aply").click(function () {  //HTMLフォームのボタンをクリックした時に実行される関数
			var str = $("input#str").val();  //テキストインプットの文字をstrに読み込みます。
			csInterface.evalScript('callExtendscriptFunc("' + str + '")');
			//evalScript関数は引数に与えられた文字列をホストアプリケーションでExtendscriptとして実行します。
			//この時に参照されるのがmanifest.xmlに記述されたExtendscriptファイルです。
		});
	}
	init();
}());
	
