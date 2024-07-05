
// document.getElementById('submitbtn')
// .addEventListener('click', function ()
// {
//     let rightanswer = "France";
//     let slectedanswer = document.getElementById('anwserselect').value;

//     if (slectedanswer===rightanswer) {
//         document.getElementById ('result').textContent = "You have seleced the Right Answer"
//     }

//     else {
//         document.getElementById ('result').textContent = "You have seleced the Wrong Answer"
//     }
// });


// document.querySelectorAll('.Submit-Btn').forEach(button => {
//     button.addEventListener('click', function() {
//         let correctAnswer = "France";
//         let selectedAnswer = this.value;

//         if (correctAnswer === selectedAnswer) {
//             document.getElementById('result').textContent = "You have selected the right answer.";
//         } else {
//             document.getElementById('result').textContent = "You have selected the wrong answer.";
//         }
//     });
// });



document.querySelectorAll('.Submit-Btn').forEach(button => {
    button.addEventListener('click', function() {
        let currectanswer = "France"
        let selectedAnswer = this.value

        if (currectanswer===selectedAnswer) {
            document.getElementById ('result').textContent = "You have selected the right answer.";
        }

        else {
            document.getElementById('result').textContent = "You have selected the wrong answer.";
        }
    })
})


document.querySelectorAll ('.Submit-Btn').forEach(button => {
     button.addEventListener ('click', function (){
        this.style.background = "black"
        this.style.color = "white"
     })
})