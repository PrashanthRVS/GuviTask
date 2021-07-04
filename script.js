
function myFunction() {

 var table = document.getElementById("myTable");

 var newRow = table.insertRow();

var FirstName = newRow.insertCell();
var LastName = newRow.insertCell();
var Address = newRow.insertCell();
var Pincode = newRow.insertCell();
var Gender = newRow.insertCell();
var Food = newRow.insertCell();
var State = newRow.insertCell();
var Country = newRow.insertCell();


FirstName.innerHTML = document.getElementById("exampleInputfname1").value;
LastName.innerHTML = document.getElementById("exampleInputlname1").value;
Address.innerHTML = document.getElementById("exampleInputadd1").value +","+document.getElementById("exampleInputadd2").value+","+document.getElementById("exampleInputadd3").value;
Pincode.innerHTML = document.getElementById("exampleInputPincode1").value;
if(document.getElementById("male").checked){
  Gender.innerHTML=document.getElementById("male").value;
} else if(document.getElementById("female").checked)
{
  Gender.innerHTML=document.getElementById("female").value;
} else if(document.getElementById("other").checked)
{
  Gender.innerHTML=document.getElementById("other").value;
}

var l1 = document.getElementById("chibri");  
var l2 = document.getElementById("mutbri");  
var l3 = document.getElementById("VegBri");  
var l4 = document.getElementById("MusBri");  
var l5 = document.getElementById("Meals");  

   
var res=" ";   
if (l1.checked == true){  
  var pl1 = document.getElementById("chibri").value;  
  res = pl1 + ",";   
}   
if (l2.checked == true){  
  var pl2 = document.getElementById("mutbri").value;  
  res = res + pl2 + ",";   
}  
if (l3.checked == true){  
  var pl3 = document.getElementById("VegBri").value;  
  res = res + pl3 + ",";   
}  
if (l4.checked == true){  
  var pl4 = document.getElementById("MusBri").value;  
  res = res + pl4 + ",";   
}  
if (l5.checked == true){  
  var pl5 = document.getElementById("Meals").value;  
  res = res + pl5 + ",";   
}  
Food.innerHTML = res;

State.innerHTML = document.getElementById("exampleInputState1").value;
Country.innerHTML = document.getElementById("exampleInputCountry1").value;

document.getElementById("exampleInputfname1").value="";
document.getElementById("exampleInputlname1").value="";
document.getElementById("exampleInputadd1").value="";
document.getElementById("exampleInputadd2").value="";
document.getElementById("exampleInputadd3").value="";
document.getElementById("exampleInputPincode1").value="";
document.getElementById("male").checked=false;
document.getElementById("female").checked=false;
document.getElementById("other").checked=false;
document.getElementById("chibri").checked=false;
document.getElementById("mutbri").checked=false;
document.getElementById("VegBri").checked=false;
document.getElementById("MusBri").checked=false;
document.getElementById("Meals").checked=false;
document.getElementById("exampleInputState1").value="";
document.getElementById("exampleInputCountry1").value="";
}
