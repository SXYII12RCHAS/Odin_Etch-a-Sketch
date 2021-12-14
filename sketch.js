let slider = document.getElementById("slider-input");
let colorInput = document.querySelector(".color-input");
let grid = document.querySelector(".grid");
let mode = "color";
let size = 2;
fillGrid();

function sliderChange() {
	let value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
	size = slider.value;
	document.querySelector(".sizeText").textContent = size + " x " + size;
	slider.style.background =
		"linear-gradient(to right, #3fdb42 0%, #3fdb42 " +
		value +
		"%, #fff " +
		value +
		"%, white 100%)";

        
}

function changeColorOnHover(event) {
	
    switch(mode){
        case"color":
        event.target.style.backgroundColor = colorInput.value;
        break;
        case"eraser":
        event.target.style.backgroundColor = "white";
        break;
        case"rainbow":
        let R = Math.floor(Math.random()*255);
        let G = Math.floor(Math.random()*255);
        let B = Math.floor(Math.random()*255);
        event.target.style.backgroundColor = `rgb(${R},${G},${B})`;
        break;
    }
}

function fillGrid() {

    grid.innerHTML = "";

    grid.style.gridTemplateColumns =`repeat(${size},1fr)`;
    grid.style.gridTemplateRows =`repeat(${size},1fr)`;
    for(let i = 0; i < size;i++){
        for(let j = 0; j < size;j++){
            let div = document.createElement('div');
            div.addEventListener('mouseover',changeColorOnHover);
            grid.appendChild(div);
        }
    }
}

function Clear(){
    for(let i = 0; i < grid.children.length;i++){
        grid.children[i].style.backgroundColor = "white";
    }
}