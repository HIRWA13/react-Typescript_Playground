// import Playground from "./components/Playground/Playground"
// import Taskfy from "./components/Taskify/Taskfy"
import Greet from "./components/CrashCourse/Greet"
import Person from "./components/CrashCourse/Person"


function App() {
  const person = {
    first: "Junior",
    last: "Kiyotaka"
  }
  return (
    <>
        {/* <Playground/>
        <Taskfy/> */}
       <Greet name="Junior" unreadMessages={20} isLoggedIn={false}/>
       <Person name={person}/>
    </>
  )
}

export default App
