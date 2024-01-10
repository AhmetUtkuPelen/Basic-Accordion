const aclar = document.querySelectorAll('.ac')

aclar.forEach((e)=>{

    e.addEventListener('click',()=>{

        const acilacak = document.querySelector(e.dataset.target)
        acilacak.classList.toggle('active')

    })

})