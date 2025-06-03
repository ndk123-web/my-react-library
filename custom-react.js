// The Problem was what if there multiple attributes of element
// solution used -> for in loop because key value object

const { Children } = require("react");

// in react internally also uses this reactElement object structure
// Babel or ESBuild like transpilers converts <m /> to that object like reactElement

// Ex ->
/* 
    So we write like return in React 
    <> 
        <a href="https://google.com" target:"_blank" style : "color:red;"> 
            Go to Google 
        </a> 
    </>
    Babel for webpack or ESBuild for vite converts that into below 

    import React from "react";
    React.createElement(
            'a',
            {href : "https://google.com" , target : "_blank" , style : "color : red;"},
            Go to Google
        )
*/

// Interview Point of View
// {} inside react element is called as evaluated expression
// Inside {} we can only declare evaluation , can't like if() else
// why ? because in the end of day that variables are stored in that place where it is in object

// now what react does is , it creates the Copy like Html Dom which is like tree structure

// function myCustomRender(reactElement , mainDiv){

//     const myElement = document.createElement(reactElement.type);
//     myElement.innerHTML = reactElement.children;

//     for (const propKey in reactElement.props){
//         if (propKey === "children") continue;
//         myElement.setAttribute(String(propKey) , reactElement.props[propKey]);
//     }

//     mainDiv.appendChild(myElement);

// }

// function reactElement(){
//     return {
//         type : "a",
//         props : {
//             href : "https://google.com",
//             target : "_blank",
//             style : "color: red;"
//         },
//         children : "Click to Go to Google"
//     }
// }

// const mainDiv = document.getElementById("root");

// myCustomRender(reactElement(), mainDiv);

function myRender(reactElement, mainDiv) {
  const myElement = document.createElement(reactElement.type);
  myElement.innerHTML = reactElement.children;

  for (const propKey in reactElement.props) {
    myElement.setAttribute(propKey, reactElement.props[propKey]);
  }

  mainDiv.appendChild(myElement);
}

let reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
    style: "color: red;",
  },
  children: "Click to Go to Google",
};

const mainDiv = document.getElementById("root");
myRender(reactElement, mainDiv);
