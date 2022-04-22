function admin_submit_data(){
    var movie = "movie=" + document.getElementById('movie').value;
    var mood = "mood=" + document.getElementById('mood').value;
    var str = movie + "&" + mood;
    if(movie == "movie=" || mood == "mood="){
        alert("Please fill in all the fields");
    }
    else{
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = this.responseText;
                if(response == "success"){
                    alert("success")
                }
                else{
                    alert("failed");
                }
            }
        };
        xmlhttp.open("POST", "../php/admin/admin_submit_data.php?"+str, true);
        xmlhttp.send();
    }
}