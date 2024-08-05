import "./App.css";
import Hooks from "./components/hooks";
// import Accordian from "./components/accordian";
// import Crud from "./components/crud";
// import ImageSlider from "./components/image_slider";
// import RandomColor from "./components/random_color";
// import StarRating from "./components/star_rating";

function App() {
  return (
    <div className="App">
      {/* <Accordian />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider url="https://picsum.photos/v2/list" limit={10} page={1} /> 
      <Crud />  */}
      <Hooks />
    </div>
  );
}

export default App;
