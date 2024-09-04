// asi compartiremos el estado
import { useTasks } from "../context/tasksContext";
import Layout from "../components/Layout";
import { VscTrash, VscTasklist } from "react-icons/vsc";
import { useRouter } from "next/router";

const Home = () => {
  //para importar las tareas aqui
  const { tasks, deleteTask } = useTasks();
  const { push } = useRouter();
  
  return (
    <Layout>
      <div className="flex justify-center">
        {tasks.length === 0 ? (
          // <h2>No hay tareas</h2>
            <div className="block">
              <h2 className="text-2xl">No hay tareas</h2>
              <VscTasklist size="8rem" />
            </div>
          ) : (
          <div className="w-7/10">
            {/* //cada que se recorre la tarea te da un indice */}
            {tasks.map((task, indice) => (
              <div 
                className="bg-gray-700 hover:bg-gray-800 cursor-pointer px-20 py-5 m-2 flex " 
                key={task.id}
                onClick={() => push(`/edit/${task.id}`)}
              >
                <span className="text-5xl mr-5">{indice}</span>
                <div>
                  <div className="flex">
                    <h1 className="font-bold mr-28 ">{task.title}</h1>
                    <button 
                   className="bg-indigo-700 hover:bg-indigo-600 px-3 py-1 inline-flex items-center"
                   onClick={(e) =>{
                    e.stopPropagation();
                    deleteTask(task.id)
                   }}
                   >
                    <VscTrash className="mr-2 "/>
                    Eliminar
                  </button> 
                   
                  </div>
                  <p className="text-gray-300">{task.description}</p>
                  {/* <span className="text-gray-400">{task.id}</span> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
