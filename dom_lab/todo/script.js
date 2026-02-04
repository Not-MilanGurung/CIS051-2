// Select DOM elements
const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const taskText = input.value.trim();
  if (taskText === "") return;

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completed state (cross out)
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Add item to list
  list.appendChild(li);

  // Clear input
  input.value = "";
});
