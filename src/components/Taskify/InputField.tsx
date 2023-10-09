interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent)=> void;
}

export default function InputField({todo, setTodo, handleAdd}:Props) {
  return (
    <>
      <form className="flex w-4/5 relative items-center" onSubmit={handleAdd}>
        <input 
            type="text" 
            placeholder="Enter a task"
            className="w-full rounded-2xl py-5 px-6 text-2xl border-none transition-all delay-75 shadow-md mt-3 outline-none"
            value={todo}
            onChange={
              (e) => setTodo(e.target.value) 
            }
            />
        <button 
            className="p-4 m-3  rounded-xl absolute top-1 right-0 border-none text-lg bg-blue-600 text-white shadow-lg cursor-pointer"
            type="submit"
            >Add</button>
      </form>
    </>
  )
}