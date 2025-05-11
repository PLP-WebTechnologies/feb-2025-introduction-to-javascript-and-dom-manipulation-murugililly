// Change title text
document.getElementById("changeTextBtn").addEventListener("click", () => {
    document.getElementById("title").textContent = "You changed the title!";
  });
  
  // Change article style
  document.getElementById("changeStyleBtn").addEventListener("click", () => {
    const article = document.getElementById("article1");
    article.style.backgroundColor = "#f0f8ff";
    article.style.border = "2px solid #007acc";
    article.style.padding = "10px";
  });
  
  // Add a new paragraph
  document.getElementById("addElementBtn").addEventListener("click", () => {
    const container = document.getElementById("dynamicContainer");
    const newPara = document.createElement("p");
    newPara.textContent = "This is a dynamically added paragraph.";
    newPara.className = "dynamic-paragraph";
    container.appendChild(newPara);
  });
  
  // Remove the last added paragraph
  document.getElementById("removeElementBtn").addEventListener("click", () => {
    const container = document.getElementById("dynamicContainer");
    if (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  });