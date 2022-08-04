import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import ViewTwoots from "./components/SectionViewTwoots/ViewTwoots";

function App() {
  return (
    <div className="App-header">
      {<Header />}
      {<Main />}
      <div className="App-Main">
        <ViewTwoots />
      </div>
    </div>
  );
}

export default App;
