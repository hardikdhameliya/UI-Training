var data = ""
function validateUser() {
    var element = document.getElementById("userid").value;
    if (element == "" || element == null) {
        document.getElementById("userErrorId").innerHTML = "Can not be blank"
        return false
    }
    document.getElementById("userErrorId").innerHTML = ""
    data = data + "username is " + element + "<br/>"
    return true
}
function validatePasswd() {
    var element = document.getElementById("passid").value;
    if (element == "" || element == null) {
        document.getElementById("passwdErrorId").innerHTML = "Can not be blank"
        return false
    }

    document.getElementById("passwdErrorId").innerHTML = ""

    return true
}
function validateConfirmPasswd() {
    var pwValue = document.getElementById("passid").value;
    var cpwValue = document.getElementById("passConfirmid").value;
    if (cpwValue == "" || cpwValue == null) {
        document.getElementById("passwdConfirmErrorId").innerHTML = "Can not be blank"
        return false
    }

    if (pwValue != cpwValue) {
        document.getElementById("passwdConfirmErrorId").innerHTML = "password doesn't match"
        return false
    }
    data = data + "password is " + cpwValue + "<br/>"
    document.getElementById("passwdConfirmErrorId").innerHTML = ""
    return true
}

function validateGender() {
    var gender = document.getElementsByName("Gender")
    if (!(gender[0].checked || gender[1].checked)) {
        document.getElementById("radioErrorId").innerHTML = "Select at least one gender"
        return false
    }
    var g = ""
    if (gender[0].checked) {
        g = gender[0].value
    } else {
        g = gender[1].value
    }
    data = data + "gender is " + g + "<br/>"
    document.getElementById("radioErrorId").innerHTML = ""
    return true
}

function validateDepartment() {
    var dd = document.getElementById("departmentId")
    if (dd.selectedIndex == 0) {
        document.getElementById("selectErrorId").innerHTML = "Select department"
        return false
    } else {
        document.getElementById("selectErrorId").innerHTML = ""
    }
    data = data + "department is" + dd.value + "<br/>"
    return true
}

function validateCheckBox() {
    var checkBoxValue = document.getElementById("checkBoxId")
    if (!checkBoxValue.checked) {
        document.getElementById("checkBoxErrorId").innerHTML = "Please accept terms and condition"
        return false
    } else {
        document.getElementById("checkBoxErrorId").innerHTML = ""
    }
    document.getElementById("submitId").disabled = false
    return true
    // if (validateUser() && validatePasswd() && validateConfirmPasswd() && validateGender() && validateDepartment()) {
    //     document.getElementById("submitId").disabled = false
    // }
}

function printOutput() {
    document.getElementById("outputId").innerHTML = data
    return false

}