// var NamesList = ['Anas AQrabawi','Anuradha Mohanty','Gary Aldahoul','Ehsan Mansoor','Haretha Al Shikh','Krishna Rana','Marco De Cara','Mohamad Subhiyeh','Mohammmed Azizul','Mohammad Rahman','Sajid Nazir' ,'Samara Sallam','Zoey Zou','Sayed Zeeshan Haider','Vignesh Ram'];
var NamesList = ['Anas AQrabawi','Anuradha Mohanty','Gary Aldahoul','Ehsan Mansoor','Haretha Al Shikh','Krishna Rana','Marco De Cara','Mohamad Subhiyeh','Mohammmed Azizul','Mohammad Rahman','Sajid Nazir' ,'Samara Sallam','Zoey Zou','Sayed Zeeshan Haider','Vignesh Ram'];
var tbl2 = document.getElementById("result");
var tbl = document.getElementById("TOnames");
// var NamesCopy = NamesList.slice(0);	
var ColorArr=['#0E6655','#801E1E','#2471A3','#4A235A','#F5B041','#FA8072','#4169E1','#778899'];



var resultarr = [];
var pairarrnorepeat = [];
var i = 0 ;

var unt = "undefined";


function loader()
{


for( var i = 0; i < NamesList.length; i++) 
{	

	var row2=document.createElement('tr')
	row2.setAttribute('id',i);
	var eltd = document.createElement('td');
	eltd.setAttribute('id',i);
	var eltd2 = document.createElement('td');
	eltd2.setAttribute('id',i);
	var pair = document.createElement('td');
	pair.setAttribute('id',i);
	var txt = document.createTextNode(NamesList[i]);
	var txt2 = document.createTextNode(i+1);
	
	

	tbl.appendChild(row2);
	row2.appendChild(eltd2);
	eltd2.appendChild(txt2);
	row2.appendChild(eltd);
	eltd.appendChild(txt);
	
	
	
			
}
printme();
document.getElementById("date").innerHTML = (new Date()).toLocaleDateString('en-GB');;
}
var u = 0;
var o = 0 ;
function clearandload(){

loader();
}
function randommylist(){
  var NamesCopy= randomarr(NamesList);
  
for(var n=0; n< NamesCopy.length; n++){
	
	if (NamesCopy[n+1]== undefined) { 
		console.log("true");
		NamesCopy[n+1]="Ask Your Mentor";
	}
	resultarr.push(NamesCopy[n] + " | " + NamesCopy[n+1]);
	
	n++;
	
}


}
function printme(){
	
	randommylist();
var Colorcopy= randomarr(ColorArr);  
for(var m=0; m < resultarr.length; m++){
	var y =Math.floor(Math.random() * resultarr.length);
	var rowresult=document.createElement('tr')
	rowresult.setAttribute('id',m);
	var resTD = document.createElement('td');
	resTD.setAttribute('id',m);
	var resTD = document.createElement('td');
	resTD.setAttribute('id',m);
	
	var teamid = document.createTextNode("Team " + ( m+1) + " : ");
	var pairtxt = document.createTextNode(resultarr[m]);
	
	tbl2.appendChild(rowresult);
	rowresult.appendChild(resTD);
	resTD.appendChild(teamid);
	rowresult.appendChild(resTD);
	resTD.appendChild(pairtxt);
	rowresult.style.color=Colorcopy[m];
	
}

}

console.log("picked array: ");
function randomarr(array){
for(var k=0; k< array.length; k++) {
	var x =Math.floor(Math.random() * array.length);
	var tempindex=array[k];
	array[k] = array[x];
	array[x]=tempindex;
}
return array;

}

