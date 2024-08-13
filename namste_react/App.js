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
      "Hello world from nested component !"
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
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(sibling);
