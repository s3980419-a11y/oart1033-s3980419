const ToggleBtn = document.getElementById("ToggleButton");
ToggleBtn.style.backgroundColor = "rgb(34, 122, 122)";
ToggleBtn.style.fontSize = "26px";
ToggleBtn.style.color = "white";
ToggleBtn.style.borderColor = "rgb(0, 97, 114)";
ToggleBtn.style.fontFamily = '"Nova Square", sans-serif';
ToggleBtn.style.alignContent = "center";


ToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light_mode_switch");
});