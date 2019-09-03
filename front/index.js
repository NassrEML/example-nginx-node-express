document.addEventListener("DOMContentLoaded", function(event){
    fetch("http://localhost:80").then(res => {
        return res.json();
    }).then(json => {
        document.getElementById("json").innerHTML=json;
    })
})