function reveal(){
    let answer = document.getElementById("answer").value;
    if (answer === "Enna") {
            let node = document.getElementById('game-container')
            if (node.style.visibility == 'visible' ) {
                node.style.visibility = 'hidden';
            }
            else
                node.style.visibility = 'visible'
        }
    else alert("Wrong Answer");
    }
    

let input = document.getElementById("answer");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("play").click();
    }
});

