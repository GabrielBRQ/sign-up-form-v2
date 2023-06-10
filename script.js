const button = document.getElementById("button")
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

