console.log('Runnig js to validate the diferents inputs values');
var emailElement = document.getElementById('emaili');
var passElement = document.getElementById('passwordi');
var submitB = document.getElementById("form");

var em = false;
var pas = false;


emailElement.onblur = function validateEmail(){
    var email = emailElement.value;
    var validE = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var aa = validE.test(email) ? true : false
    if(aa){
        var eAEmail ="";
    }
    else{
        var eAEmail = "Email must enter a valid email.</br>" ;
    }
    document.getElementById("pemail").innerHTML = eAEmail;
    if (aa){
        return em = emailElement.value;
    };
}
emailElement.onfocus = function removeEmail(){
    document.getElementById("pemail").innerHTML = "";
};

passElement.onblur = function validatePassword(){
    var passwordE = passElement.value;
    var validatePass = passwordE.match(/([A-z]|[0-9])/g);
    var lengthPass = passwordE.length;
    if(validatePass !== null){
        var pValiPass ="";
        var check = true;
    }
    else{
        var pValiPass = "Password must contain numbers or letters.</br>" ;
        var check = false;
    }
    if (lengthPass > 7){
        var paLength =""
        var check2 = true;
    }
    else{
        var paLength = "Password need to contain at least 8 characters.";
        var check2 = false;
    };
    document.getElementById("ppassword").innerHTML = pValiPass + paLength
    if (check && check2){
        return pas = passElement.value;
    };   
}
passElement.onfocus = function removeFullName(){
    document.getElementById("ppassword").innerHTML = "";
};

submitB.addEventListener ("submit", function(a){
    a.preventDefault();
    document.getElementById("validation").innerHTML = "Information submited:"+ em 
    +" "+ pas+" " ;
    fetch('http://localhost:4000/login',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            email: emailElement.value,
            pass: passElement.value,
        })
    })
    .then (response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error))
    }
)