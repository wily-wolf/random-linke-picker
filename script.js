function pickRandomLine() {
  const text = document.getElementById("textInput").value;
  const lines = text.split(/\r?\n/).filter(line => line.trim() !== "");
  if (lines.length === 0) {
    document.getElementById("output").innerHTML = "Nessuna riga valida trovata.";
    return;
  }

  const randomLine = lines[Math.floor(Math.random() * lines.length)].trim();

  if (randomLine.startsWith("http://") || randomLine.startsWith("https://")) {
    document.getElementById("output").innerHTML = `<a href="${randomLine}" target="_blank">${randomLine}</a>`;
  } else {
    document.getElementById("output").textContent = randomLine;
  }
}
