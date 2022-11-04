//let a= alert("this is messege");
// //console.log(a);
// let age = prompt("what is your age","age");
//  if(age>18){
//   alert("you are allowed in club");
//  }
// else{
//   alert("sorry! \n you are not allowed in club")
// }
function toggelHide(){
  let btn = document.getElementById("btn");
  let para = document.getElementById("para");
  
  if(para.style.display != "none"){
    para.style.display = "none";
  }
  else{
    para.style.display = "block";
  }
}