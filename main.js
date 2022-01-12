document.getElementById("daily").addEventListener("click", daily);
document.getElementById("weekly").addEventListener("click", weekly);
document.getElementById("monthly").addEventListener("click", monthly)

function focus(btn) {
    var btns = document.querySelectorAll('button');
    btns.forEach(function(btn) {
        btn.classList.remove('active');
    });
    btn.classList.add('active');
}

function daily() {

    focus(this);

    document.getElementById("work time").innerHTML = "5hrs";
    document.getElementById("work previous").innerHTML = "Previous - 7hrs"
    
    document.getElementById("play time").innerHTML = "1hr";
    document.getElementById("play previous").innerHTML = "Previous - 2hrs"
    
    document.getElementById("study time").innerHTML = "0hrs";
    document.getElementById("study previous").innerHTML = "Previous - 1hr"
    
    document.getElementById("exercise time").innerHTML = "1hr";
    document.getElementById("exercise previous").innerHTML = "Previous - 1hr"
    
    document.getElementById("social time").innerHTML = "1hr";
    document.getElementById("social previous").innerHTML = "Previous - 3hrs"
    
    document.getElementById("selfcare time").innerHTML = "0hrs";
    document.getElementById("selfcare previous").innerHTML = "Previous - 1hr"

    
}

function weekly() {

    focus(this);

    document.getElementById("work time").innerHTML = "32hrs";
    document.getElementById("work previous").innerHTML = "Previous - 36hrs"
    
    document.getElementById("play time").innerHTML = "10hrs";
    document.getElementById("play previous").innerHTML = "Previous - 8hrs"
    
    document.getElementById("study time").innerHTML = "4hrs";
    document.getElementById("study previous").innerHTML = "Previous - 7hrs"
    
    document.getElementById("exercise time").innerHTML = "4hrs";
    document.getElementById("exercise previous").innerHTML = "Previous - 5hrs"
    
    document.getElementById("social time").innerHTML = "5hrs";
    document.getElementById("social previous").innerHTML = "Previous - 10hrs"
    
    document.getElementById("selfcare time").innerHTML = "2hrs";
    document.getElementById("selfcare previous").innerHTML = "Previous - 2hrs"

}

function monthly() {

    focus(this);

    document.getElementById("work time").innerHTML = "103hrs";
    document.getElementById("work previous").innerHTML = "Previous - 128hrs"
    
    document.getElementById("play time").innerHTML = "23hrs";
    document.getElementById("play previous").innerHTML = "Previous - 29hrs"
    
    document.getElementById("study time").innerHTML = "13hrs";
    document.getElementById("study previous").innerHTML = "Previous - 19hrs"
    
    document.getElementById("exercise time").innerHTML = "11hrs";
    document.getElementById("exercise previous").innerHTML = "Previous - 18hrs"
    
    document.getElementById("social time").innerHTML = "21hrs";
    document.getElementById("social previous").innerHTML = "Previous - 23hrs"
    
    document.getElementById("selfcare time").innerHTML = "7hrs";
    document.getElementById("selfcare previous").innerHTML = "Previous - 11hrs"

}

