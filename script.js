// -----------------------------
// Interactive Feature 1: Counter
// -----------------------------
let count = 0;
const counterDisplay = document.getElementById("counter");
const countBtn = document.getElementById("count-btn");

countBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

// ------------------------------------
// Interactive Feature 2: Color Changer
// ------------------------------------
const colorBtn = document.getElementById("change-color");

colorBtn.addEventListener("click", () => {
  const colors = ["#f28b82", "#fbbc04", "#34a853", "#4285f4", "#9c27b0"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
});

// -----------------------------
// Extra Feature: Dark Mode Toggle
// -----------------------------
const toggleThemeBtn = document.getElementById("toggle-theme");

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ------------------------------------
// Custom Form Validation
// ------------------------------------
const form = document.getElementById("signup-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop form from submitting automatically

  // Get input values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error display elements
  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const successMessage = document.getElementById("form-success");

  let isValid = true;

  // Validate username
  if (username.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters.";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  // Validate email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // If valid, show success
  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  } else {
    successMessage.textContent = "";
  }
});
