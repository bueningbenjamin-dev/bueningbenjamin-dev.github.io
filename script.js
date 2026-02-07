// Tabletop Fun Facts - JavaScript interactivity

// This function displays a random fun fact when called
function showFunFact() {
    const facts = [
        "The first tabletop role-playing game was Dungeons & Dragons, created in 1974.",
        "Some board games have been played for over 2,000 years!",
        "Dice come in many shapes: d4, d6, d8, d10, d12, d20.",
        "Tabletop games improve problem-solving and social skills."
    ];

    // Pick a random fact
    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    // Display it in the element with ID 'funFact'
    document.getElementById('funFact').innerText = randomFact;
}
