const container = document.querySelector(".container");
const body = document.querySelector(".body")
const button = document.createElement("div")

button.classList.add("button")
button.textContent = "click me"

button.addEventListener("click", () => {
	
let numberOfSquares =	prompt("Enter the number of squares you want generated ")
})

body.appendChild(button)

let number = 16;
	for(let i = 0; i < number; i ++){
		for (let n = 0; n < number; n ++) {
			const div = document.createElement("div")
			div.classList.add('div')
			div.addEventListener("mouseover", ()=> {
				div.classList.add("hover_div");
			})
			container.appendChild(div)
	}
}