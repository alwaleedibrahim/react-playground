# React

## create react app:

```
npx create-react-app my-app
cd my-app
npm start
```

## JSX

```jsx
const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
};
```

JSX (Javascript Syntax Extension) make it easier to create HTML elements

Instead of:

```js
return createElement("h1", { className: "greeting" }, "Hello");
```

We can write:

```jsx
return <h1 classname="greeting">"Hello"</h1>;
```

## Components

```jsx
const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
    </div>
  );
};
```

## props: passing data to components

```jsx
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  );
};

const App = () => {
  const name = "Ahmed";
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Ali" />
      <Hello name={name} />
    </div>
  );
};
```

- Note that the content of a React component needs to contain:
  - one root element,
  - array of elements,
  - fragments (empty tag)

## Some JavaScript

### function declaration

```js
function product(a, b) {
  return a * b;
}
```

### function expression

```js
const product = function (a, b) {
  return a * b;
};
```

### arrow function

```js
const product = (a, b) => {
  return a * b;
};
```

```

const square = x => x*x;

```

### Diffrences between arrow function and regular function

```js
const obj = {
  name: "myname",
  greet: function () {
    console.log("hello " + this.name);
  },
};

obj.greet(); // Hello myname
```

```js
const obj2 = {
  name: "myname",
  greet: () => {
    console.log("hello " + this.name);
  },
};

obj2.greet(); // Hello
```

### Array destructuring

Here’s an example of how an array is destructured into variables:

```js
// we have an array with the name and surname
let arr = ["John", "Smith"];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // John
console.log(surname); // Smith
```

### Object destructuring

```js
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

let { title, width, height } = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
```

## State

### Why we use state instead of variables:

- Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
- Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.

State:

- Retain the data between renders.
- Trigger React to render the component with new data (re-rendering).

```js
import { useState } from "react";

const Add = () => {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <div>{index}</div>
    </>
  );
};
```

### Passing state - to child components

```js
const Display = (props) => {
  return <div>{props.counter}</div>;
};

const Add = () => {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <Display counter={index} />
    </>
  );
};
```

## Map

```js
const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};
```

## Form

````js
const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");

  // ...

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      ```
    </div>
  );
};
````

# Comminicating with the server

## Axios

```
npm install axios
```

### GET requests with axios

```js
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  }));

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

### POST requests

```js
addNote = (event) => {
  event.preventDefault();
  const noteObject = {
    content: newNote,
  };

  axios.post("http://localhost:3001/notes", noteObject).then((response) => {
    console.log(response);
  });
};
```
