function search(){
    var e = document.getElementById("search_input");
    if(e.value != ""){
        window.via.searchText(e.value);e.value = "";
    }
    return false;
}

window.onload = function(){
    showTime();
};

function showTime(){
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var date = myDate.getDate();
    var dateArr = ["Sun","Mon",'Tues','Wednes','Thurs','Fri','Satur'];
    var day= myDate.getDay();
    var hours = myDate.getHours();
    var minutes = formatTime(myDate.getMinutes());
    var seconds = formatTime(myDate.getSeconds());
    var systemTime = document.getElementById("time");
    systemTime.innerHTML = " " + dateArr[day] + "day " + " &nbsp &nbsp" + hours + ":" + minutes + ":" + seconds;
    setTimeout("showTime()",500);
}

function formatTime (i){
    if(i < 10){
        i = "0" + i;
    }
    return i;
}

