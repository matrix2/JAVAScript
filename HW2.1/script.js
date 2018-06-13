	var NamesList = ['Anas AQrabawi','Anuradha Mohanty','Gary Aldahoul','Ehsan Mansoor','Haretha Al Shikh','Krishna Rana','Marco De Cara','Mohamad Subhiyeh','Mohammmed Azizul','Mohammad Rahman','Sajid Nazir' ,'Samara Sallam','Zoey Zou','Sayed Zeeshan Haider','Vignesh Ram'];
	var grd=[];
	var students = [];
	var avg=0;
	let max =0;
	let min = 0 ;
	for(var x = 65 ;x<96; x++){
		grd.push(x);
		
	}
	console.log(grd);
	
	for(var i = 0 ;i<NamesList.length; i++){
	  var person = {
    firstName:NamesList[i],
    address:"CPH",
    telephone:221122,
    PostCode:Math.floor(Math.random() * 5390) ,
	course :"HYF",
	grade:grd[Math.floor(Math.random() * grd.length)]
	};
	 students.push(person);
	
	}
	console.log(students);
    
	function avgofgrades(){
		for(var y = 0 ;y<NamesList.length; y++){
			 avg=students[y].grade +avg ;
			 
	}
	}
	var tempgrd=[];
	
	
	function getMaxGrade(){
		for (let z=0;z < NamesList.length;z++) {
		tempgrd.push(students[z].grade);}
		max=Math.max.apply(null,tempgrd);
		min=Math.min.apply(null,tempgrd);
		console.log(max);
		console.log(min);
	}
	
	
avgofgrades();
getMaxGrade();


var original = document.getElementById('chip' + 0);
var newimgid = document.getElementById('img'+0);
var newNameid = document.getElementById('name'+0);
var newulid = document.getElementById('0');
for (let t=0;t<=NamesList.length;t++){
	
    var clone = original.cloneNode(true); // "deep" clone
   clone.id = "chip" + (t); // there can only be one element with an ID
   
	
	 
    // event handlers are not cloned
  

    newimgid.id="img"+ t;
   

    newNameid.id="name"+ t;
	newulid.id= t+1;
	 clone.name =  (t+1);
	console.log(newulid.id);
	
	original.parentNode.appendChild(clone);
	var c = newulid.childNodes;
   document.getElementById('name'+(t)).innerHTML=NamesList[t];
   c[1].innerHTML="Grade: " + students[t].grade ; 
   c[3].innerHTML="Course :" + students[t].course; 
   c[5].innerHTML="Post Address :" + students[t].PostCode; 
	window.onerror = stoperror;
}
function stoperror() {
	var mybr = document.createElement('br');
   var iDiv = document.createElement('div');
	var lbl = document.createElement('h1');
iDiv.id = 'block';

document.getElementsByTagName('body')[0].appendChild(mybr);
document.getElementsByTagName('body')[0].appendChild(iDiv);

document.getElementById('block').innerHTML="Class Average:" + avg/NamesList.length ;
console.log(avg/NamesList.length );
}



var i;


   function reply_click(clicked_name) {
      if (clicked_name===0){ clicked_name=0;}
	 console.log(clicked_name);
        var content = document.getElementById(clicked_name-1);
		console.log(content);
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
			var onlyNum =  content.childNodes[1].innerHTML.replace(/\D/g,'');
			console.log(onlyNum);
			if (onlyNum ==max){  alert("Congrats ! :) You Made It and Got the Max Degree"); }
			if (onlyNum ==min){  alert("Min Score:Hard Luck..Keep Going You Can do It"); }
        }
    };
 
  
	
	
