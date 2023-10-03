import "./App.css";
import { AppRouter } from "./AppRouter";
import { PokeNavbar } from "./components";
import { PokeProvider } from "./context/PokeProvider";

function App() {
  return (
    <PokeProvider>
      <PokeNavbar />
      <AppRouter />
    </PokeProvider>
  );
}

export default App;
