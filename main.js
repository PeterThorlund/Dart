class Player {
    constructor(name) {
        this.score = 501
        this.noOfSetWon = 0;
        this.name = name
    }

    resetCount() {
        this.score = 501;
    }

    incrementSetsWon() {
        this.noOfSetWon++;
    }

    getNoOfSetWon() {
        return this.noOfSetWon;
    }

    setScore(i) {
        this.score -= i;
    }

}

let app = new Vue({
    el: '#app',
    data: {
        player1: new Player("player1"),
        player2: new Player("player2"),
        input: ""
    },
    methods: {
        onSubmit: function() {
            if(check(this.player1.score,this.input)) {
                this.player1.setScore(+this.input);
                this.input = "";
            }
        }
    }
})

function check(score, hit) {
    return (score - hit >= 0) && (score - hit != 1) && (hit <= 180) && (hit <= score)
  }