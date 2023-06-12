const button = document.getElementById("button")
const passwordInput = document.getElementById('pwd');
const confirmPasswordInput = document.getElementById('confirmpwd');
const toggleButton = document.querySelector('.toggle-password');
const toggleConfirmButton = document.querySelector('.toggle-confirm-password');

toggleButton.style.display = 'none'; 
toggleConfirmButton.style.display = 'none';

var check = function() {
    if (document.getElementById('pwd').value ==
      document.getElementById('confirmpwd').value) {
      document.getElementById('pwd').style.borderColor = 'green';
      document.getElementById('confirmpwd').style.borderColor = 'green';
      document.getElementById('confirmpwd').style.borderColor = 'green';
      button.disabled = false;
    } else {
      document.getElementById('pwd').style.borderColor = 'red';
      document.getElementById('confirmpwd').style.borderColor = 'red';
      button.disabled = true;
    }
}

function togglePasswordVisibility(inputId) {
  var input = document.getElementById(inputId);
  
  if (input.type === 'password') {
    input.type = 'text';
    toggleButton.innerHTML = '<img class="icon" src="img/icons/eye-off.png" alt="eye-off icon">';
    
  } else {
    input.type = 'password';
    toggleButton.innerHTML = '<img class="icon" src="img/icons/eye.png" alt="eye icon">';
  }
}

function toggleConfirmPasswordVisibility(inputId) {
  var input = document.getElementById(inputId);
  
  if (input.type === 'password') {
    input.type = 'text';
    toggleConfirmButton.innerHTML = '<img class="icon" src="img/icons/eye-off.png" alt="eye-off icon">';
    
  } else {
    input.type = 'password';
    toggleConfirmButton.innerHTML = '<img class="icon" src="img/icons/eye.png" alt="eye icon">';
  }
}

// Adiciona um EventListener "focus" no input de senha
passwordInput.addEventListener('focus', () => {
  toggleButton.style.display = 'block';
});

confirmPasswordInput.addEventListener('focus', () => {
  toggleConfirmButton.style.display = 'block';
});

