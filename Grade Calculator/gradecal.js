const calculate = () => {
    let marks1=document.querySelector("#marks1").value;
    let marks2=document.querySelector("#marks2").value;
    let marks3=document.querySelector("#marks3").value;
    let marks4=document.querySelector("#marks4").value;
    let marks5=document.querySelector("#marks5").value;
    let grades = "";
    

    let totalgrades = 
    parseFloat(marks1)+ 
    parseFloat(marks2)+ 
    parseFloat(marks3)+ 
    parseFloat(marks4)+
    parseFloat(marks5); 


    let percentage = (totalgrades / 500) * 100;
    if (percentage <= 100 && percentage >= 80) {
        grades = "A";
    }
        else if (percentage <= 79 && percentage >= 60) {
        grades = "B";
    }
        else if (percentage <= 59 && percentage >= 50) {
        grades = "C";
    }
        else if (percentage <= 49 && percentage >= 40) {
        grades = "D";
    }
        else {
            grades = "f";
        }



        if (percentage >= 39){
            document.querySelector(
                "#showdata").innerHTML= `out of 500 your total is ${totalgrades} and percentage is ${percentage}%.<br>
            your grade is ${grades}.<br> congrats buddy you are Passed.`;
            
        } 
        else {
            document.querySelector("#showdata").innerHTML = `out of 500 your total is ${totalgrades} and is less then required passing marks so you are failed :(<br> your percentage is ${percentage}%<br> your grades is ${grades}. `;
        }
};