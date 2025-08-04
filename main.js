const container = document.querySelector(".container");

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