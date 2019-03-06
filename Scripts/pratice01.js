function storeSignUp() {
  var firstName = document.getElementById('firstName').value;
  localStorage.firstName = firstName;

  var lastName = document.getElementById('lastName').value;
  localStorage.lastName = lastName;

  if (firstName === lastName)
    alert('First name and Last name must be different');

  var email = document.getElementById('email').value;
  localStorage.email = email;

  var passWord = document.getElementById('passWord').value;
  localStorage.passWord = passWord;

  var phoneNumber = document.getElementById('phoneNumber').value;
  localStorage.phoneNumber = phoneNumber;

  function loadOldSignUp() {
    var firstName = document.getElementById('firstName');
    firstName.value = localStorage.firstName;

    var lastName = document.getElementById('lastName');
    lastName.value = localStorage.lastName;

    var email = document.getElementById('email');
    email.value = localStorage.email;

    var passWord = document.getElementById('passWord');
    passWord.value = localStorage.passWord;

    var phoneNumber = document.getElementById('phoneNumber');
    phoneNumber.value = localStorage.phoneNumber;
  }
}

$().alert();
