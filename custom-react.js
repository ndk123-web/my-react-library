function customRender(element, container) {
  // If the element is just a string, it means it's a text node
  // We can't directly append a string to the container, so we create a text node
  if (typeof element === "string") {
    const textNode = document.createTextNode(element);
    // Append the text node to the container
    container.appendChild(textNode);
    // We don't need to do anything else, so we return
    return;
  }

  // Create a new tag, e.g. <div> or <p>
  const newTag = document.createElement(element.type);

  // Loop through all the props of the element
  for (let propKey in element.props) {
    // If the prop is not "children", set the attribute of the new tag
    // e.g. <div id="parent"> or <a href="https://google.com">
    if (propKey !== "children") {
      newTag.setAttribute(propKey, element.props[propKey]);
    }
  }

  // Handle children (can be string or array or another object)
  const children = element.props.children;
  // If children is an array, loop through each child and recursively call customRender
  // e.g. <div><p>Hello from paragraph!</p><a href="https://google.com">Click to Google</a></div>
  if (Array.isArray(children)) {
    children.forEach((child) => customRender(child, newTag));
  }
  // If children is an object, recursively call customRender
  // e.g. <div><p>Hello from paragraph!</p></div>
  else if (typeof children === "object") {
    customRender(children, newTag);
  }
  // If children is a string, set the text content of the new tag
  // e.g. <p>Hello from paragraph!</p>
  else if (typeof children === "string") {
    newTag.textContent = children;
  }

  // Finally, append the new tag to the container
  // e.g. <div id="parent"><p>Hello from paragraph!</p><a href="https://google.com">Click to Google</a></div>
  container.appendChild(newTag);
}

/*

  Now Babel or EsBuild like transpilers which converts the JSX syntax to the
  below object "MyElement"

  and we simply add this into the customRender function

  React Still Using this Virtual DOM Behind the scenes by transpiling JSX to this object

  This is the Base of React

 */

// Example usage
const myElement = {
  type: "div",
  props: {
    id: "parent",
    children: [
      {
        type: "p",
        props: {
          children: "Hello from paragraph!",
        },
      },
      {
        type: "a",
        props: {
          href: "https://google.com",
          target: "_blank",
          children: "Click to Google",
        },
      },
    ],
  },
};

const mainDiv = document.getElementById("root");
customRender(myElement, mainDiv);

