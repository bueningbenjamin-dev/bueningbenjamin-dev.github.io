// Page-specific fun facts

function showFunFact(page) {
    let facts = [];

    if (page === "home") {
        facts = [
            "Tabletop games have existed for thousands of years.",
            "Board games help improve critical thinking skills.",
            "Dice games were played as early as ancient Mesopotamia."
        ];
    } 
    else if (page === "monsters") {
        facts = [
            "The d20 system is the most common dice system in tabletop RPGs.",
            "Many monsters in D&D are inspired by real-world myths.",
            "Dragons appear in folklore across dozens of cultures."
        ];
    } 
    else if (page === "characters") {
        facts = [
            "Character backstories help players role-play more effectively.",
            "Many players base characters on real personality traits.",
            "Alignment systems help guide character decisions."
        ];
    }

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("funFact").innerText = randomFact;
}
