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

// now what react does is , it creates the Copy like Html Dom which is like tree structure