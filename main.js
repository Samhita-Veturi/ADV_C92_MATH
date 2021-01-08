function AddUser(){
    Ply_1 = document.getElementById("Player_1").value;
    Ply_2 = document.getElementById("Player_2").value;
    localStorage.setItem("Player-1", Ply_1);
    localStorage.setItem("Player-2", Ply_2);

    window.location = "Game.html";
}