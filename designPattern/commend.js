/*
Commend pattern
요청을 캡슐화하라
*/

const Robot6 = (function() {
    function Robot() {
        this.weaponCommand = null;
    }

    Robot.prototype.setWeaponCommand = function() {
        this.weaponCommand = weaponCommand;
    };

    Robot.prototype.fire = function() {
        this.weaponCommand.fire();
    };
})


const MissileCommand6 = (function() {
    function Command() {
        this.weapon = new Weapon6();
    }

    Command.prototype.fire = function() {
        this.weapon.fireMissile();
    };

    return Command;
})();