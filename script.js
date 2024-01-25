const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btnAllClear = document.querySelector(".btn_all_clear"); 

function addTask(){
    if(inputBox.value === ''){
        alert("Write some task first!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7" ;
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}
// -----add task - press Enter------
inputBox.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, capture = false);

function saveData(){
    window.localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
   let taskData = window.localStorage.getItem("data");
   if( typeof taskData !== "undefined"){
        listContainer.innerHTML = taskData;
   }  
}
showData();

btnAllClear.addEventListener('click',function(){
    while( listContainer.firstChild ){
  listContainer.removeChild( listContainer.firstChild );
  saveData();
}})
