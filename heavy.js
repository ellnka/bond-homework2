const Soldier = require("./soldier");

function Heavy() {
    Soldier.apply(this, arguments);

    this.resistance = 0.2; //20%

    this.machineGunAttack = function(unit, amountOfShots) {
        let damage = 0;
        for (let i = 0; i < amountOfShots; i++) {
            damage += this.handAttack(unit);
        }
        return damage;
    };
}

module.exports = Heavy;