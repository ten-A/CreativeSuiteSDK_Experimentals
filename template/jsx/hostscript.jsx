function bmi(num) {	
  var bmi = num[1] / (num[0] * num[0]) * 10000;
	var st = "";
	if (bmi>30) st = " Club Over 30 ﾍﾖｳｺｿ";
	else if (bmi<20) st = " ﾔｾｽｷﾞﾃﾞｽ､ﾓｳﾁｯﾄﾀﾍﾞﾏｾｳ";
	else st = " ﾌﾂｳｽｷﾞﾃｵﾓｼﾛｸﾅｲﾈ"
     alert("ｱﾅﾀﾉBIMｹｰｻﾝｼﾀﾈ\n"+ bmi + st);
	}
