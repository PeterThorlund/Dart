class Player {
    constructor() {
        this.score = 501
        this.noOfSetWon = 0;
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

}

let app = new Vue({
    el: '#app',
    data: {
        player: new Player(),
        input: ""
    },
    methods: {
    }
})