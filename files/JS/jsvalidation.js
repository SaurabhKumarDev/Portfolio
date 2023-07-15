//Contact Page Validation's

function validateForm() {
    var org_name = document.forms["myForm"]["org_name"].value;
    var name = document.forms["myForm"]["name"].value;
    var mail = document.forms["myForm"]["mail"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var msg = document.forms["myForm"]["msg"].value;

    if(org_name == "" && name == "" && mail =="" && msg == "") {
        document.getElementById("msg6").innerHTML ="*Mandatory to fill all fields";
        return false;
    }
    
    if(org_name == "") {
        document.getElementById("msg1").innerHTML ="*Please, fill the Organization name";
        return false;
    } else if(name == "") {
        document.getElementById("msg2").innerHTML = "*Provide Your Name";
        return false;
    } else if(mail =="") {
        document.getElementById("msg3").innerHTML = "*Enter Email";
        return false;
    } else if(msg == "") {
        document.getElementById("msg5").innerHTML = "*Your Message first";
        return false;
    }

    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!emailPattern.test(mail)) {
        alert("Enter Correct Email");
        return false;
    }
    return true;
}