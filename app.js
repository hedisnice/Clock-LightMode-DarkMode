document.addEventListener("DOMContentLoaded", function () {
  const moonButton = document.getElementById("moonButton");
  const sunButton = document.getElementById("sunButton");
  const body = document.body;
  const timeDisplay = document.getElementById("timeDisplay");

  function updateTime() {
    const now = new Date();
    const thailandTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Bangkok" })
    );
    const localHours = now.getHours().toString().padStart(2, "0");
    const localMinutes = now.getMinutes().toString().padStart(2, "0");
    const thailandHours = thailandTime.getHours().toString().padStart(2, "0");
    const thailandMinutes = thailandTime
      .getMinutes()
      .toString()
      .padStart(2, "0");

    const timeString = `เวลา ${thailandHours}:${thailandMinutes} น.`;
    timeDisplay.textContent = timeString;
  }

  updateTime();

  moonButton.addEventListener("click", function () {
    body.style.backgroundColor = "#000";
    body.style.color = "#fff";
    timeDisplay.style.color = "#fff";
    updateTime();
  });

  sunButton.addEventListener("click", function () {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
    timeDisplay.style.color = "#000";
    updateTime();
  });
});
