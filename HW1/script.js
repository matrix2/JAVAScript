
var dateObj=new Date();
var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
var txt=dateObj.toString();
console.log(txt);


var Day= dateObj.getUTCDate();
var youTyped=document.getElementById("youTyped");



console.log(youTyped);

function ManageOurMeeting() {
	var onlyDay = youTyped.value;
	console.log(youTyped.value);
	var onlyNum =  onlyDay.replace(/\D/g,'');
	console.log(onlyNum);
	var newdate=new Date(dateObj);
	newdate.setDate(newdate.getDate()+ parseInt(onlyNum));
	console.log(newdate);
	var txt2=newdate.toString();
	console.log(txt2 + "ok");
	var day2=txt2.substr(0,3);
	console.log(Day);
	
	console.log(onlyNum);
	console.log(dateObj + 5);
	
	document.getElementById("todayis").style.display="block";
	document.getElementById("todayis").innerHTML="Today is :" + n + "\n" + "How Many Days to meet : " + onlyNum + "\n" + "We are meeting on " + day2 + " " + (new Date()).toLocaleDateString('en-GB'); 

	
	
}


