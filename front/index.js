document.addEventListener("DOMContentLoaded", function(event){
    fetch("http://localhost:3000/").then(res => {
        return res.json();
    }).then(json => {
        document.getElementById("json").innerHTML=JSON.stringify(json);
    })
})