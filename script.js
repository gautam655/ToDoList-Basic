var inp= document.getElementById("inp");//getting value of input
var but=document.getElementById("but");//getting value of button
var list=document.getElementById("list");//getting value of unordered List

but.addEventListener("click", addToDo) //It calls the addToDo() functon by click on the Add button


inp.addEventListener("keyup",function(event){//It append the text as we press enter
  if(event.keyCode === 13)
  {
    addToDo();
  }
})


function addToDo() //This function helps to add iteams in ToDolist
{

  var value=inp.value;

  if(value==="") // It checks if any string is not resent it will not print
    return;
  var element =document.createElement("li");//Creating li element in ul tag

  element.innerText=value;//giving value of the text into element

  list.appendChild(element);//appending at end

  element.addEventListener("dblclick",function(){//If you double-click on element it will delet it
    element.remove("list");
  })


  element.addEventListener("click",function()//If you single click on the element it will strike through the element
  {
    element.style.textDecoration="line-through";
  })
  

  inp.value=""; // It clears the text box after one entinty
}

