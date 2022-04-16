var mouseEvent="Empty";

color="red";
width_of_line=2;



Canvas.addEventListner(mousedown,my_mousedown);
function my_mousedown(){
    color= document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;
    radius= document.getElementById("radius").value;
    mouseEvent="mouseDown";


}
Canvas.addEventListner(mousemove,my_mousemove);
function my_mousemove(e){
var current_position_of_mouse_x=e.clientX = canvas.offsetleft;
var current_position_of_mouse_y=e.clienty = canvas.offsettop;
if(mouseEvent== "mousedown")
{
console.log("Current Position of x and y Coordinates=")
console.log("x= "+current_position_of_mouse_x+",Y="+current_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth="width_of_line";
ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,o,2*Math.PI);
ctx.stroke();
}
}