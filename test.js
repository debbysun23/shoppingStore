var buttons = document.querySelectorAll('.main');
var storeItems = document.querySelectorAll('.store-item');
var veep = document.getElementById('store-items');
buttons.forEach(function (button) {
    console.log("aa", buttons);
    button.addEventListener('click', function (e) {
         
            e.preventDefault()
            const filter = e.target.dataset.filter;
            if (filter === 'all'){
                storeItems.forEach(function(item){
                    item.style.display = 'block';
                })
            } else if(filter === 'cakes') {
                storeItems.forEach(function(item){
                    if(item.classList.contains('cake')){
                        item.style.display = 'block'
                    } else{
                        item.style.display = 'none'
                    }
                })
            } else if(filter === 'cupcakes'){   
                storeItems.forEach(function(item){
                    if(item.classList.contains('cupcake')){
                        item.style.display = 'block'
                    }else{
                        item.style.display = 'none'
                    }
                })
            } else if(filter === 'sweets'){
                storeItems.forEach(function(item){
                    if(item.classList.contains('sweet')){
                        item.style.display = 'block'
                    }else{
                        item.style.display = 'none'
                    }
                })
            } else if(filter === 'doughnuts'){
                storeItems.forEach(function(item){
                    if(item.classList.contains('dougnut')){
                        item.style.display = 'block'
                    }else{
                        item.style.display = 'none'
                    }
                })
            } else if(filter === 'explore'){
                veep.style.display = 'none'
            }else{
                veep.style.display = ' block'
            }
    }) 
})  
    const buttonns = document.querySelector('.rty');
    const storeItemms = document.querySelectorAll('.store-item');
    buttonns.addEventListener('click', function (e){
        if(buttonns.classList.contains('big')){
            veep.style.display = 'block'
        }else{
            veep.style.display = 'none'
        }
    })
   
    const searchBox = document.querySelector('#form');
    const storeItemmms = document.querySelectorAll('.store-item');

    searchBox.addEventListener('keyup', (e) => {
       const searchFilter = e.target.value.toLowerCase().trim();
        console.log('fee', searchFilter);
       storeItemmms.forEach((item) => {
           if(item.textContent.includes(searchFilter)){
               item.style.display =  'block'
           } else{
               item.style.display = 'none'
           }
       })
    })
