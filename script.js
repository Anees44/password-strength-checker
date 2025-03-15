function checkStrength(password) {
  let strengthBar = document.getElementById("strength-bar");
  let strengthText = document.getElementById("strength-text");

  if (password.length < 6) {
      strengthBar.className = "strength-indicator weak";
      strengthText.innerText = "Weak";
  } else if (password.length <= 10 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
      strengthBar.className = "strength-indicator medium";
      strengthText.innerText = "Medium";
  } else if (password.length > 10 && /[a-zA-Z]/.test(password) && /\d/.test(password) && /[^a-zA-Z0-9]/.test(password)) {
      strengthBar.className = "strength-indicator strong";
      strengthText.innerText = "Strong";
  } else {
      strengthBar.className = "strength-indicator";
      strengthText.innerText = "";
  }
}

document.getElementById("password").addEventListener("input", function() {
  checkStrength(this.value);
});

function togglePassword() {
  let passwordInput = document.getElementById("password");
  let toggleButton = document.querySelector(".toggle-btn");
  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.innerText = "Hide";
  } else {
      passwordInput.type = "password";
      toggleButton.innerText = "Show";
  }
}
