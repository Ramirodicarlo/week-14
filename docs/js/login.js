
console.log("Validation run");
var myLabelObjet = document.getElementsByTagName("label");
var labelLength= myLabelObjet.length;
if(labelLength != 0){
    var makeString = document.getElementById("email");
    if( makeString != null){
        var mEmail = makeString.firstChild;
        var myEmail = mEmail.data;
        var comparationE = myEmail == "Email";
        if (comparationE){
            var compE = "It has an Email label.";
        }
        else{
            var compE = "It doesn't have an Email label.";
        }
    } 
    else{
        var compE = "It doesn't have an Email label.";
    }

    var makeString1 = document.getElementById("password");
    if( makeString1 != null){
        var mPassword = makeString1.firstChild;
        var myPassword = mPassword.data;
        var comparationP = myPassword == "Password";
        if (comparationP){
            var compP = "It has a Password label";
        }
        else{
            var compP = "It doesn't have a Password label";
        }
    }
    else{
        var compP = "It doesn't have a Password label";
    }
} 
else{
};
var myInputObjet = document.getElementsByTagName("input");
var inputLength = myInputObjet.length;
if(inputLength != 0){
    var makeString2 = document.getElementsByName("email");
    if( makeString2 != null){
        var iEmail = makeString2[0].type;
        var comparationE = iEmail == "email";
        if (comparationE){
            var inpE = "It has an Email input.";
        }
        else{
            var inpE = "It doesn't have an Email input.";
        }
    } 
    else{
        var inpE = "It doesn't have an Email input.";
    }
    if(makeString2[0].required){
        var inpER = "Email has a required atribute.";
    }
    else{
        var inpER = "Email doesn't have a required atribute."
    };

    var makeString3 = document.getElementsByName("password");
    if( makeString3 != null){
        var iPassword = makeString3[0].type;
        var comparationP = iPassword == "password";
        if (comparationP){
            var inpP = "It has a Password input.";
        }
        else{
            var inpP = "It doesn't have a Password input.";
        }
    }
    else{
        var inpP = "It doesn't have a Password input.";
    }
    if(makeString3[0].required){
        var inpPR = "Password has a required atribute.";
    }
    else{
        var inpPR = "Password doesn't have a required atribute."
    };
    var makeString4 = document.getElementsByName("login");
    if( makeString4 != null){
        var iLogin = makeString4[0].type;
        var comparationL = iLogin == "submit";
        if (comparationL){
            var inpL = "It has a Login input.";
        }
        else{
            var inpL = "It doesn't have a Login input.";
        }
    } 
    else{
        var inpL = "It doesn't have a Login input.";
    }
} 
else{         
};
var myAnchorObjet = document.getElementById("anchor-register");
var anchorHref = myAnchorObjet.href;
var compAnchor ="file:///D:/Curso%20Radium%20Rocket/Wek-9/register.html";
if(anchorHref == compAnchor){
    var anchT ="It has a correct Anchor Tag.";
}
else{
    var anchT ="It doesn't have a correct Anchor Tag.";
}
document.getElementById("validation").style.display = "block";
document.getElementById("validation").innerHTML = "<p>"+ compE + "</p>" +
"<p>"+ inpE + "</p>" + "<p>" + inpER + "</p>" + "<p>" + compP + "</p>" +
"<p>" + inpP + "<p>" + inpPR + "</p>" + "</p>" + "<p>" + inpL + "</p>"+"<p>" + anchT + "</p>";

