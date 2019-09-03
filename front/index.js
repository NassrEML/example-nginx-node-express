document.addEventListener("DOMContentLoaded", function(event){
    fetch("http://localhost:3000/").then(res => {
        console.log(res);
        return res.json();
    }).then(json => {
        console.log(json);
        document.getElementById("json").innerHTML=json;
    })
})