const check = document.getElementById("lightmode-toggle");
const themeSystem = localStorage.getItem("themeSystem") || "dark";

check.addEventListener("change", () => {
    let oldTheme = localStorage.getItem("themeSystem") || "dark";
    let newTheme = oldTheme== "dark" ? "light":"dark";

    localStorage.setItem("themeSystem",newTheme);
    defineCurrentTheme(newTheme);
})
function defineCurrentTheme(theme){
    document.documentElement.setAttribute("data-theme",theme);
    if(theme=="light"){
        let checkbox = document.getElementById("lightmode-toggle");
        checkbox.checked = true;
    }
}

defineCurrentTheme(themeSystem);
