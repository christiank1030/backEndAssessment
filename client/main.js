

const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const submit = document.querySelector(".userForm");
const deleteBtn = document.getElementById("deleteButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const createUser = (event) => {
    event.preventDefault();

    let newName = document.getElementById("name").value
    let newAge = document.getElementById("age").value
    let newGoal = document.getElementById("goal").value

    let newUser = {
        name: newName, 
        age: parseInt(newAge),
        goal: newGoal
    }
    
    axios.post("http://localhost:4000/api/users", newUser)
        .then(res => {
            const userCard = document.createElement("div");
            userCard.classList.add('user-card')
            userCard.innerHTML = 
            `<p>    
                Name: ${newName} <br>
                Age: ${newAge} <br>
                Goal: ${newGoal}
            </p>
            <button id="deleteButton">Delete</button>`

            document.body.appendChild(userCard)
        })

const deleteUser = () => {
    axios.delete(`http://localhost:4000/${newName}`)
        .then(res => {
            console.log(res.data);
        })
    }

}


complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
submit.addEventListener('submit', createUser);