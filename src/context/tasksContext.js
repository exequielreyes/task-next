// para crear un contexto importamos
import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

//de esta forma taskContext lo podremos exportar o importarlo en multiple archivos
export const TaskContext =  createContext()



//devuelve un componente que contiene a otros componentes
export const TasksProvider = ({children}) => {
//variable donde podemos guardar datos y alterarlos
const [tasks, setTasks] = useState([]);

//crear la tarea
//con el uuid nos dara un string aleatorio
const createTask = (title , description) => {
    setTasks([...tasks, { id: uuid(), title, description }]);
}

//para actualizar la tarea(necesitamos el id y la nueva tarea)
const updateTask = (id , updatedTask) =>{
    setTasks([
        ...tasks.map((task) =>
          task.id === id ? { ...task, ...updatedTask } : task
        ),
      ]);
    //por cada tarea que esta a dentro confirmamos si el id es igual al que nos estan pasando, si el id coincide la tarea existe entonces se lo actualiza, pasando primero todos los valores que tenga la tarea y luego copiando todos los valores que estes actualizando
}


//para eliminar el producto
const deleteTask = (id) => 
setTasks([...tasks.filter((task) => task.id !== id)]);

    return(
        <TaskContext.Provider value={{tasks , createTask , updateTask , deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}


//funcion que  retorna todas las operaciones que obtenga del taskProvider 
//evita que estemos importando el useContext en cada componente
export const useTasks = () =>{
    return useContext(TaskContext);
    }
    