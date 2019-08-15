new Vue({
	el: "#app",
	data: {
		playerHealth: 100, //starts health at 100
		monsterHealth: 100,
		gameIsRunning: false, //initially we don't have a running game, we can see if button should be action buttons if true or start new game
		turns: []
	},
	methods: {
		startGame: function() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},

		attack: function() {
			var damage = this.calculateDamage(3, 10);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: "Player hits Monster for " + damage
			});
			//check if player won and end the function
			if (this.checkWin()) {
				return;
			}

			this.monsterAttacks();
		},

		specialAttack: function() {
			var damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: "Player hits Monster for " + damage
			});
			//check if player won and end the function
			if (this.checkWin()) {
				return;
			}

			this.monsterAttacks();
		},

		heal: function() {
			if (this.playerHealth <= 90) {
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100; //otherwise just set back to 100
			}

			this.turns.unshift({
				isPlayer: true,
				text: "Player heals for 10"
			});

			this.monsterAttacks();
		},

		giveUp: function() {
			this.playerHealth = 0;
			this.gameIsRunning = false;
		},

		monsterAttacks: function() {
			var damage = this.calculateDamage(5, 12);
			this.playerHealth -= damage;
			//check if player lost and end the function
			this.checkWin();
			this.turns.unshift({
				isPlayer: false,
				text: "Monster hits Player for " + damage
			});
		},

		calculateDamage: function(min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},

		checkWin: function() {
			if (this.monsterHealth <= 0) {
				if (confirm("You won! New Game?")) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}

				return true;
			} else if (this.playerHealth <= 0) {
				if (confirm("You lost! New Game?")) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}

				return true;
			}
		}
	}
});
