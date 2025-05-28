// The Problem was what if there multiple attributes of element
// solution used -> for in loop because key value object

function myCustomRender(reactElement , mainDiv){

    const myElement = document.createElement(reactElement.type);
    myElement.innerHTML = reactElement.children;
    
    for (const propKey in reactElement.props){
        if (propKey === "children") continue;
        myElement.setAttribute(String(propKey) , reactElement.props[propKey]);
    }

    mainDiv.appendChild(myElement);

}

function reactElement(){
    return {
        type : "a",
        props : {
            href : "https://google.com",
            target : "_blank",
            style : "color: red;"
        },
        children : "Click to Go to Google"
    }
}


const mainDiv = document.getElementById("root");

myCustomRender(reactElement(), mainDiv);