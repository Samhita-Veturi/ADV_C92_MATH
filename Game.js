var Ply_1 = localStorage.getItem("Player_1");
var Ply_2 = localStorage.getItem("Player_2");

var Ply_1Score = 0;
var Ply_2Score = 0;

document.getElementById("P1_Name").innerHTML= Ply_1 + " : ";
console.log(Ply_1);
document.getElementById("P2_Name").innerHTML= Ply_2 + " : ";

document.getElementById("P1_S").innerHTML = Ply_1Score;
document.getElementById("P2_S").innerHTML = Ply_2Score;

document.getElementById("Ques_P").innerHTML = "Question Turn - " + Ply_2;
document.getElementById("Ans_P").innerHTML = "Answer Turn - " + Ply_1;

function Send(){
    Num_1 = document.getElementById("Num_1").value;
    Num_2 = document.getElementById("Num_2").value;
    Actual_Ans = parseInt(Num_1) * parseInt(Num_2);
    Ques_Num = "<h4>" + Num_1 + " X " + Num_2 + "</h4>";
    Input_B = "<br>Answer: <input type='text' id='word_display'>";
    Button = "<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";
    Label = "<br><label id='Cheesy_Dip'>" + "</label>"; 
    Row = Ques_Num + Input_B + Button + Label;
    document.getElementById("Output").innerHTML = Row;
    document.getElementById("Num_1").value = "";
    document.getElementById("Num_2").value = "";
}

var Q_Turn = "Player2";
var A_Turn = "Player1";

function Check(){
    Get_A = document.getElementById("word_display").value;
    if(Get_A==Actual_Ans){
        if(A_Turn == "Player1"){
        Ply_1Score = Ply_1Score + 1;
        document.getElementById("P1_S").innerHTML = Ply_1Score;
        }
        else{
            Ply_2Score = Ply_2Score + 1;
            document.getElementById("P2_S").innerHTML = Ply_2Score;
        }
    Label = "<br><label id='Cheesy_Dip'>" + "Correct Answer!" + "</label>";
    }
    else{
        Label = "<br><label id='Cheesy_Dip'>" + "Sorry, Wrong Answer!" + "</label>";
    }
    if(Q_Turn=="Player2"){
        Q_Turn = "Player1";
        document.getElementById("Ques_P").innerHTML = "Question Turn - " + Ply_1;
    }
    else{
        Q_Turn = "Player2";
        document.getElementById("Ques_P").innerHTML = "Question Turn - " + Ply_2;
    }
    if(A_Turn == "Player1"){
        A_Turn = "Player2";
        document.getElementById("Ans_P").innerHTML = "Answer Turn - " + Ply_2;
    }
    else{
        A_Turn = "Player1";
        document.getElementById("Ans_P").innerHTML = "Answer Turn - " + Ply_1;
    }
    document.getElementById("Output").innerHTML = Label;
}