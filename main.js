var mouseEvent = "";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('mycanvas');
    ctx = canvas.getContext("2d");
    
    color = "white";
    width_of_line = 5;
    radius = 20;
    bcolor="black";
    
    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("Color").value;
        width_of_line = document.getElementById("line").value;
        radius = document.getElementById("Radius").value;
        bcolor=document.getElementById("BgColor").value;
        document.getElementById("mycanvas").style.backgroundColor=bcolor;
        //Addictonal Activity ends

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }






    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("Color").value;
        width_of_line = document.getElementById("line").value;
        radius = document.getElementById("Radius").value;
        bcolor=document.getElementById("BgColor").value;
        document.getElementById("mycanvas").style.backgroundColor=bcolor;
        //Addictonal Activity ends

    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
      

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}