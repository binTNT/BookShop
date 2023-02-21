document.getElementById("menu2-id").onclick = () => {
    document.getElementById("fa-non-menu-id").style.animation = "in .3s linear";
    document.getElementById("fa-non-menu-id").style.display = "block";
};
document.getElementById("close-menu-id").onclick = () => {
    document.getElementById("fa-non-menu-id").style.animation = "out .3s linear";
    document.getElementById("fa-non-menu-id").style.display = "none";
};
