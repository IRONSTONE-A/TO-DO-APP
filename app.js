const input = document.querySelector('.inputarea');
const tasks = document.querySelector('.tasks');
const add = document.querySelector('.add');

add.addEventListener('click', (e)=>{
    e.preventDefault();
    const inputText = input.value;
    if(!inputText){
        alert('Please fill this field');
        return;
    } 

    const task_eleman = document.createElement('div');
    task_eleman.classList.add('task');

    const todo_checkbox = document.createElement('input');
    todo_checkbox.classList.add('todo-checkbox');
    todo_checkbox.type = 'checkbox';
    todo_checkbox.id = '#';

    const paragraf = document.createElement('p');
    paragraf.classList.add('para');
    paragraf.innerText = inputText;

    const del = document.createElement('button');
    del.classList.add('del');
    del.innerText = 'X'

    task_eleman.appendChild(todo_checkbox);
    task_eleman.appendChild(paragraf);
    task_eleman.appendChild(del);

    tasks.insertBefore(task_eleman, tasks.children[1]);
    input.value = '';
    input.focus();

    del.addEventListener('click', (e) => {
        tasks.removeChild(task_eleman);
    });









})

