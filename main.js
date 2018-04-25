// variables declaration

var dataArr = [];
var counter =0 ;


// data added from input

function submit() {

var fname = getValue("fname");
var lname = getValue("lname");
var email = getValue("email");
var phone = getValue("phone");

 // check for validation

if(fname == "" || lname == ""  || email == "" || phone == ""){
    alert("all input must be filled out");
    return false;
}


var dataObj = {
  id: counter,
  firstName : fname,
  lastName: lname,
  email: email,
  phone: phone
}
dataArr.push(dataObj);
counter++;

document.getElementById("result").innerHTML = this.dataPopulate(dataArr);
document.getElementById("myForm").reset();

}

// Edit data through form

function editData(x){
 
// set value into form

document.getElementById("idValue").value =dataArr[x].id;
document.getElementById("fname_1").value =dataArr[x].firstName;
document.getElementById("lname_1").value =dataArr[x].lastName;
document.getElementById("email_1").value = dataArr[x].email;
document.getElementById("phone_1").value = dataArr[x].phone;

// for show/hide Edit div

document.getElementById("secondInner").style.display = 'block';
document.getElementById("firstInner").style.display = 'none';
}

// on call of cancel function

function cancel(){
    document.getElementById("secondInner").style.display = 'none';
    document.getElementById("firstInner").style.display = 'block';   
}

// save data after editng

function save(){
document.getElementById("secondInner").style.display = 'none';
document.getElementById("firstInner").style.display = 'block';

//save new data after editing

var editfirstName = getValue("fname_1")   ;
var editlastName =  getValue("lname_1")  ;
var editEmail = getValue("email_1")  ;
var editPhone = getValue("phone_1") ; 
var editId = getValue("idValue");    

//search for respected object in array
objIndex = dataArr.findIndex((obj => obj.id == editId));


dataArr[objIndex].firstName = editfirstName;
dataArr[objIndex].lastName = editlastName;
dataArr[objIndex].email = editEmail;
dataArr[objIndex].phone = editPhone;


document.getElementById("result").innerHTML = this.dataPopulate(dataArr);
}

// function for data generate

function dataPopulate(z){
var html = "<table class='table table-repsonsive table-bordered ' id='myTable' border='1|1'><tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Phone</th><th>Edit</th><th>Delete</th><th>Status</th></tr>";
for (var i = 0; i < z.length; i++) {

    html+="<tr id=\"row_"+i+"\" position=\"\">";
    html+="<td id=\"row_"+i+"_column_1\">"+z[i].firstName+"</td>";
    html+="<td id=\"row_"+i+"_column_1\">"+z[i].lastName+"</td>";
    html+="<td id=\"row_"+i+"_column_2\">"+z[i].email+"</td>";
    html+="<td id=\"row_"+i+"_column_3\">"+z[i].phone+"</td>";
    html+="<td><button class='btn btn-primary' id=\"btn_"+i+"\" onclick=editData('"+i+"')>Edit</button></td>";
    html+="<td><button class='btn btn-primary' id=\"btn1_"+i+"\" onclick=deleteData('"+i+"')>Delete</button></td>";  
    html+="<td><input type='checkbox' value='' id=\"checkId"+i+"\" onchange=checkStatus('"+i+"')></td>";
    html+="</tr>";

}
html+="</table>";

return html;
}

// status check with checkbox

function checkStatus(a){
var checkVal = document.getElementById("checkId"+a).checked;

if(checkVal == true){
    document.getElementById("btn_"+a).disabled = true;
    document.getElementById("btn1_"+a).disabled = true;
}else{
    document.getElementById("btn_"+a).disabled = false;
    document.getElementById("btn1_"+a).disabled = false;
}

}

// delete row 

function deleteData(y){
    alert("Are you sure to delete this data");
dataArr.splice(y,1);
document.getElementById("result").innerHTML = this.dataPopulate(dataArr);

}

// common function for value

function getValue(element){
    return document.getElementById(element).value;
}
