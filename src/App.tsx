import "./styles/global.css";

import { Provider as ReduxProvider } from "react-redux";

import { store } from "./store";
import { Player } from "./pages/player";

export function App() {
  return (
    // ReduxProvider will send all information's of context for the components
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  );
}
