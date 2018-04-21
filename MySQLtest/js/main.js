
themeManager.init();

function get() {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
	   host : '130.1.6.80',
	   port : '3306',
	   user : 'bookuser',
	   password : 'bookuser1',
	   database : 'book_db'
	   });
	connection.connect();
	var queryString = "SELECT `order_id` AS `order_id`, `size` AS `size`, `quantity_order` AS `quantity_order`, "
			+ "`post` AS `post`, `adds` AS `adds`, `name` AS `name`, `delivered` AS `delivered` "
			+ "FROM `book_db`.`work_data` AS `work_data` WHERE `delivered` = 0 ORDER BY `size` ASC";	
	connection.query(queryString, function(err, rows, fields) {
	if (err) console.log(err);
	else {
		var str = "";
		for (var i=0;i<rows.length;i++){
			str += rows[i].order_id + "," + rows[i].size + "," +  rows[i].quantity_order + "," 
			        +  rows[i].post + "," +  rows[i].adds + "," +  rows[i].name +"\r"
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


