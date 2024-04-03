1. How does JSX differ from HTML?
   JSX is a syntax extension for JavaScript that resembles HTML but allows embedding JavaScript expressions. Unlike HTML, JSX attributes use camelCase naming convention, and JSX elements can be self-closing without the need for closing tags.

2. Why is JSX used in React?
   JSX simplifies the process of writing React components by allowing developers to write markup directly in JavaScript code, making it more intuitive and maintainable.
3. Can you embed JavaScript expressions in JSX? If so, how?
   Yes, you can embed JavaScript expressions in JSX using curly braces {}. For example: {name}.
4. How do you write comments in JSX?
   Comments in JSX are written within curly braces {} and JavaScript-style comments. For example: {/_ This is a comment _/}.
5. Explain the significance of curly braces {} in JSX.
   Curly braces {} in JSX are used to embed JavaScript expressions or variables within JSX code, enabling dynamic content.
6. Can JSX be directly rendered to the DOM?
   No, JSX cannot be shown directly on a web page. It first needs to be changed into regular JavaScript so that web browsers can understand it.
7. What is the purpose of Babel in relation to JSX?
   Babel is like a translator. It takes JSX code, which browsers can't understand, and changes it into normal JavaScript that browsers can understand. This way, we can use JSX when writing React code without worrying about whether browsers can read it.
8. Practice JSX syntax listed on the slide with code examples
the practice code is inside my-app => app.js
and below are some examples from that
JSX element embedded JS
const element = (
  <div className="container">
    <h1>Hello, World!</h1>
  </div>
);

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);
const numberList = <ul>{listItems}</ul>;

const name = "John";
const greeting = <h1>Hello, {name}!</h1>;
comments
const jsxComment = (

<div>
{/_ This is a comment _/}
<p>Hello, World!</p>
</div>

// JSX element with inline styles
const location = ["Fairfield", "ottuma", "Iowa city"];
const lis = location.map((list) => <li>{list}</li>);
return (

<div>
<ui>{lis}</ui>
</div>
);

const customStyle = {
color: 'blue',
fontSize: '20px'
};
const styledElement = <h2 style={customStyle}>Styled Heading</h2>;

function getName(){
return "MIU MSD"
}

function App() {
const title = 'React Intro';
const yellow = 'blue';
return <h1 className='title' style={{color: red , fontSize: '30px'}}>{getName()}</h1>;
}
