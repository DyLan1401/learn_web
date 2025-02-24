const heart = document.querySelector('.card_heart');
const cart = document.querySelector('.card_cart');
const sizes = document.querySelectorAll('.card_size span');


let changecolor = false;

heart.addEventListener('click',function(){
    if(changecolor){
        this.style.color = 'white';
    }else{
        this.style.color = 'red';
    }
    changecolor =!changecolor;
})


cart.addEventListener('click',function(){
    if(changecolor){
        this.style.color = 'white';
    }else{
        this.style.color = 'green';
    }
    changecolor =!changecolor;
})

sizes.forEach(size => {
    size.addEventListener('click',function(){
        if(changecolor){
            this.style.background = 'white';
        }else{
            this.style.background = ' rgba(163, 138, 138, 0.5)';
        }
        changecolor =!changecolor;
    })
});

