window.addEventListener('message', function (event) {
  const data = event.data;

  // Mendengarkan update data kecepatan dari JGVRP
  if (data.type === 'updateSpeedometer' || data.action === 'update' || data.speed !== undefined) {
    setSpeed(data.speed);
  }
});

function setSpeed(speed) {
  const speedElement = document.getElementById('speed');
  if (speedElement && speed !== undefined) {
    speedElement.innerText = Math.round(speed);
  }
}