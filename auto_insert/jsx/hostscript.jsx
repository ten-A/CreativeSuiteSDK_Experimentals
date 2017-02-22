function startWork(str){
	var ps;
	if (app.selection[0]=="[object InsertionPoint]") ps = app.selection[0].index;
	else ps = 0;
	var idleTask = app.idleTasks.add({name:'insertCharacter', sleep:250}).addEventListener(IdleEvent.ON_IDLE, task1);
	function task1(ev){
		app.idleTasks.everyItem().remove();
		if (app.selection[0].index!=ps){
			app.selection[0].contents = str ;
			ps = app.selection[0].index;
			}
		idleTask = app.idleTasks.add({name:'insertCharacter', sleep:250}).addEventListener(IdleEvent.ON_IDLE, task1);
		}
	}

function stopWork(){
	app.idleTasks.everyItem().remove();
	}