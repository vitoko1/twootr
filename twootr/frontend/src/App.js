import "./App.css";
import ViewTwoots from "./components/SectionViewTwoots/ViewTwoots";
import CreateTwoot from "./components/SectionCreateTwoots/CreateTwoot";

function App() {
  return (

      <div className="App-Main">
        <CreateTwoot />
        <ViewTwoots />
      </div>

  );
}

export default App;
