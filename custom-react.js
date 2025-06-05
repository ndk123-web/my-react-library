function customRender(element, container) {
  // If element is just a string, create a text node
  // We can't directly append a string to the container, so we create a text node
  if (typeof element === "string") {
    const textNode = document.createTextNode(element);
    container.appendChild(textNode);
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
  if (Array.isArray(children)) {
    // If children is an array, loop through each child and recursively call customRender
    // e.g. <div><p>Hello from paragraph!</p><a href="https://google.com">Click to Google</a></div>
    children.forEach((child) => customRender(child, newTag));
  } else if (typeof children === "object") {
    // If children is an object, recursively call customRender
    // e.g. <div><p>Hello from paragraph!</p></div>
    customRender(children, newTag);
  } else if (typeof children === "string") {
    // If children is a string, set the text content of the new tag
    // e.g. <p>Hello from paragraph!</p>
    newTag.textContent = children;
  }

  // Finally, append the new tag to the container
  // e.g. <div id="parent"><p>Hello from paragraph!</p><a href="https://google.com">Click to Google</a></div>
  container.appendChild(newTag);
}

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

