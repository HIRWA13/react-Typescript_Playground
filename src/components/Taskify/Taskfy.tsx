import { useState } from "react";
import InputField from "./InputField";
import { Todo } from "./model";

export default function Taskfy() {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }

  return (
    <>
      <section className="w-full h-full flex flex-col items-center bg-blue-400">
        <span className="text-3xl uppercase  mt-10 text-white">Taskfy</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        {todos.map(t => {
          return <li key={t.id}>{t.todo}</li>
        })}
      </section>
    </>
  );
}