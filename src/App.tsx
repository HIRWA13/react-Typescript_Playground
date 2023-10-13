// import Playground from "./components/Playground/Playground"
// import Taskfy from "./components/Taskify/Taskfy"
import Greet from "./components/CrashCourse/Greet"
import Person from "./components/CrashCourse/Person"
import PersonList from "./components/CrashCourse/PersonList"
import Status from "./components/CrashCourse/Status"

function App() {
  const person = {
    first: "Junior",
    last: "Kiyotaka"
  }
  const personList = [
    {
      first: "Junior",
      last: "Kiyotaka"
    },
    {
      first: "Akanji",
      last: "Doe"
    },
    {
      first: "Richtie",
      last: "Belmont"
    }
  ]
  return (
    <>
        {/* <Playground/>
        <Taskfy/> */}
       <Greet name="Junior" unreadMessages={20} isLoggedIn={false}/>
       <Person name={person}/>
       <PersonList names={personList}/>
        <Status status="error"/>
    </>
  )
}

export default App
