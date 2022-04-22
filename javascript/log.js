function login(){
    var email = "email=" + document.getElementById('email').value;
    var password = "password=" + document.getElementById('password').value;
    var str = email + "&" + password;
    alert(str);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = xmlhttp.responseText;
            if(response == "success"){
                window.location.href = "http://localhost/IIP/html/home.html";
            }
            else{
                alert("re-enter details");
            }
        }
    };
    xmlhttp.open("POST", "../php/user/login.php?"+str, true);
    xmlhttp.send();
}
function redirect(){
    window.location.href = "http://localhost/IIP/html/registration.html";
}