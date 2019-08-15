new Vue ({
    el: "#app",
    data: {
        playerHealth: 100, //starts health at 100
        monsterHealth: 100,
        gameIsRunning: false //initially we don't have a running game, we can see if button should be action buttons if true or start new game
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function (){
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            //Math.max returns the largest number
            //Math.floor returns the largest integer less than or equal to a given number
            //Math.random returns a random floating point number
            this.monsterHealth -= damage;

            if (this.monsterHealth <= 0) {
                alert('You won!');
                this.gameIsRunning = false;
                return;
            }

            max = 12;
            min = 5;
            damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHealth  -= damage;

            if (this.playerHealth <= 0) {
                alert('You lose!');
                this.gameIsRunning = false;
            }
        },
        specialAttack: function (){
            this.playerHealth -= 10 ;
        },
        heal: function (){
            if (this.playerHealth <= 90){
                this.playerHealth += 10;
            }
        },
        giveUp: function (){
            this.gameIsRunning = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        }
    }

})