import "./index.css";
import Main from "./components/main/Main";
import ListContext from "./context/ListContext";
import AccountContext from "./context/AccountContext";

function App() {
  return (
    <AccountContext>
    <ListContext>
      <div className="App">
        <Main />
      </div>
    </ListContext>
    </AccountContext>
  );
}

export default App;
