const chartWed = document.querySelector(".chart-wed");
const chartThu = document.querySelector(".chart-thu");
const chartPrizeWed = document.querySelector(".chart-prize-wed");
const chartPrizeThu = document.querySelector(".chart-prize-thu");

chartWed.addEventListener("mouseover", () => {
  chartPrizeWed.style.display = "block";
});
chartWed.addEventListener("mouseout", () => {
  chartPrizeWed.style.display = "none";
});

chartThu.addEventListener("mouseover", () => {
  chartPrizeThu.style.display = "block";
});
chartThu.addEventListener("mouseout", () => {
  chartPrizeThu.style.display = "none";
});
