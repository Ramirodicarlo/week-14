console.log('Runnig js to validate the diferents inputs values');
var fnameElement = document.getElementById('fnamei');
var emailElement = document.getElementById('emaili');
var passElement = document.getElementById('passwordi');
var conPassElement = document.getElementById('confirm-passwordi');
var submitB = document.getElementById("form");

var fn = false;
var em = false;
var pas = false;
var cpas = false;



fnameElement.onblur = function validateFullName(){
    var fname = fnameElement.value;
    var space = fname.match(/ /g);
    var length = fname.length;
    if(space !== null){
        var pSpace ="";
        var check = true;
    }
    else{
        var pSpace = "Full name need to contain First Name and Last Name.</br>" ;
        var check = false;
    }
    if (length > 6){
        var pLength =""
        var check2 = true;
    }
    else{
        var pLength = "Full name need to contain at least 6 characters.";
        var check2 = false;
    }
    document.getElementById("pfname").innerHTML = pSpace + pLength
    if (check && check2 ){
        return fn = fnameElement.value ;
    }
}
fnameElement.onfocus = function removeFullName(){
    document.getElementById("pfname").innerHTML = "";
};

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
passElement.onfocus = function removePasword(){
    document.getElementById("ppassword").innerHTML = "";
};

conPassElement.onblur = function validateConPassword(){
    var passwordC = conPassElement.value;
    var passwordA = passElement.value;
    if(passwordA == passwordC){
        var pValiCon ="";
        check = true;
    }
    else{
        var pValiCon = "Passwords must be the same." ;
        check = false;
    }
    document.getElementById("cpassword").innerHTML = pValiCon;
    if (check){
        return cpas = conPassElement.value
    };
}
conPassElement.onfocus = function removeConPassword(){
    document.getElementById("cpassword").innerHTML = "";
};

submitB.addEventListener ("submit", function(a){
    a.preventDefault();
    document.getElementById("validation").innerHTML = "Information submited:"+ fn +" "+ em 
    +" "+ pas +" " + cpas;
    fetch('http://localhost:4000/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                name: fn,
                email: em,
                pass: pas,
            })
        })
        .then (response => response.json())
        .then (data => console.log(data))
        .catch(error =>console.log("Error",error))
        }
)