const canvas = document.getElementById("grid");
const ctx = canvas.getContext("2d");

const modeSelect = document.getElementById("mode");
const color1Input = document.getElementById("color1");
const color2Input = document.getElementById("color2");
const color2Label = document.getElementById("color2-label");

const directionSelect = document.getElementById("direction");
const directionLabel = document.getElementById("direction-label");

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function drawGrid() {
  const mode = modeSelect.value;
  const direction = directionSelect.value;
  const color1 = hexToRgb(color1Input.value);
  const color2 = hexToRgb(color2Input.value);

  const imageData = ctx.createImageData(160, 160);
  const data = imageData.data;

  for (let y = 0; y < 160; y++) {
    for (let x = 0; x < 160; x++) {
      let r, g, b;

      if (mode === "solid") {
        [r, g, b] = color1;
      } else {
        let t = direction === "horizontal" ? x / 159 : y / 159;
        r = color1[0] * (1 - t) + color2[0] * t;
        g = color1[1] * (1 - t) + color2[1] * t;
        b = color1[2] * (1 - t) + color2[2] * t;
      }

      const index = (y * 160 + x) * 4;
      data[index] = r;
      data[index + 1] = g;
      data[index + 2] = b;
      data[index + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

modeSelect.addEventListener("change", () => {
  const isGradient = modeSelect.value === "gradient";
  color2Label.style.display = isGradient ? "inline-block" : "none";
  directionLabel.style.display = isGradient ? "inline-block" : "none";
  drawGrid();
});

color1Input.addEventListener("input", drawGrid);
color2Input.addEventListener("input", drawGrid);
directionSelect.addEventListener("change", drawGrid);

// Initial draw
drawGrid();
