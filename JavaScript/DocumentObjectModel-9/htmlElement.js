const parentElement = document.getElementById("parent-container");

const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

// creating card image element 

const cardImageElement = document.createElement("img");
cardImageElement.classList.add("image");

cardImageElement.setAttribute("src", "https://images.unsplash.com/photo-1616394585067-d3e824140aa1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

cardImageElement.setAttribute("alt","travel-card");
cardContainer.appendChild(cardImageElement);

// creating card text element

const cardTextElement = document.createElement("span");
cardTextElement.innerText ="The journey of a thousand miles begins with a single step"

cardContainer.appendChild(cardTextElement);
parentElement.appendChild(cardContainer);