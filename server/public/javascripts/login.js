
//validating user input
function validateForm(){
    if(document.getElementById('user').value === ''){
        alert('Username field empty')
        return false;
    }
    else if(document.getElementById('password').value === ''){
        alert('Password field empty')
        return false;
    }
    else{
        return true;
    }
}

//prevents form from being submitted without first checking if fields are filled or not.
var form = document.getElementById("login");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submission
  validateForm(); // validate form fields. will return true or false.
});