import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useTasks } from "../context/tasksContext";
import { useRouter } from "next/router"


const TaskFormPage = () => {

//para actualizar la tarea y ver si hay algo tipeado y se active el boton
  const [task, setTaks] = useState({
      title: '',
      description: '',
  });


//para guardar el estado
  const { createTask, updateTask, tasks } = useTasks();
//utilizo el destructuring
  const {push , query} = useRouter()


   const handleChange = (e) => {
    //primero copia todo lo que estan en la tarea y luego actualiza 
        const {name, value} = e.target
        setTaks({...task, [name]: value});
    }

    //este se ejecuta cuando el formulario es enviado
    const handleSubmit = (e) => {
            e.preventDefault()

            if (!query.id) {   
            //para guardarlo
              createTask(task.title , task.description)
            }else{
              updateTask(query.id, task)
            }
            push("/")
    }
//aseguramos si existe el query con el if
useEffect(() =>{
    if(query.id){
        // si existe el id, busca por cada una de las tareas que  coincidan con el query id
        const taskFound = tasks.find((task) => task.id === query.id);
        // console.log(taskFound)
           setTaks({ title: taskFound.title, description: taskFound.description });
    
    }
},[])

  return (
    <Layout>
      <div className="flex justify-center items-center h-full">

      <form onSubmit={handleSubmit} className="bg-gray-700 p-10 h-2/4">
        <h1 className="text-3xl mb-7">
          { query.id ? "Editar Tarea" : "Crear Tarea"}
        </h1>
        <input
          type="text"
          name="title"
          placeholder="Escribe un titulo"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          onChange={handleChange}
          value={task.title}
        />
        <textarea
          rows="2"
          name="description"
          placeholder="Escribe una descripcion"
          className="bg-gray-800 focus:text-gray-100 focus:outline w-full py-3 px-4 mb-5"
          onChange={handleChange}
          value={task.description}

        >
        </textarea>
        <button 
          className="bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-sm disabled:opacity-30" disabled ={!task.title}>
          Guardar
        </button>
      </form>


      </div>
    </Layout>
  );
};

export default TaskFormPage;
