const inputBox  = document.getElementById("input-box");
const List = document.getElementById("list");
// document.getElementsByClassName("List-Container").innerHTML = "hello chotu";
function addTask(){
     if(inputBox === ''){
          alert("Write your work here!!");

     }
     else{
          var li = document.createElement("li");
          li.innerHTML = inputBox.value;
          List.appendChild(li);
          

     }
     inputBox.value ="";
     save(); 
     
     li.addEventListener('click',function(){
          
          li.style.textDecoration = "line-through";
     })
     li.addEventListener('dblclick',function(){
          List.removeChild(li);
     })
    
     
     
}

function save(){
     localStorage.setItem("data",List.innerHTML);
}
function showtask(){
     List.innerHTML = localStorage.getItem("data");
}
showtask();



