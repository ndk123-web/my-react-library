## Doubts and Answers on React

1. React Virtual Dom , React Fibre and Reconcilation ?

   - Virtual Dom is Behind the scenes it creates a browser like tree structure
     - This tree structure is a JavaScript object that mirrors the actual DOM structure
     - When you write JSX, React uses Babel or a similar tool to transform this JSX into JavaScript objects
     - This object tree is the Virtual DOM

   - React fibre is ui updattion optimisation algorithm on basis that
     - Before React 16 , all ui rendering was synchronous
     - After React fibre It becomes asynchronous and it means any rendering can be abort , pause , resume or reuse

   - Reconcilation ( virtual DOM )
     - It's React diff Algorithm that compare one tree with another tree to check whether which part to be changed
     - This algorithm is called Reconcilation

2. JS and JSX with React / Babel or React Vite / EsBuild
   - JBabel or ESBuild like transpilers converts <m /> to that object like reactElement
     - It takes JSX and converts it into a JavaScript object
     - This object is then used to create the Virtual DOM

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
