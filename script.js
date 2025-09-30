function updateSettings() {
  const temp = document.getElementById("setTemp").value;
  const hum = document.getElementById("setHum").value;
  alert(`Settings updated:\nTemperature: ${temp}°C\nHumidity: ${hum}%`);
}

// Optional: simulate live sensor updates
setInterval(() => {
  document.getElementById("temp").textContent = (20 + Math.random() * 5).toFixed(1) + "°C";
  document.getElementById("humidity").textContent = (40 + Math.random() * 20).toFixed(0) + "%";
  document.getElementById("light").textContent = Math.floor(200 + Math.random() * 500);
}, 2000);
