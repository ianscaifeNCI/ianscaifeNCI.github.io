function check(){

    var user1 = document.getElementById("user1").value;
    var user2 = document.getElementById("user2").value;

    if (user1 == "Rock"){
        if (user2 == "Rock"){
            document.getElementById("game").innerHTML="It's a draw!";
        }
        else if (user2 == "Paper"){
            document.getElementById("game").innerHTML="Player 2 wins!";
        }
        else if (user2 == "Scissors"){
            document.getElementById("game").innerHTML="Player 1 wins!";
        }
        else {
            alert("Player 2 must enter a valid input");
        }

    }
    else if (user1 == "Paper"){
        if (user2 == "Rock"){
            document.getElementById("game").innerHTML="Player 1 wins!";
        }
        else if (user2 == "Paper"){
            document.getElementById("game").innerHTML="It's a draw!";
        }
        else if (user2 == "Scissors"){
            document.getElementById("game").innerHTML="Player 2 wins!";
        }
        else {
            alert("Player 2 must enter a valid input");
        }

    }
    else if (user1 == "Scissors"){
        if (user2 == "Rock"){
            document.getElementById("game").innerHTML="Player 2 wins!";
        }
        else if (user2 == "Paper"){
            document.getElementById("game").innerHTML="Player 1 wins!";
        }
        else if (user2 == "Scissors"){
            document.getElementById("game").innerHTML="It's a draw!";
        }
        else {
            alert("Player 2 must enter a valid input");
        }

    }
    else {
        alert("Player 1 must enter a valid input");
    }

}
function hide(){
    document.getElementById('button').style.visibility = 'hidden';
}
function refresh(){
    location.reload();
}