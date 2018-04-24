var drawbox = function(color){
	var box = document.createElement('div');
	box.setAttribute('class', 'box');
	box.setAttribute('style','background-color:'+color);
	document.querySelector('body').appendChild(box);
}


var newLine = function(){
	var Line = document.createElement('div');
	Line.setAttribute('class' , 'Line');
	document.querySelector('body').appendChild(Line);
}

drawbox("green");
drawbox("green");
drawbox("green");
newLine();
drawbox("yellow");
drawbox("yellow");
drawbox("yellow");
newLine();
drawbox("blue");
drawbox("blue");
drawbox("blue");
newLine();
drawbox("pink");
drawbox("pink");
drawbox("pink");