let formContainer= document.createElement("div");
let mainContainer= document.getElementById("main");
formContainer.setAttribute("id","form-box");
formContainer.innerHTML = `
<form class="shadow-xl w-[700px] h-[400px] flex justify-center items-center flex-col gap-3">
<h1 class="text-2xl font-bold">Student Portal form</h1>
    <input required type="text" id="name-input" class="focus:outline-none p-4 bg-slate-200 rounded-md w-[90%]" placeholder="Enter students name"/>
    <input required type="text" id="batch-input" class="focus:outline-none p-4 bg-slate-200 rounded-md w-[90%]" placeholder="Enter batch name"/>
    <input required type="text" id="course-input" class="focus:outline-none p-4 bg-slate-200 rounded-md w-[90%]" placeholder="Enter course name"/>
    <button id="save-btn" class="bg-blue-500 p-2 w-36 rounded-sm text-black font-semibold">Save</button>
</form?
`;

mainContainer.append(formContainer);
let nameInput = document.getElementById("name-input");
let batchInput = document.getElementById("batch-input");
let courseInput = document.getElementById("course-input");
const saveBtn = document.getElementById("save-btn");

function removeInputField(){
    nameInput.value = "";
    batchInput.value = "";
    courseInput.value = "";
}
formContainer.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newStudentObj = {
        student_name: nameInput.value,
        student_batch: batchInput.value,
        student_course: courseInput.value,
    };
    if(newStudentObj){
        console.log(newStudentObj);
        removeInputField();
    }
});


