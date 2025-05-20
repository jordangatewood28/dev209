import React, {useState} from 'react'

function AuthForm() {

    return(
    <div>
        <h2>Login</h2>
        <form>
            <div>
                <input type='text' placeholder="enter your email" />
            </div>
        </form>
    </div>)
}

function ToDoList(){
    const[tasks, setTasks] = useState(["Do homework","Figure out React Apps","Play"]);
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    //NOTE: Delete button does not work because it is creating a new index under the name of index2. I am not sure what it causing this.
    function deleteTask(index){
        //const updatedTask = tasks.filter((_, i) => i !== index);
        //setTasks(updatedTask);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] =
            [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = 
            [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    return(
    <div className="todolist">
        <h1>To Do List</h1>

        <div>
            <input type="text" placeholder="Enter a new task" value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add</button>
        </div>

        <ul>
            {tasks.map((task, index) =>
            <li key={index}>
                <span className="text">{task}</span>
                <button className='delete-button' onClick={deleteTask(index)}>Delete</button>
                <button className='moveup-button' onClick={() => moveTaskUp(index)}>UP</button>
                <button className='movedown-button' onClick={() => moveTaskDown(index)}>DOWN</button>
            </li>)}
        </ul>

    </div>)
}

export default ToDoList