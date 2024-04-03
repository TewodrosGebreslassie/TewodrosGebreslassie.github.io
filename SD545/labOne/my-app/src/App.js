import logo from "./logo.svg";
import "./App.css";
function App() {
  const element = (
    <div className="container">
      <h1>Hello, World!</h1>
      <p>This is a paragraph.</p>
    </div>
  );

  // JSX element with attributes and child element
  const element2 = (
    <div className="container">
      <h1>Hello, World!</h1>
      <p>This is a paragraph.</p>
    </div>
  );

  // JSX element with inline styles
  const customStyle = {
    color: "blue",
    fontSize: "20px",
  };
  const styledElement = <h2 style={customStyle}>Styled Heading</h2>;

  // JSX element with a list
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => <li>{number}</li>);
  const numberList = <ul>{listItems}</ul>;

  // JSX element with event handling
  function handleClick() {
    alert("Button clicked!");
  }
  const button = <button onClick={handleClick}>Click me</button>;
  return [element, element2, button, numberList, styledElement];
}

export default App;
