const root = document.getElementById('root');
const X = document.getElementById('X');
const Y = document.getElementById('Y');

// ##### circle creation ####
const circle = document.createElement('div');
circle.setAttribute('class',"circle");
circle.style.cssText = "top : 0;left:0;display:none;position:relative;";
root.append(circle);


// #### get cordinates
function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
}


root.onmousemove = (e)=>{
    X.textContent = e.clientX;
    Y.innerHTML = e.clientY;
    circle.style.display = "inline-block";
    circle.style.top = `${e.clientY + window.pageXOffset-65}px`;
    circle.style.left = `${e.clientX + window.pageYOffset-65}px`;

}
root.onmouseout = (e)=>{
    X.innerHTML = "";
    Y.innerHTML = "";
    // circle.style.display = "none";
}

