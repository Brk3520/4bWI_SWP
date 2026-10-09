
interface Player {
    name: string;
    goals: number;
}

const players: Player[] = [
    { name: "Hakan", goals: 12 },
    { name: "Berke", goals: 5 },
    { name: "Noyan", goals: 8 },
    { name: "Marat Vidal", goals: 31 },
];


// MAP - Namen der Spieler ausgeben
const names = players.map(player => player.name);

console.log("Spielernamen:");
console.log(names);


// FILTER - Spieler mit mehr als 7 Toren
const goodPlayers = players.filter(player => player.goals > 7);

console.log("Spieler mit mehr als 7 Toren:");
console.log(goodPlayers);


// SORT - Spieler nach Toren sortieren
const sortedPlayers = players.sort((a, b) => a.goals - b.goals);

console.log("Spieler nach Toren sortiert:");
console.log(sortedPlayers);
