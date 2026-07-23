document.addEventListener("DOMContentLoaded", () => {
    const closedBox = document.getElementById("closed-box");
    const openBoxContent = document.getElementById("open-box-content");

    if (closedBox && openBoxContent) {
        closedBox.addEventListener("click", () => {
            // Hide the closed box
            closedBox.classList.add("hidden");
            
            // Show the rest of the website
            openBoxContent.classList.remove("hidden");
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const boxWrapper = document.getElementById("box-wrapper");
    const openBoxContent = document.getElementById("open-box-content");

    if (boxWrapper && openBoxContent) {
        boxWrapper.addEventListener("click", () => {
            // Hide the entire closed box container (both SVGs)
            boxWrapper.classList.add("hidden");
            
            // Show the opened site content container
            openBoxContent.classList.remove("hidden");
        });
    }
});