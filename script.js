const storyElement = document.getElementById("story");
const choicesElement = document.getElementById("choices");

let story = [
  {
    text: "You land on the island. The match begins. What's your first move?",
    choices: [
      { text: "Run to the nearest building", next: 1 },
      { text: "Hide in the bushes", next: 2 },
      { text: "Search for weapons in the open", next: 3 },
      { text: "Head for the mountains", next: 4 },
    ],
  },
  {
    text: "You find an enemy in the building. What do you do?",
    choices: [
      { text: "Attack with bare hands", next: 5 },
      { text: "Hide and wait", next: 6 },
      { text: "Try to make an alliance", next: 7 },
      { text: "Escape through the window", next: 8 },
    ],
  },
  {
    text: "The bushes are quiet, but you see movement nearby. What's next?",
    choices: [
      { text: "Sneak towards the movement", next: 9 },
      { text: "Stay hidden", next: 10 },
      { text: "Run in the opposite direction", next: 11 },
      { text: "Ambush the movement", next: 12 },
    ],
  },
  {
    text: "You find a sniper rifle in the open. Suddenly, shots ring out. What now?",
    choices: [
      { text: "Shoot back", next: 13 },
      { text: "Take cover", next: 14 },
      { text: "Run for higher ground", next: 15 },
      { text: "Drop the weapon and surrender", next: 16 },
    ],
  },
  // More paths leading to different outcomes and the 10 endings
];

let currentIndex = 0;

function showStory(index) {
  const current = story[index];
  storyElement.innerText = current.text;
  choicesElement.innerHTML = "";
  
  current.choices.forEach((choice, i) => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = () => showStory(choice.next);
    choicesElement.appendChild(button);
  });
}

showStory(currentIndex);
