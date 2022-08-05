import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import ViewTwoots from "./components/SectionViewTwoots/ViewTwoots";
import CreateTwoot from "./components/SectionCreateTwoots/CreateTwoot";

function App() {
  return (
    <div className="App-header">
      {<Header />}
      <div className="App-Main">
        <CreateTwoot />
        <ViewTwoots />
      </div>
    </div>
  );
}

export default App;
