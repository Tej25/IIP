function registration(){
    var name = "name=" + document.getElementById('name').value;
    var email = "email=" + document.getElementById('email').value;
    var password = "password=" + document.getElementById('password').value;
    var phone = "phone=" + document.getElementById('phone').value;
    var str = name + "&" + email + "&" + password + "&" + phone;
    alert(str);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = xmlhttp.responseText;
            if(response == "success"){
                window.location.href = "http://localhost/IIP/html/login.html";
            }
            else{
                alert("re-enter details");
            }
        }
    };
    xmlhttp.open("POST", "../php/user/registration.php?"+str, true);
    xmlhttp.send();
}