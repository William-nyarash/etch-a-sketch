const container = document.querySelector(".container");
const body = document.querySelector(".body")
const button = document.createElement("div")

button.classList.add("button")
button.textContent = "click me"
body.appendChild(button)

button.addEventListener("click", () => {
	
	const numberOfSquares =	parseInt(prompt("Enter the number of squares you want generated "))

	if (isNaN(numberOfSquares)) {
		alert("Warning the input must be a number");
	}
	if(numberOfSquares > 100){ 
			 alert("Only numbers less than 100 are allowed")
		}

	body.appendChild(button)

	for(let i = 0; i < numberOfSquares; i ++){
	for (let n = 0; n < numberOfSquares; n ++) {
		const div = document.createElement("div")
		div.classList.add('div')
		div.addEventListener("mouseover", ()=> {
			div.classList.add("hover_div");
		})
		container.appendChild(div)
}
}
})
