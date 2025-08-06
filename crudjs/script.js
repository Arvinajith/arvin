const textInput = document.getElementById("text-input")
const addBtn = document.getElementById("add-btn")
const listContainer= document.getElementById("list")

//create
addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(textInput.value ==""){
        return
    }
const ListElement = document.createElement("li");
const spanElement = document.createElement("span");
spanElement.innerText = `${textInput.value}`
const editBtn = document.createElement("button")
editBtn.innerText = "Edit"
editBtn.onclick = ()=> editFunction(ListElement)
const deleteBtn = document.createElement("button")
deleteBtn.innerText = "Delete"
deleteBtn.onclick = ()=> deleteFunction(ListElement)
ListElement.append(spanElement,editBtn.deleteBtn)
listContainer.appendChild(ListElement)   
textInput.value =""
})
function editFunction(li){
    const spanValue = li.querySelector("span");
    let newvalue = prompt("Give me new name");
    spanValue.innerText = newvalue
}
function deleteFunction(li){
    li.remove()
}