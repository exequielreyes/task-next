import '../styles/globals.css'
import { TasksProvider }  from '../context/tasksContext'


function MyApp({ Component, pageProps }) {
  return (

    <TasksProvider>
      <Component {...pageProps} />
    </TasksProvider>
  )
  
  
  
}

export default MyApp
