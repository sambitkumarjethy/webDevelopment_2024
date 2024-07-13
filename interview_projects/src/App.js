import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random_color";
import StarRating from "./components/star_rating";

function App() {
  return (
    <div className="App">
      <Accordian />
      <RandomColor />
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
