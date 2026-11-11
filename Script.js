
// SkillMate JavaScript

// 1. Welcome Message
window.addEventListener("load", function() {
    console.log("Welcome to SkillMate!");
});

// 2. Skill Sharing Form
const shareForm = document.querySelector("#share form");

shareForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const inputs = shareForm.querySelectorAll("input");
    const description = shareForm.querySelector("textarea");

    const name = inputs[0].value.trim();
    const skill = inputs[1].value.trim();
    const email = inputs[2].value.trim();
    const details = description.value.trim();

    if (!name || !skill || !email) {
        alert("Please fill all required fields!");
        return;
    }

    const skillCard = document.createElement("div");
    skillCard.className = "card";

    const heading = document.createElement("h3");
    heading.textContent = skill;

    const student = document.createElement("p");
    student.textContent = "Shared by: " + name;

    const info = document.createElement("p");
    info.textContent = details;

    skillCard.append(heading, student, info);

    document.querySelector("#skills .container")
        .appendChild(skillCard);

    alert("Your skill has been shared successfully!");

    shareForm.reset();
});

// 3. Skill Search Function
const searchBox = document.createElement("input");

searchBox.type = "text";
searchBox.placeholder = "Search skills...";
searchBox.id = "skillSearch";

const skillsSection = document.querySelector("#skills");

skillsSection.insertBefore(
    searchBox,
    skillsSection.querySelector(".container")
);

searchBox.addEventListener("input", function() {
    const searchValue = searchBox.value.toLowerCase();

    const cards = document.querySelectorAll(
        "#skills .container .card"
    );

    cards.forEach(function(card) {
        const cardText = card.textContent.toLowerCase();

        card.style.display =
            cardText.includes(searchValue) ? "block" : "none";
    });
});

// 4. Contact Form Message
const contactForm = document.querySelector("#contact form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for contacting SkillMate!");
        contactForm.reset();
    });
}

// 5. Navigation Click
document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Navigation opened");
    });
});
