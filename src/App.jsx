import { ToDo } from "./ToDo";
import "./App.css"
export function App(){
    return (
      <div>
        <h1 className="titulo">Planifícate</h1>
        <ToDo estilo="porHacer" nombre="🔗Por Hacer"/>
        <ToDo estilo="haciendo" nombre="⚙️Haciendo"/>
        <ToDo estilo="hechas" nombre="✔️Hechas"/>
      </div>
      
    )
}