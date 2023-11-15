let start = document.querySelector('.btn-start');
let allDiv = document.querySelectorAll('.color');
let rgbNum = document.querySelector('.btn-rgb')
let failOrSuc = document.querySelector('.btn-failandsucsess')


let easy = document.querySelector('.easy-button');
let hard = document.querySelector('.hard-button');
let boxes2 = document.querySelectorAll('.boxes2');

let remove = document.querySelectorAll('.remove1');
let append = document.querySelectorAll('.append1');

let gamedifficulty = false //hard
// debugger; 

easy.addEventListener('click', function(){
    //make game diffulty easy
    gamedifficulty = true;
    easy.style.backgroundColor = 'green';
    easy.style.fontSize = '20px';
    hard.style.fontSize = '10px';
    remove.forEach(el=>
        el.style.display = 'none');
    isGame()
    
})


// start.addEventListener('click', function(){

function isGame(){
  

    failOrSuc.innerHTML = '...';
    failOrSuc.style.backgroundColor = 'yellow';
    failOrSuc.style.color = 'black';
    let colors = [];

 
    // debugger;
    for(let i = 0; i < allDiv.length; i++)
    {
        if(gamedifficulty){
            if (i == 3){
                break;
            }
        }
        let item = allDiv[i];
        
        item.style.backgroundColor = getRgbColors();
        colors.push(item.style.backgroundColor);
        
        item.addEventListener('click', function(){
            if(item.style.backgroundColor == rgbNum.innerHTML){
                failOrSuc.innerHTML = 'Success';
                failOrSuc.style.backgroundColor = 'green';
                failOrSuc.style.color = 'white';

            

                Swal.fire({
                position: "center",
                icon: "success",
                title: "Congrats!",
                text: "You won!",
                showConfirmButton: false,
                timer: 2000
                });
            }
            else{
                failOrSuc.innerHTML = 'Failed';
                failOrSuc.style.backgroundColor = 'red';
                failOrSuc.style.color = 'white';
                item.style.opacity = 0;
                // item.classList.toggle('hide')
                
            }
        }

        )
    }
    // allDiv.forEach(item =>{
        
    // }
    
    //     )
        
        let randNum = Math.round(Math.random() * colors.length);
        rgbNum.innerHTML = colors[randNum];
        console.log(colors);

    
// })
}
function getRgbColors(){
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let rgb =`rgb(${r}, ${g}, ${b})`;
        return rgb
                
    }




    hard.addEventListener('click', function(){
        gamedifficulty = false;
        hard.style.backgroundColor = 'red';
        hard.style.fontSize = '20px';
        easy.style.fontSize = '10px';
        
        remove.forEach(el =>{
            el.style.display = 'block';
        });
            
        isGame()
    
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "This is hard mode!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, I want to play!"
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           Swal.fire({
    //             title: "Let's go!",
    //             text: "You can click 'ok' and then 'start'. Good luck!.",
    //             // icon: "success"
    //           });
    //         }
    //       });
       
     
        


    });
    
















































































