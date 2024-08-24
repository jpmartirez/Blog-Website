document.getElementById("toggle").addEventListener("click", () => {
    const toggle = document.getElementById("toggle");
    const navSetUp = document.querySelector(".navSetUp");

    if (toggle.checked) {
        navSetUp.classList.remove("hidden");
    } else {
        navSetUp.classList.add("hidden");
    }
    
});