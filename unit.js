function Unit(name) {
    const _MAX_HEALTH = 100;
    const _XP_PER_LEVEL = 1000;

    let _health = _MAX_HEALTH;
    let _name = name;
    let _level = 1;
    let _xp = 0;

    this.resistance = 0;
    this.pointsXP = {
        default: 250,
        damage: 500
    };

    this.getName = function() {
        return _name;
    };

    this.getLevel = function() {
        return _level;
    };

    this.getXP = function() {
        return _xp;
    };

    this.getHealth = function() {
        return _health;
    };

    this.isAlive = function() {
        return _health > 0;
    };

    this.addHealth = function(value) {
        _health += value;
        if (_health > _MAX_HEALTH) {
            _health = _MAX_HEALTH;
        }
    };

    this.takeDamage = function(value) {
        let damagePoints = value * (1 - this.resistance);
        damagePoints = Math.round(damagePoints * 100) / 100;
        if (_health > damagePoints) {
            _health = _health - damagePoints;
        } else {
            _health = 0;
        }

        // _earnExperience(this.pointsXP.damage);   // I'm not a gamer... but why should it earn xp for taking damage?
        return damagePoints;
    };

    this.earnExperience = function(value) {
        _xp += value;
        if (_level > 1) {
            _xp -= (_xp / _level) * 0.1;
        }

        if (_xp / _level / _XP_PER_LEVEL >= 1) {
            _levelUp.call(this);
        }
    };

    this.calcPower = function(stdPower) {
        let power = stdPower;
        if (_level > 1) {
            power += stdPower * _level * 0.1;
        }
        return power;
    };

    const _levelUp = function() {
        _level++;
        console.log("Level Up! " + _name + "  has achieved the " + _level + " level! ");
    };
}

//export {Unit};
module.exports = Unit;