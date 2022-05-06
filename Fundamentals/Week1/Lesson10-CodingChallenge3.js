
const dolphinsAverageScore = (97 + 112 + 101) / 3;
const koalasAverageScore = (109 + 95 + 106) / 3;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log("Dolpins Win!");
}
else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100) {
    console.log("Koalas Win!");
}
else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
    console.log("Both win the trophy!");
}
else {
    console.log("No winner.");
}



