function profile(){
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var passed_array = JSON.parse(xmlhttp.responseText);
            document.getElementById("Name").value = passed_array.name;
            document.getElementById("Email").value = passed_array.email;
            document.getElementById("Phone").value = passed_array.phone;
        }
    };
    xmlhttp.open("GET", "../php/user/profile.php?", true);
    xmlhttp.send();
}