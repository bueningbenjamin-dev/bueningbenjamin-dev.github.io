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
// Contact form confirmation
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            document.getElementById("confirmationMessage").innerText =
                "Thank you! Your message has been successfully submitted.";

            form.reset();
        });
    }

});
// Hover pop-up feature
document.addEventListener("mouseover", function (event) {

    if (event.target.classList.contains("hoverInfo")) {

        const popup = document.getElementById("hoverPopup");
        popup.innerText = event.target.getAttribute("data-info");
        popup.style.display = "block";
        popup.style.position = "absolute";
        popup.style.backgroundColor = "#333";
        popup.style.color = "white";
        popup.style.padding = "8px";
        popup.style.borderRadius = "5px";
        popup.style.top = event.pageY + "px";
        popup.style.left = event.pageX + "px";
    }
});

document.addEventListener("mouseout", function (event) {
    if (event.target.classList.contains("hoverInfo")) {
        document.getElementById("hoverPopup").style.display = "none";
    }
});
