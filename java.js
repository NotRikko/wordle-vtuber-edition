const vtuberList = [
    { 
        Vtuber: "Enna",
        Wave: "Ethyria",
        Gender: "Female",
        hairColor: "White", 
    }, 
    {   Vtuber: "Millie", 
        Wave: "Ethyria",
        Gender: "Female",
        hairColor: "Blonde",
    },
    {
        Vtuber: "Nina",
        Wave: "Ethyria",
        Gender: "Female",
        hairColor: "Silver",
    },
    {
        Vtuber: "Pomu",
        Wave: "Lazulight",
        Gender: "Female",
        hairColor: "Blonde",
    },
    {
        Vtuber: "Elira",
        Wave: "Lazulight",
        Gender: "Female",
        hairColor: "Light Blue",
    },
    {
        Vtuber: "Selen",
        Wave: "Obsydia",
        Gender: "Female",
        hairColor: "Purple",
    },
    {
        Vtuber: "Finana",
        Wave: "Lazulight",
        Gender: "Female",
        hairColor: "Green",
    },
    {
        Vtuber: "Kotoka",
        Wave: "Xsoleil",
        Gender: "Female",
        hairColor: "Blonde",
    },
    {
        Vtuber: "Rosemi",
        Wave: "Obsydia",
        Gender: "Female",
        hairColor: "Pink",
    },
    {
        Vtuber: "Maria",
        Wave: "Iluna",
        Gender: "Female",
        hairColor: "Light Pink",
    },
    {
        Vtuber: "Reimu",
        Wave: "Ethyria",
        Gender: "Female",
        hairColor: "Silver",
    },
    {
        Vtuber: "Meloco",
        Wave: "Xsoleil",
        Gender: "Female",
        hairColor: "Black",
    },
    {
        Vtuber: "Petra",
        Wave: "Obsydia",
        Gender: "Female",
        hairColor: "Black",
    },
    {
        Vtuber: "Aia",
        Wave: "Iluna",
        Gender: "Female",
        hairColor: "Black",
    },
    {
        Vtuber: "Scarle",
        Wave: "Iluna",
        Gender: "Female",
        hairColor: "Black",
    }
]
let randomVtuber = vtuberList[Math.floor(vtuberList.length * Math.random())];
let actualAnswer = {
    Vtuber: randomVtuber.Vtuber.toLowerCase(),
    Wave: randomVtuber.Wave,
    Gender: randomVtuber.Gender,
    hairColor: randomVtuber.hairColor

}
console.log(actualAnswer.Vtuber);
let gameContainer= document.querySelector(".main-container2");
let result= document.createElement("h1");
function reveal(){
    let existingHints = document.querySelectorAll(".hint");
    if (existingHints.length > 0) {
        for (let i=0; i<existingHints.length;i++){
        gameContainer.removeChild(existingHints[i]);
        }
    }
    
    let playerAnswer = document.getElementById("answer").value;
    console.log(playerAnswer);
    if (playerAnswer.toLowerCase() === actualAnswer.Vtuber) {
        result.textContent = "You Win!";
        gameContainer.appendChild(result);
        } 
    else {  
        const foundVtuber = vtuberList.find(vtuber => vtuber.Vtuber.toLowerCase() === playerAnswer);
        console.log(foundVtuber);
        if(foundVtuber) {
            let hint1 = document.createElement('div');
            hint1.textContent = foundVtuber.Wave;     
            hint1.classList.add("hint");
            if (foundVtuber.Wave === actualAnswer.Wave) {
                hint1.style.backgroundColor = "green";
            }
            else {
                hint1.style.backgroundColor = "red";
            }
            let hint2 = document.createElement('div');
            hint2.textContent = foundVtuber.Gender;
            hint2.classList.add("hint");
            if (foundVtuber.Gender === actualAnswer.Gender) {
                hint2.style.backgroundColor= "green";
            }
            else {
                hint2.style.backgroundColor = "red";
            }
            let hint3 = document.createElement('div');
            hint3.textContent = foundVtuber.hairColor;
            hint3.classList.add("hint");
            if (foundVtuber.hairColor === actualAnswer.hairColor) {
                hint3.style.backgroundColor = "green";
            }
            else {
                hint3.style.backgroundColor = "red";
            }
            gameContainer.appendChild(hint1);
            gameContainer.appendChild(hint2);
            gameContainer.appendChild(hint3);
            
        }
        result.textContent = "Guess Again!";
        gameContainer.appendChild(result);
    }
}


let input = document.getElementById("answer");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("play").click();
    }
});

function resetInput(){
    document.getElementById("answer").value = ""
}

let container = document.querySelector("#game-container");

