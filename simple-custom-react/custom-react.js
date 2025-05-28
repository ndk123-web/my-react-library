
function myCustomRender(reactElement , mainDiv){

    const myElement = document.createElement(reactElement.type);
    myElement.setAttribute("href",reactElement.props.href);
    myElement.setAttribute("target",reactElement.props.target);
    myElement.innerHTML = reactElement.children;

    mainDiv.appendChild(myElement);

}

function reactElement(){
    return {
        type : "a",
        props : {
            href : "https://google.com",
            target : "_blank"
        },
        children : "Click to Go to Google"
    }
}


const mainDiv = document.getElementById("root");

myCustomRender(reactElement(), mainDiv);