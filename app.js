let start = document.querySelector('.btn-start');
let allDiv = document.querySelectorAll('.color');
let rgbNum = document.querySelector('.btn-rgb')
let failOrSuc = document.querySelector('.btn-failandsucsess')

// debugger; 

let colors = [];



start.addEventListener('click', function(){
    failOrSuc.innerHTML = '...';
    failOrSuc.style.backgroundColor = 'yellow';
    failOrSuc.style.color = 'black';

    let i = 0;
    allDiv.forEach(item =>{
        item.style.opacity = 1;
        
        item.style.backgroundColor = getRgbColors();
        colors[i] = (item.style.backgroundColor);
        i++;
        item.addEventListener('click', function(){
            if(item.style.backgroundColor == rgbNum.innerHTML){
                failOrSuc.innerHTML = 'Success';
                failOrSuc.style.backgroundColor = 'green';
                failOrSuc.style.color = 'white';

                setTimeout(function() {
                alert('Congrats! You won!');
                }, 1);
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
    
        )
        let randNum = Math.round(Math.random() * 5);
        rgbNum.innerHTML = colors[randNum];
        console.log(colors);

    
})


function getRgbColors(){
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let rgb =`rgb(${r}, ${g}, ${b})`;
        return rgb
                
    }




















































































