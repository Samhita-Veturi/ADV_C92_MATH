function AddUser(){
    Play_1 = document.getElementById("Player_1").value;
    Play_2 = document.getElementById("Player_2").value;
    Feremy = localStorage.setItem("Player_1", Play_1);
    Eremy = localStorage.setItem("Player_2", Play_2);

    window.location = "Game.html";
}