# JS-EXERCISE
Javascript practices 

## Bouncing-Balls
Demo:</br>
<img width=500 height=auto src="https://user-images.githubusercontent.com/13601628/39186033-7508b644-47c9-11e8-9480-69afc4de333a.gif"/>
</br>
## Drawing-Flag
How to draw a flag by using Javascript?</br>

1. Crate a function called drawbox with parameter:color. </br>
Use 'document.createElement' to create a div, use .setAttribute to change class name, then refer to CSS style which can be applied in parameter(color).</br>
Use '.querySelector().apprendChild()' method to display box.</br>
````
var drawbox = function(color){
	var box = document.createElement('div);
	box.setAttribute('class', 'box')'
	box.setAttribute('style', 'background-color:'+color);
	document.querySelector('body').appendChild(box)
}
````
2. Call function drawbox() with color inside parameter. For example</br>
````
drawbox("green");
````
3. Create a function which breaks the line between box *(clear float)</br>
````
var newLine =function(){
	var Line = document.createElement('div');
	Line.setAttribute('class', 'Line');
	document.querySelector('body').appendChild(Line);
}
````
//set up CSS: .box and .Line</br>

Demo:</br>
<img width=100 height=auto src="https://user-images.githubusercontent.com/13601628/39187393-7c25cabc-47cd-11e8-93aa-a1e951e75a1f.png">
