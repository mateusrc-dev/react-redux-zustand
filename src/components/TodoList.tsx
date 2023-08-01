import { useSelector } from "react-redux";

export function TodoList() {
  // with useSelector we can get the information that was sent by the context - let's return only the todo
  const todos = useSelector((store) => {
    return store.todo;
  });

  console.log(todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
