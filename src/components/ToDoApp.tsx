import { useState } from "react";
import { ListaTareas } from "./ListaTareas";


export default function ToDoApp() {
  const[nuevaTarea, setNuevaTarea] = useState<string>('');
  const[listaTareas, setListaTareas] = useState<string[]>([]);
  const handleAddTask = () => {
    if(nuevaTarea.trim() === '') return
    setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
    setNuevaTarea('')
  }
  const handleBorrarTarea = (index: number) => {
    setListaTareas(tareas => tareas.filter((_, i) => i !== index))
  }

  return(
    <div>
      <h1>Lista de tareas</h1>
      <div className="flex">
         <input 
         type="text"
         value={nuevaTarea}
         onChange={(e) => setNuevaTarea(e.target.value)}
         placeholder="Nueva tarea" 
         />
         <button onClick={handleAddTask}>Agregar tarea</button> 
      </div>
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} /><br />
      <div className="contenedor-integrantes">
        <h1 className="titulo-evidencia">Evidencia de producto: GA7-220501096-AA4-EV03</h1>
          <h2>Presentado por: </h2>
          <p>
          Allison Aldana Rodríguez, 
          Andrés Vertel Narváez, 
          Dave González Perdomo, 
          Darwin Javier Pineda Navarro, 
          Laura Vanessa Castrillón Muñoz, 
          </p>
      </div>
    </div>
  );
}