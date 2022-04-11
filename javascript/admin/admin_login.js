function admin_login(){
    var email = "email=" + document.getElementById('email').value;
    var password = "password=" + document.getElementById('password').value;
    var str = email + "&" + password;
    if(email == "email=" || password == "password="){
        alert("Please fill in all the fields");
    }
    else{
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = xmlhttp.responseText;
                if(response == "success"){
                    window.location.href = "http://localhost/IIP/html/home.html";
                }
                else{
                    alert("Invalid email or password");
                }
            }
        };
        xmlhttp.open("POST", "../php/admin/admin_login.php?"+str, true);
        xmlhttp.send();
    }
}