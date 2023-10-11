// import Playground from "./components/Playground/Playground"
// import Taskfy from "./components/Taskify/Taskfy"
import Greet from "./components/CrashCourse/Greet"
import Person from "./components/CrashCourse/Person"


function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne"
  }
  return (
    <>
        {/* <Playground/>
        <Taskfy/> */}
       <Greet name="Junior" unreadMessages={20} isLoggedIn={false}/>
       <Person name={personName}/>
    </>
  )
}

export default App
