let todoList=[

{
    item:'buy milk',
    dueDate:'4/10/2020'
},

{
   item:'go to collage',
   dueDate:'13/01/2004'
    
}

];
displayItems();
function addTodo(){
    let inputElement=document.querySelector('#todo-input');

    let dateElement=document.querySelector('#todo-date');
    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
    todoList.push({item:todoItem,dueDate:todoDate});
    inputElement.value='';
    dateElement.value='';
    displayItems();
}

function displayItems(){


    let containerElement=document.querySelector('.todo-container');
    //containerElement.innerText='';
let item=todoList[i].item;
let dueDate=todoList[i].dueDate;
    let newHtml='';
    for(let i=0;i<todoList.length;i++){

        newHtml+=
        
        <span>${item}</span>;
        <span>${dueDate}</span>;
        <button class="btn-delete" onclick="todoList.splice(${i},1); displayItem();">delete</button>;
       
    }
    containerElement.innerHTML=newHtml;
    }
