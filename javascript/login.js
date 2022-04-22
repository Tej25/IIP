function login(){
    window.location.href = "http://localhost/IIP/html/home.html";
    var email = "email=" + document.getElementById('email').value;
    var password = "password=" + document.getElementById('password').value;
    var str = email + "&" + password;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = xmlhttp.responseText;
            if(response == "success"){
                alert();
            }
            else{
                
            }
        }
    };
    xmlhttp.open("POST", "../php/user/login.php?"+str, true);
    xmlhttp.send();
}