const form = document.getElementById("registrationForm");
const participantList = document.getElementById("participantList");
const emptyState = document.getElementById("emptyState");
const filterWorkshop = document.getElementById("filterWorkshop");

/* ---------------- VALIDATION ---------------- */

function showError(inputEl, message) {
    const group = inputEl.closest(".form-group") || inputEl.closest("fieldset");
    const errorMsg = group.querySelector(".error-message");
    errorMsg.textContent = message;
    inputEl.classList.add("error");
}

function clearError(inputEl) {
    const group = inputEl.closest(".form-group") || inputEl.closest("fieldset");
    const errorMsg = group.querySelector(".error-message");
    errorMsg.textContent = "";
    inputEl.classList.remove("error");
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fullName");
    const email = document.getElementById("email");
    const workshop = document.getElementById("workshop");
    const experience = document.querySelector('input[name="experience"]:checked');
    const agreement = document.getElementById("agreement");

    let valid = true;

    if (name.value.trim().length < 3) {
        showError(name, "Name must be at least 3 characters");
        valid = false;
    } else clearError(name);

    if (!email.value.includes("@")) {
        showError(email, "Enter a valid email");
        valid = false;
    } else clearError(email);

    if (!experience) {
        const fieldset = document.querySelector("fieldset");
        const errorMsg = fieldset.querySelector(".error-message");
        errorMsg.textContent = "Select experience level";
        valid = false;
    } else {
        document.querySelector("fieldset .error-message").textContent = "";
    }

    if (!agreement.checked) {
        showError(agreement, "You must agree before submitting");
        valid = false;
    } else clearError(agreement);

    if (!valid) return;

    addParticipant(name.value, workshop.value, experience.value);
    form.reset();
});

/* ---------------- ADD PARTICIPANT ---------------- */

function addParticipant(name, workshop, level) {
    const card = document.createElement("div");
    card.className = "participant-card";
    card.dataset.workshop = workshop;

    const info = document.createElement("p");
    info.textContent = `${name} | ${workshop} | ${level} | Status: Active`;

    const actions = document.createElement("div");
    actions.className = "actions";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    const priorityBtn = document.createElement("button");
    priorityBtn.textContent = "Toggle Priority";
    priorityBtn.className = "priority-btn";

    actions.appendChild(removeBtn);
    actions.appendChild(priorityBtn);
    card.appendChild(info);
    card.appendChild(actions);

    participantList.appendChild(card);
    emptyState.classList.add("hidden");
}

/* ---------------- EVENT DELEGATION ---------------- */

participantList.addEventListener("click", function (e) {
    const card = e.target.closest(".participant-card");
    if (!card) return;

    // REMOVE
    if (e.target.classList.contains("remove-btn")) {
        const confirmBox = document.createElement("div");
        confirmBox.className = "confirm-box";

        const msg = document.createElement("p");
        msg.textContent = "Are you sure you want to remove this participant?";

        const yesBtn = document.createElement("button");
        yesBtn.textContent = "Yes";

        const noBtn = document.createElement("button");
        noBtn.textContent = "No";

        confirmBox.append(msg, yesBtn, noBtn);
        card.appendChild(confirmBox);

        yesBtn.addEventListener("click", () => {
            participantList.removeChild(card);
            if (!participantList.children.length) {
                emptyState.classList.remove("hidden");
            }
        });

        noBtn.addEventListener("click", () => confirmBox.remove());
    }

    // PRIORITY
    if (e.target.classList.contains("priority-btn")) {
        card.classList.toggle("priority");
        if (card.classList.contains("priority")) {
            participantList.prepend(card);
        } else {
            participantList.appendChild(card);
        }
    }
});

/* ---------------- FILTER ---------------- */

filterWorkshop.addEventListener("change", function () {
    const value = this.value;
    const cards = document.querySelectorAll(".participant-card");

    cards.forEach(card => {
        if (value === "All" || card.dataset.workshop === value) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
});
