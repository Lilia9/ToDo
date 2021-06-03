document.addEventListener('DOMContentLoaded', () =>{
    const addInput= document.querySelector('#addInput');
    const addButton = document.querySelector('#addButton');
    let todo = document.querySelector('#todo');
    

    addButton.addEventListener('click', function(){
        addItemTodo(addInput.value);
        addInput.value = "";   
    
    });
    addInput.addEventListener('keyup', function(e){
        if(13 === e.keyCode){
            addItemTodo(addInput.value);
            addInput.value ="";
        }
    });

    

    function addItemTodo(text){
        if(text.length === 0) return;
        let item = document.createElement('li');
        item.innerText = text;

        let btns = document.createElement('div');
        btns.classList.add('btns');

        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'x';
        removeBtn.addEventListener('click', removeItem);

        let editBtn = document.createElement('button');
        editBtn.innerHTML = 'edit';
        editBtn.addEventListener('click', editInput);
        
        btns.appendChild(removeBtn);        
        btns.appendChild(editBtn);
        item.appendChild(btns);
        todo.insertBefore(item, todo.childNodes[0]);
    }
    
    function removeItem(){
        let item = this.parentNode.parentNode;
        let parent = item.parentNode;
        parent.removeChild(item);
    }  
    function editInput(event){
        let edit = document.createElement('input');
        edit.value = event.target.parentNode.parentNode.innerText.split('\n')[0];
        event.target.parentNode.parentNode.appendChild(edit);

        
        const saveBtn = document.createElement('button');
        saveBtn.innerHTML = 'save';
        
        event.target.parentNode.appendChild(saveBtn);
        saveBtn.addEventListener('click', saveInput);
        
        event.target.parentNode.removeChild(event.target.parentNode.childNodes[0]);
        event.target.parentNode.removeChild(event.target.parentNode.childNodes[0]);
        
    }
    function saveInput(event){
        const liEl = event.target.parentNode.parentNode;
        const updatedValue = event.target.parentNode.parentNode.childNodes[2].value
        liEl.innerText = updatedValue;

        let btns = document.createElement('div');
        btns.classList.add('btns');

        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'x';
        removeBtn.addEventListener('click', removeItem);

        let editBtn = document.createElement('button');
        editBtn.innerHTML = 'edit';
        editBtn.addEventListener('click', editInput);
        
        btns.appendChild(removeBtn);        
        btns.appendChild(editBtn);
        liEl.appendChild(btns);
        todo.insertBefore(liEl, todo.childNodes[0]);
    }
    
});
