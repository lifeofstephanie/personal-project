let $ = function (id) {
  return document.getElementById(id);
};
let reg = function () {
  let firstname = $("firstname").value;
  let lastname = $("lastname").value;
  let resadd = $("resadd").value;
  let email = $("email").value;
  let phoneno = $("phoneno").value;
  let validated = true;
  let atIndex = email.indexOf("@");
  if (firstname == "") {
    //alert("Required field.");
    $("empty_firstname").textContent = "Required field.";
    validated = false;
  } else {
    $("empty_firstname").textContent = "";
    validated = true;
  }

  if (lastname == "") {
    $("empty_lastname").textContent = "Required field.";
    validated = false;
  } else {
    $("empty_lastname").textContent = "";
    validated = true;
  }

  if (resadd == "") {
    $("empty_resadd").textContent = "Required field.";
    validated = false;
  } else {
    $("empty_resadd").textContent = "";
    validated = true;
  }

  if (email == "") {
    $("empty_email").textContent = "Required field.";
    validated = false;
  } else if (atIndex == -1) {
    $("empty_email").textContent = "Invalid email.";
    validated = false;
  } else {
    $("empty_email").textContent = "";
    validated = true;
  }

  if (phoneno == "") {
    $("empty_phoneno").textContent = "Required field.";
    validated = false;
  } else {
    $("empty_phoneno").textContent = "";
    validated = true;
  }

  if (validated) {
    $("regform").submit();
    alert("You have successfully registered");
  }

  //return validated;
};
window.onload = function () {
  $("register").onclick = reg;
  $("firstname").focus();
};
