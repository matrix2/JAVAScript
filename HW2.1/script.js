	var NamesList = [['Anas AQrabawi',"m"],['Anuradha Mohanty',"f"],['Gary Aldahoul',"m"],
	['Ehsan Mansoor',"m"],['Haretha Al Shikh',"m"],['Krishna Rana',"m"],['Marco De Cara',"m"],
	['Mohamad Subhiyeh',"m"],['Mohammmed Azizul',"m"],['Mohammad Rahman',"m"],['Sajid Nazir',"m"],
	['Samara Sallam',"f"],['Zoey Zou',"f"],['Sayed Zeeshan Haider',"m"],['Vignesh Ram',"m"]];
	// var NamesList = [['Anas AQrabawi',"m"],['Zoey',"f"]];
	var grd=[];
	var students = [];
	var avg=0;
	let max =0;
	let min = 0 ;
	var gend ="";
	for(var x = 65 ;x<96; x++){
		grd.push(x);
		
	}
	
	
	for(var i = 0 ;i<NamesList.length; i++){
	
	  var person = {
    firstName:NamesList[i][0],
    address:"CPH",
    telephone:221122,
    PostCode:Math.floor(Math.random() * 5390) ,
	course :"HYF",
	grade:grd[Math.floor(Math.random() * grd.length)],
	gender:NamesList[i][1]
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
var msg = document.getElementById('msg'+0);

for (let t=0;t<=NamesList.length;t++){
	
    var clone = original.cloneNode(true); // "deep" clone
   clone.id = "chip" + (t); // there can only be one element with an ID
   clone.tabIndex=t +1;
	
	 
    // event handlers are not cloned
  

    newimgid.id="img"+ t;
   

    newNameid.id="name"+ t;
	newulid.id= t+1;
	 clone.name =  (t+1);
	
	msg.id="msg"+t;
	original.parentNode.appendChild(clone);
	
	var c = newulid.childNodes;
	
	gend =students[t].gender;
	console.log(gend);
	if(gend === "f") 
	{
		
		document.getElementById('img'+t).src="female.png";
	}
	else
	{
		
		document.getElementById('img'+t).src="male.png";
	}
	
   document.getElementById('name'+t).innerHTML=students[t].firstName;
   c[1].innerHTML="Grade: " + students[t].grade ; 
   c[3].innerHTML="Course :" + students[t].course; 
   c[5].innerHTML="Post Address :" + students[t].PostCode; 
	window.onerror = stoperror;
	
}


function getGender(){
	for (var a=0;a<students.length;a++) {
		console.log(a+1);
		
	}
	console.log(students[0].gender);
	 
}
function stoperror() {
	


console.log(avg/NamesList.length );
document.getElementsByClassName("nav-link")[0].innerHTML="Class Average:" ;
document.getElementsByClassName("nav-link")[1].innerHTML=avg/NamesList.length;
}



var i;


   function reply_click(clicked_name) {
     
	 
        var content = document.getElementById(clicked_name-1);
		var onlyNum =  content.childNodes[1].innerHTML.replace(/\D/g,'');
		
		
		 
		
			console.log(max);
		
        if (content.style.display === "block") {
            // content.style.display = "none";
        } else {
            content.style.display = "block";
			
			console.log(content.childNodes[1].innerHTML);
			if(clicked_name<=9) {
				var top1 = content.childNodes[0].offsetTop;
				window.scrollTo(0, top1);
				
			};
			if(clicked_name>7) {
				var top2 = content.childNodes[3].offsetTop;
				window.scrollTo(0, top2);
				
			};
			console.log(top);
			if (onlyNum == max){  
			content.childNodes[7].innerHTML="Congrats";
			content.childNodes[7].style.listStyleType = "none";
			}
			if (onlyNum == min){content.childNodes[7].innerHTML="Hard Luck,Keep Going";  
						content.childNodes[7].style.listStyleType = "none";
			}
			if (onlyNum>=  80 & onlyNum<  max){content.childNodes[7].innerHTML="Good Job";  
						content.childNodes[7].style.listStyleType = "none";
						
			}
			if(onlyNum>  min & onlyNum<  80){content.childNodes[7].innerHTML="Fair Enough";  
						content.childNodes[7].style.listStyleType = "none"; }
        }
    };
 
  function closeme(clicked_name) {
     
	 console.log(clicked_name);
        var content = document.getElementById(clicked_name-1);
		console.log(content);
        if (content.style.display === "block") {
            content.style.display = "none";
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
        } else {
            content.style.display = "none";
			var onlyNum =  content.childNodes[1].innerHTML.replace(/\D/g,'');
			console.log(onlyNum);
			
			
        }
    };
	
	
	function searchByAnything(txt){
		
		for (u=0 ; u<NamesList.length; u++) {
			var up1 = txt.toLowerCase();
			var up2 =NamesList[u][0].toLowerCase();
			if (up2.match(up1)) {  

			
			var actv=[];
			actv.push(u);
			console.log(actv);
			var lstitem = actv[actv.length-1];
			var lstpressed =document.getElementById("chip"+(u+1));
			if (typeof lstpressed.onclick == "function") {
			lstpressed.onclick.apply(lstpressed);
			for(l=0 ;l<actv.length-1;l++){ 
				
				var closeplz =document.getElementById("chip"+(actv[l]+1));
				closeplz.onmouseout.apply(closeplz);
				
			}
			}
			
			}
			else{
				console.log("1");
				var returnedInfo =document.getElementById("chip"+(u+1));
				returnedInfo.onmouseleave.apply(returnedInfo);
			}
			
			
		}
		
	
		
	}