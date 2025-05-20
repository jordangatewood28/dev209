import React, {useState} from 'react'

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

    function deleteTask(index){
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
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
        <div className="AuthForm">
            <h1>Login</h1>
        <form>
            <div>
                <input type='text' placeholder="enter your email" />
            </div>
            <div>
                <input type='text' placeholder='enter your password'/>
            </div>
            <button>ENTER</button>
        </form>
            <h1>Signup</h1>
        <form>
            <div>
                <input type='text' placeholder="enter an email" />
            </div>
            <div>
                <input type='text' placeholder='enter a password'/>
            </div>
            <button>ENTER</button>
        </form>
        </div>

        <h1>To Do List</h1>

        <div>
            <input type="text" placeholder="Enter a new task" value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add</button>
        </div>

        <ul>
            {tasks.map((task, index) =>
            <li key={index}>
                <span className="text">{task}</span>
                <button className='delete-button' onClick={() =>deleteTask(index)}>Delete</button>
                <button className='moveup-button' onClick={() => moveTaskUp(index)}>UP</button>
                <button className='movedown-button' onClick={() => moveTaskDown(index)}>DOWN</button>
            </li>)}
        </ul>

    </div>)
}

export default ToDoList;