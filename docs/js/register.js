console.log("Validation run");
var myLabelObjet = document.getElementsByTagName("label");
var labelLength= myLabelObjet.length;
if(labelLength != 0){
    var makeString = document.getElementById("fname");
    if( makeString != null){
        var mFname = makeString.firstChild;
        var myFname = mFname.data;
        var comparationF = myFname == "Full Name";
        if (comparationF){
            var compF = "It has a Full Name label.";
        }
        else{
            var compF = "It doesn't have a Full Name label.";
        }
    } 
    else{
        var compF = "It doesn't have a Full Name label.";
    }
    var makeString1 = document.getElementById("email");
    if( makeString1 != null){
        var mEmail = makeString1.firstChild;
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

    var makeString2 = document.getElementById("password");
    if( makeString2 != null){
        var mPassword = makeString2.firstChild;
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
    var makeString3 = document.getElementById("password");
    if( makeString3 != null){
        var mCPassword = makeString3.firstChild;
        var myCPassword = mCPassword.data;
        var comparationCP = myCPassword == "Password";
        if (comparationCP){
            var compCP = "It has a Confirm Password label";
        }
        else{
            var compCP = "It doesn't have a Confirm Password label";
        }
    }
    else{
        var compCP = "It doesn't have a Confirm Password label";
    }
} 
else{
};
var myInputObjet = document.getElementsByTagName("input");
var inputLength = myInputObjet.length;
if(inputLength != 0){
    var makeString4 = document.getElementsByName("fname");
    if( makeString4 != null){
        var iFName = makeString4[0].type;
        var comparationF = iFName == "text";
        if (comparationF){
            var inpF = "It has a Full Name input.";
        }
        else{
            var inpF = "It doesn't have a Full Name input.";
        }
    } 
    else{
        var inpE = "It doesn't have a Full Name input.";
    }
    if(makeString4[0].required){
        var inpFR = "Full Name has a required atribute.";
    }
    else{
        var inpFR = "Full Name doesn't have a required atribute."
    };
    var makeString5 = document.getElementsByName("email");
    if( makeString5 != null){
        var iEmail = makeString5[0].type;
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
    if(makeString5[0].required){
        var inpER = "Email has a required atribute.";
    }
    else{
        var inpER = "Email doesn't have a required atribute."
    };
    var makeString6 = document.getElementsByName("password");
    if( makeString6 != null){
        var iPassword = makeString6[0].type;
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
    if(makeString6[0].required){
        var inpPR = "Password has a required atribute.";
    }
    else{
        var inpPR = "Password doesn't have a required atribute."
    };
    var makeString7 = document.getElementsByName("confirm-password");
    if( makeString7 != null){
        var iCPassword = makeString7[0].type;
        var comparationCP = iCPassword == "password";
        if (comparationCP){
            var inpCP = "It has a Confirm Password input.";
        }
        else{
            var inpCP = "It doesn't have a Confirm Password input.";
        }
    }
    else{
        var inpCP = "It doesn't have a Confirm Password input.";
    }
    if(makeString7[0].required){
        var inpCPR = "Confirm Password has a required atribute.";
    }
    else{
        var inpCPR = "Confirm Password doesn't have a required atribute."
    };
    var makeString8 = document.getElementsByName("login");
    if( makeString8 != null){
        var iLogin = makeString8[0].type;
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

document.getElementById("validation").style.display = "block";
document.getElementById("validation").innerHTML = "<p>"+ compE + "</p>" +
 "<p>"+ inpE + "</p>" + "<p>" + inpER + "</p>"+ "<p>" + compF + "</p>"+ "<p>" + inpF + "</p>" 
 + "<p>" + inpFR + "</p>"+ "<p>" + compP + "</p>" + "<p>" + inpP + "<p>" + inpPR + "</p>" + "</p>" 
 + "<p>" + compCP + "</p>"+"<p>" + inpCP + "</p>" + "<p>" + inpCPR + "</p>" + "<p>" + inpL + "</p>";
