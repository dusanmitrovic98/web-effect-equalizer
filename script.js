const bars = document.querySelectorAll(".bar");

// Function to update the visualizer bars based on audio input
function updateVisualizer(amplitude) {
  const maxHeight = 50; // Maximum bar height
  const barHeight = amplitude * maxHeight;

  bars.forEach((bar) => {
    bar.setAttribute("height", barHeight);
  });
}
