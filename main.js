//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");



//Give specific height and width to the car image

greencar_width= 75;
greencar_height= 100;

greencar_x= 5;
greencar_y= 225;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	background_tag= new Image();
    background_tag.onload= uploadBackground;
    background_tag.src= background_image;
    greencar_image_tag= new Image();
    greencar_image_tag.onload= uploadgreencar;
    greencar_image_tag.src= greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_tag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_image_tag, greencar_x, greencar_y, greencar_width, greencar_height );

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
			up();
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
			down();
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
			left();
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
			right();
		}
		
		
}

function up(){

	//Define function to move the car upward
	if(greencar_y>=0) {
        greencar_y=greencar_y -10
      console.log("When up arrow is presses x=" + greencar_x + "y=" + greencar_y);
uploadBackground()
uploadgreencar()
}
}

function down(){

	if(greencar_y<=300) {
        greencar_y=greencar_y +10
      console.log("When up arrow is presses x=" + greencar_x + "y=" + greencar_y);
uploadBackground()
uploadgreencar()
}
}

function left(){

	//Define function to move the car left side
	if(greencar_x>=0) {
        greencar_x=greencar_x -10
      console.log("When up arrow is presses x=" + greencar_x + "y=" + greencar_y);
uploadBackground()
uploadgreencar()
}
}

function right(){

	if(greencar_x<=700) {
        greencar_x=greencar_x +10
      console.log("When up arrow is presses x=" + greencar_x + "y=" + greencar_y);
uploadBackground()
uploadgreencar()
	//Define function to move the car right side
}
}