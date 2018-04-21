
themeManager.init();

function get() {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
	   host : '<MySQL_SERVER>',
	   port : '<PORT_NUMBER>',
	   user : '<DATABASE_USER>',
	   password : '<USER_PASSWORD>',
	   database : '<DATABASE_NAME>'
	   });
	connection.connect();
	var queryString = "SELECT `order` AS `order`, `size` AS `size`, "
			+ "`name` AS `name`, `delivered` AS `delivered` "
			+ "FROM `db`.`work_data` AS `work_data` WHERE `delivered` = 0 ORDER BY `size` ASC";	
	connection.query(queryString, function(err, rows, fields) {
	if (err) console.log(err);
	else {
		var str = "";
		for (var i=0;i<rows.length;i++){
			str += rows[i].order + "," + rows[i].size + "," +  rows[i].post + "," +  rows[i].name +"\r"
			}
		document.getElementById("text").value = str;
		}
	});
	connection.end();
    };

function apply() {
    var csi = new CSInterface();
    csi.evalScript("makeLabel(" + document.getElementById("text").value + ")");
}
