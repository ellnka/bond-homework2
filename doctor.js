const Unit = require("./unit");

function Doctor() {
    Unit.apply(this, arguments);

    const _STD_HEAL_POWER = 10;

    this.heal = function(unit) {
        let healPower = this.calcPower(_STD_HEAL_POWER);
        unit.addHealth(healPower);
        this.earnExperience(this.pointsXP.default);
        return healPower;
    };
}

module.exports = Doctor;