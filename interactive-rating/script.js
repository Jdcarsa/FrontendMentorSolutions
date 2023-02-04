const ratingNumber = document.querySelectorAll('li')
const submit = document.getElementsByClassName('btn')[0]
const thanksCard = document.getElementsByClassName("thanks-card")[0]
const mainCard = document.getElementsByClassName('main-card')[0]
const rating = document.getElementsByClassName('rating-number')[0]

ratingNumber.forEach((number,index) => {
    number.addEventListener('click', () =>{
        if(number.classList.contains('select')){
            number.classList.remove('select')
            number.classList.add('number')
        }else {
            number.classList.remove('number')
            number.classList.add('select')
            submit.addEventListener('click', ()=>{
                mainCard.style.display = 'none'
                thanksCard.style.display='block'
                rating.innerHTML = index+1
            })
        }
    })
});

