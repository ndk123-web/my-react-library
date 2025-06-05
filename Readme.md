## Doubts and Answers on React

1. React Virtual Dom , React Fibre and Reconcilation ?

   - Virtual Dom is Behind the scenes it creates a browser like tree structure

   - React fibre is ui updattion optimisation algorithm on basis that

     - Before React 16 , all ui rendering was synchronous
     - After React fibre It becomes asynchronous and it means any rendering can be abort , pause , resume or reuse

   - Reconcilation ( virtual DOM )
     - It's React diff Algorithm that compare one tree with another tree to check whether which part to be changed

2. JS and JSX with React / Babel or React Vite / EsBuild
   - JBabel or ESBuild like transpilers converts <m /> to that object like reactElement

   - Ex -> 

        So we write like return in React 
        <> 
            <a href="https://google.com" target:"_blank" style : "color:red;"> 
                Go to Google 
            </a> 
        </>
        Babel for webpack or ESBuild for vite converts that into below 

        import React from "react";
        <>
        React.createElement(
                'a',
                {href : "https://google.com" , target : "_blank" , style : "color : red;"},
                Go to Google
            )
        </>

3. Interview Point of View
// {} inside react element is called as evaluated expression
// Inside {} we can only declare evaluation , can't like if() else
// why ? because in the end of day that variables are stored in that place where it is in object

// now what react does is , it creates the Copy like Html Dom which is like tree structure\

---

# Understanding Virtual DOM and React Fiber in Detail 

## Overview

This README explains two important concepts in React:

* **Virtual DOM**: A lightweight JavaScript representation of the actual DOM.
* **React Fiber**: The reconciliation and scheduling algorithm that optimizes rendering and updates in React.

---

## What is Virtual DOM?

The Virtual DOM is a **JavaScript object tree** that mirrors the real DOM structure of your React application.

When you write JSX:

```jsx
const element = (
  <div>
    <p>Hello World</p>
    <a href="https://example.com">Click Here</a>
  </div>
);
```

React uses Babel or a similar tool to transform this JSX into JavaScript objects like:

```js
const element = {
  type: "div",
  props: {
    children: [
      { type: "p", props: { children: "Hello World" } },
      { type: "a", props: { href: "https://example.com", children: "Click Here" } },
    ],
  },
};
```

This object tree is the **virtual DOM**.

---

## How does Virtual DOM work?

1. React maintains this virtual DOM tree.
2. When the state or props change, React creates a **new virtual DOM tree**.
3. React compares the new tree with the previous one (called **diffing**).
4. React finds the minimum number of changes needed.
5. React updates only those parts in the **real DOM**, making UI updates efficient.

---

## What is React Fiber?

React Fiber is React’s **reconciliation algorithm and scheduler** introduced in React 16 to improve rendering performance.

### Goals of React Fiber:

* Break rendering work into **small chunks**.
* Make rendering **interruptible** so that high priority tasks (like user input) aren’t blocked.
* Enable **pausing, resuming, and prioritizing** work.
* Improve handling of complex UI updates and animations.

---

## How React Fiber works with Virtual DOM?

* React Fiber operates on the virtual DOM trees during the **diffing** process.
* It schedules and performs updates incrementally, avoiding blocking the browser.
* This leads to smoother UI and better responsiveness.

---

## Simple Illustration of Virtual DOM and Fiber

### Virtual DOM Tree (JS Object):

```js
const myElement = {
  type: "div",
  props: {
    id: "container",
    children: [
      {
        type: "p",
        props: { children: "This is a paragraph" },
      },
      {
        type: "a",
        props: { href: "https://google.com", children: "Go to Google" },
      },
    ],
  },
};
```

### Rendering this with recursion:

```js
function render(element, container) {
  if (typeof element === "string") {
    container.appendChild(document.createTextNode(element));
    return;
  }

  const dom = document.createElement(element.type);

  for (let prop in element.props) {
    if (prop !== "children") {
      dom.setAttribute(prop, element.props[prop]);
    }
  }

  const children = element.props.children;

  if (Array.isArray(children)) {
    children.forEach(child => render(child, dom));
  } else if (children) {
    render(children, dom);
  }

  container.appendChild(dom);
}

const root = document.getElementById("root");
render(myElement, root);
```

---

## Summary

| Concept      | Description                                                                |
| ------------ | -------------------------------------------------------------------------- |
| Virtual DOM  | JavaScript representation of the real DOM                                  |
| React Fiber  | Scheduling and reconciliation algorithm in React for efficient rendering   |
| Relationship | Fiber optimizes how changes in the virtual DOM are applied to the real DOM |

---

## References

* [React Official Docs - Reconciliation](https://reactjs.org/docs/reconciliation.html)
* [React Fiber Architecture Explained](https://medium.com/react-in-depth/react-fiber-in-depth-9c2e1d15d3a0)
* [Virtual DOM and React Fiber](https://dev.to/dan_abramov/react-fiber-in-5-minutes-3kjh)

---