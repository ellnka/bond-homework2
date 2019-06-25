console.log("the fight is coming soon...");
//import { Doctor } from 'doctor';

const Unit = require("./unit");
const Soldier = require("./soldier");
const Doctor = require("./doctor");
const Heavy = require("./heavy");

const MAX_ROUNDS = 10;
const MAX_ACTIONS = 5;
const MIN_ACTIONS = 1;

let healPoints = 0;
let damagePoints = 0;
let roundCount = 0;

let soldier = new Soldier("Soldier Jane");
let doctor = new Doctor("Dr. Pain");
let heavy = new Heavy("Bruce Willis");

console.log("FIGHTERS: ");
logStatus(heavy, soldier);

while ((heavy.isAlive() && soldier.isAlive()) && roundCount++ < MAX_ROUNDS) {
    console.log("ROUND#" + roundCount + "  --------------");

    let attackCount = Math.floor(Math.random() * (MAX_ACTIONS - MIN_ACTIONS + 1)) + MIN_ACTIONS;
    let shootCount = Math.floor(Math.random() * (MAX_ACTIONS - MIN_ACTIONS + 1)) + MIN_ACTIONS;
    let healCount = Math.floor(Math.random() * (MAX_ACTIONS - MIN_ACTIONS + 1)) + MIN_ACTIONS;

    console.log("\n" + soldier.getName() + "'s turn to attack");
    for (let i = 0; i < attackCount; i++) {
        damagePoints = soldier.isAlive() ? soldier.handAttack(heavy) : 0;
        //logDamage(soldier, heavy, damagePoints);
    }

    console.log("\n" + heavy.getName() + "'s turn to attack");
    damagePoints = heavy.isAlive() ? heavy.machineGunAttack(soldier, shootCount) : 0;
    //logDamage(heavy, soldier, damagePoints);

    console.log("\n" + doctor.getName() + "'s turn to heal the soldier"); // because soldier is weaker than heavy unit
    for (let i = 0; i < healCount; i++) {
        healPoints = soldier.isAlive() ? doctor.heal(soldier) : 0;
        //logHeal(doctor, soldier, healPoints);
    }

    console.log("\n" + " ROUND RESULTS: ");
    logStatus(heavy, soldier, doctor);
    console.log("\n" + "-------------------------------------- \n");
}

if (heavy.isAlive() === soldier.isAlive()) {
    console.log("Friendship has won!"); //or doctor???
} else {
    console.log((heavy.isAlive() ? heavy.getName() : soldier.getName()) + " is a winner!!!");
}




function logStatus(...units) {
    units.forEach((unit) => {
        console.log(
            unit.getName() + ": " +
            "level = " + unit.getLevel() + ", " +
            "xp = " + Math.round(unit.getXP() * 100) / 100 + ", " +
            "health = " + Math.round(unit.getHealth() * 100) / 100
        );
    });
};

function logDamage(beatenUnit, beatingUnit, damagePoints) {
    console.log(beatingUnit.getName() + " has taken damage " + damagePoints + " points from " + beatenUnit.getName() + "!");
};

function logHeal(doctor, unit, healPoints) {
    console.log(doctor.getName() + " added " + healPoints + " to health for " + unit.getName());
};