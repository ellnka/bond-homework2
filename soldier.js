const Unit = require("./unit");

function Soldier() {
    Unit.apply(this, arguments);

    const _STD_ATTACK_POWER = 15;

    this.handAttack = function(unit) {
        let attackPower = this.calcPower(_STD_ATTACK_POWER);
        let damagePoints = unit.takeDamage(attackPower);
        this.earnExperience(this.pointsXP.damage);
        return damagePoints;
    };
}

module.exports = Soldier;