# Times IT React Learning Session

```day 11 class summary
1. How to write well component
2. How to convert an html element to an React Component and use multiple time and pass props, state, event handler and also function.
3. useCallback hook each and everything
4. useMemo hook everything and and what is React.memo() and how to use it?
5. useRef hook clear everything and all confusion. use useRef as a storage like react. forwardRef why and how we use it.
```

## Introducing JSX

```JSX
JSX stands for JavaScript XML. It allows writing HTML in JavaScript and converts the HTML tags into React elements.
```

[Official Introducing JSX Link](https://reactjs.org/docs/introducing-jsx.html)

## Rendering Elements

```Elements
Rendering Elements

Elements are the smallest building blocks of React apps.

An element describes what you want to see on the screen:

const element = <h1>Hello, world</h1>;

Unlike browser DOM elements, React elements are plain objects,
and are cheap to create. React DOM takes care of updating the DOM to match the React elements.
```

[Official Rendering Elements Link](https://reactjs.org/docs/rendering-elements.html)

## Components

```Components
Components are the building blocks of React applications.
They let us split the UI into independent, reusable pieces,
and think about each piece in isolation.
```

[Official React Component Link](https://reactjs.org/docs/react-component.html)

## Props

```Props
Props (short for “properties”) and state are both plain JavaScript objects.
While both hold information that influences the output of component render,
they are different in one important way: props get passed to the component (similar to function parameters)
whereas state is managed within the component (similar to variables declared within a function).
```

[Official React Props Link](https://www.robinwieruch.de/react-pass-props-to-component/)

[Official React Props Link](https://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react)

## State

```State
State and props (short for “properties”)  are both plain JavaScript objects.
While both hold information that influences the output of component render,
they are different in one important way: props get passed to the component (similar to function parameters)
whereas state is managed within the component (similar to variables declared within a function).
```

[Official React State Link](https://reactjs.org/docs/faq-state.html)

## Lifecycle

```Lifecycle
Each component has several “lifecycle methods” that you can override to run code at particular times in the process.
You can use this lifecycle diagram as a cheat sheet. In the list below,
commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.
```

[Official React Lifecycle Link](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

[Official React Lifecycle Link](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
