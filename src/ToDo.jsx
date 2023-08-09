import { useState } from "react"
import "./ToDo.css"

/* eslint-disable react/prop-types */
export function ToDo(props){
    const [input,setInput] = useState("");
    const [tasks,setTasks] = useState([]);
    const [editMode,setEditMode] = useState(false);
    const [editId,setEditId] = useState (null);
    const [editValue,setEditValue] = useState("");

    const editTask = (id,text) => {
        setEditMode(true);
        setEditId(id);
        setEditValue(text);
    };

    const updateTasks =()=>{
        const updatetask = tasks.map((item)=>{
            if(item.id === editId){
                return {...item,text:editValue};
            }
            return item;
        })
        setTasks(updatetask);
        setEditMode(false);
        setEditId(null);
        setEditValue("");
    }

    const deleteTask=(id)=>{
        const updateTasks = tasks.filter((task)=>(task.id !== id));
        console.log(updateTasks);
        setTasks(updateTasks);
    };
    
    function addTask(){
        if(input.trim() !== ""){
            const newTask = {
                id: new Date().getTime(),
                text: input
            };
            setTasks([...tasks,newTask]);
            setInput("");
        }
    }
    return (
        <div className="task_container">
            <h2 className={props.estilo}>{props.nombre}</h2>
            <input type="text" value={input} onChange={(e)=>{
                setInput(e.target.value);
            }}/>
            {editMode?(<div>
                <input type="text" value={editValue} onChange={(e)=>{
                setEditValue(e.target.value)
                }}/>
                <button onClick={updateTasks}>Guardar</button>
            </div>):(<button onClick={addTask}>Añadir</button>)
            }
            <ul>
                {tasks.map((item)=>(
                <li key={item.id}>
                    {item.text}
                    <div>
                        <button onClick={()=>editTask(item.id,item.text)}>Editar</button>
                        <button onClick={()=>deleteTask(item.id)}>Borrar</button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}