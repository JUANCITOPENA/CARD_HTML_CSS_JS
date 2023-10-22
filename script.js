const tooltipHeading = document.getElementById("tooltipHeading");
const tooltiptext = document.querySelector(".tooltiptext");

tooltipHeading.addEventListener("mouseover", () => {
    tooltipHeading.textContent = tooltiptext.textContent;
});

tooltipHeading.addEventListener("mouseout", () => {
    tooltipHeading.textContent = "Ingeniero en Sistemas y Computación";
});