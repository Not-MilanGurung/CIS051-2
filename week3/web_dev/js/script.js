// =======================
// Theme Toggle (Persistent)
// =======================
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// =======================
// Product Card Logic
// =======================
const addToCartBtn = document.getElementById("addToCart");
const cartMessage = document.getElementById("cartMessage");
const productImage = document.getElementById("productImage");

addToCartBtn.addEventListener("click", () => {
    cartMessage.textContent = "✅ Product added to cart successfully!";
});

// Image fallback
productImage.onerror = () => {
    productImage.style.display = "none";

    const fallback = document.createElement("p");
    fallback.textContent = "Image not available";
    productImage.parentElement.insertBefore(fallback, productImage);
};

// =======================
// Form Validation
// =======================
const form = document.getElementById("registerForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const formSuccess = document.getElementById("formSuccess");

function showError(input, message) {
    const formGroup = input.closest(".form-group");
    const errorElement = formGroup.querySelector(".error");

    errorElement.textContent = message;
    input.classList.add("invalid");
}

function clearError(input) {
    const formGroup = input.closest(".form-group");
    const errorElement = formGroup.querySelector(".error");

    errorElement.textContent = "";
    input.classList.remove("invalid");
}

function validateName() {
    if (fullName.value.trim() === "") {
        showError(fullName, "Full name is required");
        return false;
    }
    clearError(fullName);
    return true;
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Enter a valid email address");
        return false;
    }
    clearError(email);
    return true;
}

function validatePassword() {
    if (password.value.length < 8) {
        showError(password, "Password must be at least 8 characters");
        return false;
    }
    clearError(password);
    return true;
}

function validateConfirmPassword() {
    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, "Passwords do not match");
        return false;
    }
    clearError(confirmPassword);
    return true;
}

// Blur validation
fullName.addEventListener("blur", validateName);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);

// Submit validation
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValid =
        validateName() &&
        validateEmail() &&
        validatePassword() &&
        validateConfirmPassword();

    if (isValid) {
        formSuccess.textContent = "🎉 Registration successful!";
        form.reset();

        setTimeout(() => {
            formSuccess.textContent = "";
        }, 3000);
    }
});

// =======================
// Password Toggle
// =======================
const toggleButtons = document.querySelectorAll(".toggle");

toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetInput = document.getElementById(btn.dataset.target);

        if (targetInput.type === "password") {
            targetInput.type = "text";
            btn.textContent = "Hide";
        } else {
            targetInput.type = "password";
            btn.textContent = "Show";
        }
    });
});
