const inptsk = document.querySelector(".txtarea");
const addtsk = document.querySelector(".addtasks");
const deltsk = document.querySelector(".deletetasks");
const edittsk = document.querySelector(".edit");
const toDoBox = document.querySelector(".to-do-items");
const cmpBox = document.querySelector(".cpld");
let info = "";
let btnitr = 1;
let intxt = "";



inptsk.addEventListener("keyup",function(event)
{
    info = this.value;
})
inptsk.addEventListener("keyup",(event)=>
{
    if(event.keyCode == 13)
    {
        addToDo(info);
        info = "";
        inptsk.value = "";
    }
})

deltsk.addEventListener("click",function()
{
    inptsk.value = "";
});


addtsk.addEventListener("click",function()
{
    addToDo(info);
    info = "";
    inptsk.value = "";
});



const addToDo = (item) => {
    var listItem = document.createElement("li");
    clname = "b"+btnitr;
    edname = "e"+btnitr;
    listname = "l"+btnitr;
    listItem.innerHTML = `
    <p>
    ${item}
    </p>
    <i>
    <button id = "${edname}"><img src="images/icons/edit.png" alt="edit-buttonimg"></button>
    <button id = "${clname}"><img src="images/icons/yes.png" alt="done-buttonimg"></button>
    </i>
    `;
    toDoBox.appendChild(listItem);
    var nwbtns = document.getElementById(`${clname}`);
    nwbtns.addEventListener("click",()=>{
        var txtcnt = nwbtns.parentElement.parentElement.innerText;
        const completed = document.createElement("li");
        completed.innerHTML = 
        txtcnt;
        cmpBox.appendChild(completed);
        nwbtns.parentElement.parentElement.remove();
    })
    
    
    var edbtns = document.getElementById(`${edname}`);
    edbtns.addEventListener("click",()=>{
        var edttxt = edbtns.parentElement.parentElement.innerText;
        var inp = prompt("Enter the editted task:",edttxt);
        inp = inp.trim();
        edbtns.parentElement.parentElement.firstElementChild.innerHTML = inp;
    })
    btnitr++;
};


// nwbtns.parentElement.parentElement.addEventListener("animationend",() =>{
//     nwbtns.parentElement.parentElement.remove();
// });














