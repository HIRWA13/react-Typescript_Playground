import { useState } from "react";
import InputField from "./InputField";

export default function Taskfy() {
  const [todo, setTodo] = useState<string>("")
  return (
    <>
      <section className="w-full h-full flex flex-col items-center bg-blue-400">
        <span className="text-3xl uppercase mt-10 text-white">Taskfy</span>
        <InputField todo={todo} setTodo={setTodo}/>
      </section>
    </>
  );
}