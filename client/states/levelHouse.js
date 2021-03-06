LevelHouse = function (game) { };

LevelHouse.prototype = {
    
    create: function () {
        
        insideMap.prototype.create(this);

        Player.prototype.create(this);

        NPC.prototype.create(this);
        this.mercs = gameStatHandler.prototype.mercsAmount;
        Ui.prototype.create(this);

        insideMap.prototype.layForeground(this);

        insideText.prototype.create(this);

        keyConfig(this);

        insideEvents.prototype.openingTween(this);

    },

    update: function () {
       Player.prototype.updateHouse(this);

       insideText.prototype.update(this);
       Ui.prototype.update(this);

       NPC.prototype.update(this);

        if (Phaser.Rectangle.containsPoint(this.map.exitRect, this.player.position)) {
            waveHandler.prototype.beenInHouse = true;
            gameStatHandler.prototype.maxHealth = this.player.maxHealth;
            this.game.state.start('levelOutside');
        }
    }

};
