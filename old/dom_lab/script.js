/***********************
 TASK 1: DOM SELECTION
************************/
const heading = document.getElementById("mainHeading");
const paragraph = document.getElementsByClassName("text");
const listItems = document.getElementsByTagName("li");
const firstButton = document.querySelector("button");
const allButtons = document.querySelectorAll("button");

console.log(heading);
console.log(paragraph);
console.log(listItems);
console.log(firstButton);
console.log(allButtons);

/***********************
 TASK 2: CONTENT MANIPULATION
************************/
heading.innerText = "DOM Lab – Updated Heading";
heading.innerHTML = "<span>DOM Lab Using innerHTML</span>";
heading.textContent = "DOM Lab Using textContent";

const updateBtn = document.getElementById("updateBtn");
const mainPara = document.getElementById("mainPara");
const lengthDisplay = document.getElementById("lengthDisplay");

updateBtn.addEventListener("click", () => {
  mainPara.textContent += " Appended text.";
  lengthDisplay.textContent = 
    "Paragraph length: " + mainPara.textContent.length;
});

/***********************
 TASK 3: STYLING & CLASSES
************************/
let fontSize = 16;

document.getElementById("textColorBtn").onclick = () => {
    if (mainPara.classList.contains("blue-text")){
        mainPara.classList.remove("blue-text");
    } else {
        mainPara.classList.add("blue-text");
    }
};

document.getElementById("bgColorBtn").onclick = () => {
  document.body.style.backgroundColor = "#f0f0f0";
};

document.getElementById("increaseFontBtn").onclick = () => {
  fontSize += 2;
  mainPara.style.fontSize = fontSize + "px";
};

document.getElementById("decreaseFontBtn").onclick = () => {
  fontSize -= 2;
  mainPara.style.fontSize = fontSize + "px";
};

document.getElementById("toggleClassBtn").onclick = () => {
  mainPara.classList.toggle("highlight");
};

/***********************
 TASK 4: EVENTS & EVENT OBJECT
************************/
document.addEventListener("dblclick", (event) => {
  console.log("Event type:", event.type);
  console.log("Target:", event.target);
});

listItems.item(0).addEventListener("mouseover", (event) => {
    if (listItems.item(0).classList.contains("blue-text")){
        listItems.item(0).classList.remove("blue-text");
    } else {
        listItems.item(0).classList.add("blue-text");
    }
});

document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});

/***********************
 TASK 5: DYNAMIC ELEMENTS
************************/
const itemInput = document.getElementById("itemInput");
const addItemBtn = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");

addItemBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = itemInput.value;
  li.classList.add("list-item");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  itemList.appendChild(li);

  itemInput.value = "";
});


/***********************
 TASK 6: DOM TRAVERSING
************************/
console.log(itemList.parentElement);
console.log(itemList.children);
console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);
console.log(itemList.firstElementChild.nextElementSibling);

/***********************
 TASK 7: FORM VALIDATION
************************/
const form = document.getElementById("userForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    formMessage.textContent = "All fields are required.";
    formMessage.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    formMessage.textContent = "Invalid email format.";
    formMessage.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = "Password must be at least 6 characters.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Form submitted successfully!";
  formMessage.style.color = "green";
});

const navTODO = document.getElementById("navTODO");
navTODO.addEventListener('mouseover', (ev) => {
    navTODO.style.backgroundColor = "blue";
});

navTODO.addEventListener('mouseout', (ev) => {
    navTODO.style.backgroundColor = "rgb(116, 116, 155)";
});
