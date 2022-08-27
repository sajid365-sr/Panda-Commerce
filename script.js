// Shoes and Backpack section background-color change on mouseenter & mouseleave event


let shoesSection = document.getElementById('shoes');
let backpackSection = document.getElementById('backpack');


// shoes section
shoesSection.addEventListener('mouseenter',function(){
    shoesSection.style.background = '#d5f4e6'
})
shoesSection.addEventListener('mouseleave',function(){
    shoesSection.style.background = 'white'
})


// backpack section
backpackSection.addEventListener('mouseenter',function(){
    backpackSection.style.background = '#e4d1d1'
})
backpackSection.addEventListener('mouseleave',function(){
    backpackSection.style.background = 'white'
})

// email section button disable to enable when user type '@gmail.com' as a last word in input box


let emailInput = document.getElementById('emailInput');
let emailBtn = document.getElementById('emailBtn');

emailInput.addEventListener('keyup',function(event){
    if(event.target.value.endsWith('@gmail.com') || event.target.value.endsWith('.com')){
emailBtn.removeAttribute('disabled');
    }else{
        emailBtn.setAttribute('disabled',true);
    }
})

emailBtn.addEventListener('click',function(){
    emailInput.value = '';
    alert('Congratulations ! for being with us')
})

// when shoes and backpack section 'Buy Now' button  are clicked disable it and add a shopping cart icon instead.

let disableBtn = document.getElementsByClassName('BuyNow');
let cardFooter = document.getElementsByClassName('card-footer');

let counter = 0;
for(let keys of disableBtn){
    keys.addEventListener('click',function(){
        
        counter += 1;

keys.parentNode.innerHTML = `
<div style = 'position: relative'>
<img src = 'images/shopping-cart.png'>
<span id = 'counter' style = "position: absolute; top: 0; start: 100; background: blue; border-radius:50%; padding:0px 5px; color: white; font-size: 10px">${counter}</span>
</div>
`    
    })
}

