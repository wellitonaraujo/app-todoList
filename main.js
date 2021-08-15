const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');
const todoList = document.querySelector('.todoList');

inputBox.onkeyup = () => {
   let userData = inputBox.value;
   if (userData != 0) {
      addBtn.classList.add("active");
   }else{
      addBtn.classList.remove("active");
   }
}
showTask();

addBtn.onclick = () =>{
   let userData = inputBox.value;
   let getLocalStorage = localStorage.getItem("Minha Lista");

if(getLocalStorage == null){
   listArray = [];
}else{
   listArray = JSON.parse(getLocalStorage);
}

listArray.push(userData)
localStorage.setItem("Minha Lista", JSON.stringify(listArray));
showTask();
}

function showTask(){
   let getLocalStorage = localStorage.getItem("Minha Lista")
   
   if (getLocalStorage == null) {
      listArray = [];
   } else {
      listArray = JSON.parse(getLocalStorage);
   }
   
   let pendingNumber = document.querySelector('.pendingNumber');
   pendingNumber.textContent = listArray.length;
   
   let newLiTag = '';
   listArray.forEach((item, index) => {
      newLiTag += `<li> ${item} <span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`
   });
   todoList.innerHTML = newLiTag;
   inputBox.value = "";
};

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("Minha Lista");
    listArray = JSON.parse(getLocalStorage);
    listArray.splice(index, 1)
    
    localStorage.setItem("Minha Lista", JSON.stringify(listArray));
    showTask();
}


