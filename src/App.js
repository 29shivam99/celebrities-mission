import "./App.css";
import ListView from "./components/ListView";
import UserContext from "./contexts/UserContext";

function App() {
  return (
    <UserContext>
      <ListView />
    </UserContext>
  );
}

export default App;
