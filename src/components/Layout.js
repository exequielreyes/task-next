//con el children todos los componentes hijos estaran debajo del header
import Link from "next/link";
import { useRouter } from "next/router";
import { useTasks } from "../context/tasksContext";
import { AiOutlinePlus } from "react-icons/ai";

const Layout = ({ children }) => {

  const router = useRouter();
  const { tasks } = useTasks();

  return (
    <div className="h-screen bg-gray-600 text-white">
      <header className=" flex items-center bg-gray-900  px-28 py-5 ">
        <Link href="/">
          <a>
            <h1 className="font-black text-lg">ME-Task</h1>
            
          </a>
        </Link>
        <span className="ml-2 text-gray-100 font-bold "> {tasks.length} tareas</span>

        <div className="flex-grow text-right">
          <button className="bg-blue-600 hover:bg-blue-900 px-5 py-2  text-gray font-bold rounded-sm inline-flex items-center"
          onClick={() =>router.push('/new')}
          >
            <AiOutlinePlus className="mr-2"/>
            Añadir Tarea
          </button>


  

        </div>
      </header>

      <main className="h-5/6 px-28 py-10">{children}</main>
    </div>
  );
};

export default Layout;















