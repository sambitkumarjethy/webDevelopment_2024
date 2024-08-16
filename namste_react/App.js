import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React !"
);

// nested component
const parent = React.createElement(
  "div",
  { id: "parrent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello world from nested component !"
    )
  )
);

// sibling componet -- make the 3rd element as array

const sibling = React.createElement("div", { id: "parrent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello world from nested component  sambit!"
    ),
    React.createElement("h2", {}, "I Am h2 as a sibling component !"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello world from nested component !"
    ),
    React.createElement("h2", {}, "I Am h2 as a sibling component !"),
  ]),
]);

console.log(sibling);

const jsx_heading = (
  <h1 className="head" id="jsx_heading">
    This is Jsx heading element
  </h1>
);
const Tittle = function () {
  return <h1>This is tittle component</h1>;
};
// React function component
// component composition - binding  multiple component in a single component
const HeadingComponent = () => {
  return (
    <div>
      {jsx_heading}
      <jsx_heading />
      <Tittle />
      <h1 className="heading">This is heading component !</h1>
    </div>
  );
};
console.log(jsx_heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(`jsx_heading`); // rendering a element
root.render(<HeadingComponent />); // rendering a component
