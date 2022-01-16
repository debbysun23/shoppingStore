var buttons = document.querySelectorAll('.main');
var storeItems = document.querySelectorAll('#store-item');
var width = 400;
var difference =2;
var interveralID = 0;
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
         
            e.preventDefault()
            if (button.classList.contains('btn')) {
                 document.getElementById('main-sb').style.display = "none"
            } if (button.classList.contains('bth')) {
                 document.getElementById('main-sb').style.display = "none"
            }if(button.classList.contains('rty')){
              document.getElementById('main-sb').style.display = 'block';
            } else if(button.classList.contains('bty')) {
                Array.from(storeItems).forEach(function(item){
                    if(item.classList.contains('cake')) {
                        item.style.display = 'block'
                    }else{
                        item.style.display = 'none'
                    }
                })
            } else if(button.classList.contains('hty')) {
                Array.from(storeItems).forEach(function(item){
                    if(item.classList.contains('cupcake')) {
                        item.style.display = 'block'
                    }else{
                        item.style.display = 'none'
                    }
                })
            } else if(button.classList.contains('bk')) {
                Array.from(storeItems).forEach(function(item){
                    if(item.classList.contains('sweet')) {
                        item.style.display = 'block'
                    }else{
                        item.style.display = 'none'
                    }    
                })    
    
            }  else if(button.classList.contains('hoy')) {
                Array.from(storeItems).forEach(function(item){
                    if(item.classList.contains('dougnut')) {
                        item.style.display = 'block'
                    }else{
                        item.style.display = 'none'
                    }    
                })     
           }          
    });    
});

const searchBar = document.forms["fb"].querySelector("input");
//console.log(searchBar)
//const storeItems = document.querySelectorAll('#store-item');
//console.log(storeItems)
searchBar.addEventListener('keyup', function (e) {
    const term = e.target.value.toLowerCase().trim();
    console.log('ssssss', storeItems)
    Array.from(storeItems).forEach(function (item) {
       // console.log(item)
        if (item.textContent.includes(term)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        e.preventDefault;
        if(button.classList.contains('rty')){
            Array.from(storeItems).forEach(function(item){
                item.style.display = 'block'
            })    

        }   
    })
})

/*function increase() 
{
    clearInterval(interveralID);
    interveralID =setInterval(expand,20);
}
function decrease() 
{
    clearInterval(interveralID);
    interveralID =setInterval(shrink,20);
}

function expand() 
{
    if(width<500)
    {
        width = width+difference;
        document.getElementById("img6").style.width= width;
        document.getElementById("rit").style.display = 'block';
        console.log(width);
    }
    else
    {
        clearInterval(interveralID);
    }
}
function shrink() 
{
    if(width>400)
    {
        width = width-difference;
        document.getElementById("img6").style.width= width;
       // document.getElementById("rit").style.display = 'none';
        console.log(width);
    }
    else
    {
        clearInterval(interveralID);
}   }*/