import { Todo } from "./model"

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList({todos, setTodos}: Props) {
  return (
    <>
        <div>
        {todos.map(todo => {
                return <li>{todo.todo}</li>
        })}
        </div>
    </>
  )
}