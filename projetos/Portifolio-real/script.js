function clickMenu() {
    const menu = document.getElementById("menu");
    const button = document.querySelector(".hamburger");
    
    menu.classList.toggle("active");
    button.setAttribute("aria-expanded", menu.classList.contains("active"));
}