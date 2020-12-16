var cTime = new Date().getHours();
if (document.body) {
    if (10 <= cTime && cTime < 20) {
        document.body.background = "1.jpg";
    }
    else {
        document.body.background = "c.jpg";
    }
}

var images = new Array();
var i = 0;
var period = prompt("Please enter the image change interval (ms)");
if(isNaN(period)){
  alert("Invalid input data") ;
}
else{
alert("Thank you");

images[0] = 'os.jpg';
images[1] = 'w.jpg';
images[2] = 'sp.jpg';
images[3] = 'sum.jpg'
 
function viewImages() {
    document.getElementById("mainimg").src = images[i]; 
    i++;
    if (i == images.length) {
        i = 0;
    }
    setTimeout("viewImages()",period);
}   
}
