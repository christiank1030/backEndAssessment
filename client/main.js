const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const submit = document.querySelector(".userForm");
const userContainer = document.querySelector(".user-container")
const change = document.getElementById("changeButton")

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
        id: 0,
        name: newName, 
        age: parseInt(newAge),
        goal: newGoal
    }
    
    axios.post("http://localhost:4000/api/users", newUser)
        .then(res => {
            const user = res.data

            const userCard = document.createElement("div");
            userCard.classList.add("user-card")
            userCard.setAttribute('id', `${user.id}`);
            userCard.innerHTML = 
            `<p class="user">    
                Name: ${newName} <br>
                Age: ${newAge} <br>
                Goal: ${newGoal}
            </p>
            <button onclick="deleteUser(${user.id})" id="deleteButton">Delete</button>`

            userContainer.appendChild(userCard)
            console.log(user)
        })
}
const deleteUser = (id) => {
    axios.delete(`http:localhost:4000/api/users/${id}`)
    .then(res => {
        let userCard = document.querySelector(`#${id}`);
        delete userCard;
    })
};

const editGoal = (id) => {
    event.preventDefault()

    let updatedGoal = document.getElementById("updatedGoal").value
    let name = document.getElementById("userName").value
    let updatedUser = {
        name,
        goal: updatedGoal
    }

    axios.put(`http:localhost:4000/api/users/${id}`, updatedUser)
        .then(res => {
            let user = res.data
            let oldGoal = document.getElementById(`${user.id}`)
            oldGoal.innerHTML = 
                `<p class="user">    
                    Name: ${user.name} <br>
                    Age: ${user.age} <br>
                    Goal: ${user.goal}
                </p>
                <button onclick="deleteUser(${user.id})" id="deleteButton">Delete</button>`
        })
}


complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
submit.addEventListener('submit', createUser);
change.addEventListener('click', editGoal);