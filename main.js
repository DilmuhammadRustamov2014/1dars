document.getElementById("lightMode").addEventListener("click", function() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
});

document.getElementById("darkMode").addEventListener("click", function() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
});

window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};
