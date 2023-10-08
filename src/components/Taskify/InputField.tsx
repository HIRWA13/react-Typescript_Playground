export default function InputField() {
  return (
    <>
      <form className="flex w-4/5 relative items-center">
        <input 
            type="text" 
            placeholder="Enter a task"
            className="w-full rounded-2xl py-5 px-6 text-2xl border-none transition-all delay-75 shadow-md"
            />
        <button className="p-4 m-3  rounded-xl absolute right-0 border-none text-lg bg-blue-600 text-white shadow-lg">Add</button>
      </form>
    </>
  )
}