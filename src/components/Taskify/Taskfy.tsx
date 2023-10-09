import InputField from "./InputField";

export default function Taskfy() {
  return (
    <>
      <section className="w-full h-full flex flex-col items-center bg-blue-400">
        <span className="text-3xl uppercase mt-10 text-white">Taskfy</span>
        <InputField/>
      </section>
    </>
  );
}