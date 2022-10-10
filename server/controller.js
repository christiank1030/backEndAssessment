const userDatabase = []
let globalId = 1;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A lifetime of happiness lies ahead of you.", "Accept something that you cannot change, and you will feel better.", "All your hard work will soon pay off.", "Bide your time, for success is near.", "Dedicate yourself with a calm mind to the task at hand."];

        let randomPosition = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomPosition];

        res.status(200).send(randomFortune);
    },
    createUser: (req, res) => {
        const { name, age, goal } = req.body
        let userToAdd = {
            id: globalId,
            name,
            age: parseInt(age),
            goal,
        }
        userDatabase.push(userToAdd);
        console.log(userDatabase)
        res.status(200).send(userToAdd);
        globalId++;
    },
    deleteUser: (req, res) => {
        let position = userDatabase.find((userObj) => userObj.id === req.params.id)
            userDatabase.splice(position, 1);
            res.status(200).send(userDatabase)
    },
    editGoal: (req, res) => {
        const { name, goal } = req.body
        for(let i = 0; i < userDatabase.length; i++) {
            if(userDatabase[i].name === name) {
                userDatabase[i].goal = goal;
                res.status(200).send(userDatabase[i])
            }
        }
    }
}
