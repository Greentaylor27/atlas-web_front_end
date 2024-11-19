class studentHogwarts {
    #privateScore = 0;
    #name = null;

    constructor() {};

    #changeScoreBy(point) {
        this.#privateScore += point;
    }

    setName(newName) {
        this.#name = newName;
    }

    /* combined rewardStudent with a later portion of the same task
    to make it easier on myself and wanted to practice more for loops */
    rewardStudent(instance) {
        for (let i = 0; i < instance; i++) {
            this.#changeScoreBy(1);
        }
    }
    penalizeStudent(instance) {
        for (let i = 0; i < instance; i++) {
            this.#changeScoreBy(-1);
        }
    }
    getScore() {
        return `${this.#name}: ${this.#privateScore}`;
    }
}

let harry = new studentHogwarts();
harry.setName('Harry');
harry.rewardStudent(4);
console.log(harry.getScore());


let draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent(1);
draco.penalizeStudent(3);
console.log(draco.getScore());
