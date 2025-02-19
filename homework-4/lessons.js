const instruments = [
  "Piano",
  "Guitar",
  "Violin",
  "Drums",
  "Saxophone",
  "Flute",
];

const instrumentsUlRef = document.getElementById("instrumentList");

for (let i = 0; i < instruments.length; i++) {
  instrumentsUlRef.innerHTML += "<li>" + instruments[i] + "</li>";
}
