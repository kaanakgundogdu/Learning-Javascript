

function calculateAvgScore(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas && avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win!!! Dolphins avg is ${avgDolphins}, Koalas avg is ${avgKoalas}.`)
    }
    else if (avgDolphins < avgKoalas && avgKoalas > (avgDolphins * 2)) {
        console.log(`Koalas win!!! Dolphins avg is ${avgDolphins}, Koalas avg is ${avgKoalas}.`)
    }
    else {
        console.log(`No team wins. Dolphins avg is ${avgDolphins}, Koalas avg is ${avgKoalas}.`)
    }
}

function CalculateBothTeamAvg() {
    teamDolphinsAvarege = calculateAvgScore(85, 54, 41);
    teamKoalasAvarege = calculateAvgScore(23, 34, 27);
    checkWinner(teamDolphinsAvarege, teamKoalasAvarege);
}

CalculateBothTeamAvg();