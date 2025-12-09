let adjectives = ["incredible","stale","resolute","ubiquitous","curvy","next","past","flaky","crabby","smelly","smoggy","racial","proud","fierce","protective","lonely","orange","lamentable","grubby","hot"];
let verbs = ["trusted","placed","marched","obtained","slipped","chased","tapped","curved","zoomed","chewed","spilt","visited","breathed","coached","wailed","saved","answered","packed","excused","listed","dressed"];
let nouns = ["Arrival", "Reward", "Achiever", "Fact", "Situation", "President", "Crime", "Flock", "String", "Appointment", "Bat", "Eyes", "Army", "Paper", "Education", "Addition", "Math", "Trip", "Desk", "Computer"];
let adverbs = ["enormously", "unnecessarily", "quaintly", "defiantly", "truly", "delightfully", "selfishly", "always", "rarely", "irritably", "fortunately", "yawningly", "terribly", "yawningly", "loyally", "reproachfully", "justly", "terribly", "wetly", "loudly"];

function makeSent() {
    let chosenAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    let chosenV = verbs[Math.floor(Math.random() * verbs.length)];
    let chosenN = nouns[Math.floor(Math.random() * nouns.length)];
    let chosenAdv = adverbs[Math.floor(Math.random() * adverbs.length)];
    return `The ${chosenAdj} ${chosenN} ${chosenV} ${chosenAdv}`;
}

function generateSentence() {
    let newSent = makeSent();
    document.querySelector("#firstShow").textContent = newSent;
}

function generateSentenceFromUser() {
    adjectives = document.querySelector("#userAdj").value.split(",");
    verbs = document.querySelector("#userV").value.split(",");
    nouns = document.querySelector("#userN").value.split(",");
    adverbs = document.querySelector("#userAdv").value.split(",");
    let newSent = makeSent();
    document.querySelector("#secondShow").textContent = newSent;
}

document.querySelector("#genRanSent").addEventListener("click", generateSentence);
document.querySelector("#genRanSentFromUser").addEventListener("click", generateSentenceFromUser);