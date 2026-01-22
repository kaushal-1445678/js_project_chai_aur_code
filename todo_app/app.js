class TodoApp{
    constructor(){
        this.todos=[];
    }
    async fetchTodos(){
    let response=await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data=await response.json();
    this.todos=data;
    this.renderTodos();

}
addTodo(title){
    let newTodo={
        id:Date.now(),
        title,
        completed:false
    };
    this.todos.push(newTodo);
    this.renderTodos();
}
toggleTodo(id){
    this.todos= this.todos.map(todo =>
        todo.id === id ? {...todo,completed: !todo.completed }:todo
    );
    this.renderTodos();
}
deleteTodo(id){
    this.todos=this.todos.filter(todo=> todo.id !==id);
    this.renderTodos();
}
renderTodos(){
    let list=document.getElementById("todoList");
    list.innerHTML="";
    this.todos.forEach(todo => {
        let li = document.createElement("li");
        li.textContent = todo.title;
        list.appendChild(li);
    });
}
}
const app=new TodoApp();
app.fetchTodos();

function addTodo(){
    const input=document.getElementById("todoInput");
    app.addTodo(input.value)
}

