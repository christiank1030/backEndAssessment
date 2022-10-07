const { response } = require("express");

const userDatabase = []

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
            name,
            age: parseInt(age),
            goal,
        }
        userDatabase.push(userToAdd);
        res.status(200).json({message: 'success', userDatabase});
    },
    deleteUser: (req, res) => {
        let userToDelete = req.params.name;
        for(let i = 0; i < userDatabase.length; i++) {
            if(userDatabase[i].name === userToDelete) {
                userDatabase.splice(i, 1)
                response.status(200).send("User deleted")
            }
        }
    }


}

console.log(userDatabase)