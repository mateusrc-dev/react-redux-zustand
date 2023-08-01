import { Provider as ReduxProvider } from "react-redux";

import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { store } from "./store";

export function App() {
  return (
    // ReduxProvider will send all information's of context for the components
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  );
}
