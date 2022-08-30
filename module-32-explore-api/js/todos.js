function loadTodos(){
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => displayTodos(data))
}

function displayTodos(todos){
  // get the container   1<----------!!!
  const todoContainer = document.getElementById('todo-container');
  
  for(const todo of todos){
  // create the child element   2<----------!!!
      const todoDiv = document.createElement('div');
  // set innerText or innerHTML   3<----------!!!
      todoDiv.innerHTML = `
          <h3>title: ${todo.title}</h3>
          <p>User: ${todo.userId}</p>
      `;
  // appendChild   4<----------!!!
      todoContainer.appendChild(todoDiv);
  }
}

loadTodos();