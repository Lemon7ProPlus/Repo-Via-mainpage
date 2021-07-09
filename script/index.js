window.onload = function(){
    // initial 
}
var searchengiecurrent="google";

function openNav() {
    document.getElementById("navSidebar").style.width = "200px";
}
function closeNav() {
    document.getElementById("navSidebar").style.width = "0";
}
function whatBrowser() {
    // document.Browser.Name.value = navigator.appName;
    // document.Browser.Version.value = navigator.appVersion;
    // document.Browser.Code.value = navigator.appCodeName;
    document.Browser.Agent.value = navigator.userAgent;
}

function opensearchbarlist() {
  document.getElementById("searchbarlist").style.display="block";
}
function searchbar_google() {
  document.getElementById("searchbaricon").src='/blob/main/img/google.png';
  document.getElementById("searchbarlist").style.display="none";
  searchengiecurrent="google";
}
function searchbar_bing() {
  document.getElementById("searchbaricon").src='/blob/main/img/bing.png';
  document.getElementById("searchbarlist").style.display="none";
  searchengiecurrent="bing";
}
function searchbar_baidu() {
  document.getElementById("searchbaricon").src='/blob/main/img/baidu.png';
  document.getElementById("searchbarlist").style.display="none";
  searchengiecurrent="baidu";
}
function searchbar_duckgo() {
  document.getElementById("searchbaricon").src='/blob/main/img/duckgo.png';
  document.getElementById("searchbarlist").style.display="none";
  searchengiecurrent="duckgo";
}

function searchto(){
  var searchValue = document.getElementById("searchcontent").value;
    switch (searchengiecurrent) {
      case "google":
        window.location.href="https://www.google.com/search?q="+searchValue;
        break;
      case "bing":
        window.location.href="https://www.bing.com/search?q="+searchValue;
      case "baidu":
        window.location.href="https://www.baidu.com/s?wd="+searchValue;
      case "duckgo":
        window.location.href="https://duckduckgo.com/?q="+searchValue;
      default:
        break;
    }


}

var digitSegments = [
    [1,2,3,4,5,6],
    [2,3],
    [1,2,7,5,4],
    [1,2,7,3,4],
    [6,7,2,3],
    [1,6,7,3,4],
    [1,6,5,4,3,7],
    [1,2,3], 
    [1,2,3,4,5,6,7],
    [1,2,7,3,6]
]

document.addEventListener('DOMContentLoaded', function() {
  var _hours = document.querySelectorAll('.hours');
  var _minutes = document.querySelectorAll('.minutes');
  var _seconds = document.querySelectorAll('.seconds');
  
  setInterval(function() {
    var date = new Date();
    var hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();  
    
    setNumber(_hours[0], Math.floor(hours/10), 1);
    setNumber(_hours[1], hours%10, 1);

    setNumber(_minutes[0], Math.floor(minutes/10), 1);
    setNumber(_minutes[1], minutes%10, 1);

    setNumber(_seconds[0], Math.floor(seconds/10), 1);
    setNumber(_seconds[1], seconds%10, 1);
  }, 1000);
});

var setNumber = function(digit, number, on) {
  var segments = digit.querySelectorAll('.segment');
  var current = parseInt(digit.getAttribute('data-value'));

  // only switch if number has changed or wasn't set
  if (!isNaN(current) && current != number) {
    // unset previous number
    digitSegments[current].forEach(function(digitSegment, index) {
      setTimeout(function() {
        segments[digitSegment-1].classList.remove('on');
      }, index*45)
    });
  }
  
  if (isNaN(current) || current != number) {
    // set new number after
    setTimeout(function() {
      digitSegments[number].forEach(function(digitSegment, index) {
        setTimeout(function() {
          segments[digitSegment-1].classList.add('on');
        }, index*45)
      });
    }, 250);
    digit.setAttribute('data-value', number);
  }
}
