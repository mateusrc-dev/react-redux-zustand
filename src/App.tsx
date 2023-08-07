import "./styles/global.css";

import { Player } from "./pages/Player";

export function App() {
  return (
    // ReduxProvider will send all information's of context for the components
    <Player />
  );
}
