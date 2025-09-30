// Dummy sensor update function
function updateSensors() {
  const temp = (20 + Math.random() * 10).toFixed(1);
  const humidity = (40 + Math.random() * 20).toFixed(0);
  const light = Math.floor(200 + Math.random() * 500);

  document.getElementById("temp").textContent = temp + "°C";
  document.getElementById("humidity").textContent = humidity + "%";
  document.getElementById("light").textContent = light;

  // Update diary log
  const diary = document.getElementById("diaryLog");
  const timestamp = new Date().toLocaleTimeString();
  const entry = document.createElement("li");
  entry.textContent = `${timestamp} - Temp: ${temp}°C, Humidity: ${humidity}%, Light: ${light}`;
  diary.prepend(entry); // newest on top

  // Limit diary to 10 entries
  if (diary.children.length > 10) {
    diary.removeChild(diary.lastChild);
  }
}

// Settings update
function updateSettings() {
  const tempInput = document.getElementById("setTemp");
  const humInput = document.getElementById("setHum");

  // Ensure values are within min/max
  const temp = Math.min(Math.max(tempInput.value, tempInput.min), tempInput.max);
  const humidity = Math.min(Math.max(humInput.value, humInput.min), humInput.max);

  tempInput.value = temp;
  humInput.value = humidity;

  alert(`Settings updated:\nTemperature: ${temp}°C\nHumidity: ${humidity}%`);
}

// Update sensors every 2 seconds
setInterval(updateSensors, 2000);

// Initial update
updateSensors();
