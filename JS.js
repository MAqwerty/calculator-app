window.onload = function () {

    let Rtheme1 = document.getElementById('Rtheme1') 
    let Rtheme2 = document.getElementById('Rtheme2')
    let Rtheme3 = document.getElementById('Rtheme3')
    let btnR = document.getElementById('btnR')
    let HEAD = document.getElementById('HEAD')

    Rtheme1.addEventListener('input',theme1)
    Rtheme2.addEventListener('input',theme2)
    Rtheme3.addEventListener('input',theme3)


    Rtheme1.addEventListener('change',function(){
        HEAD.innerHTML += '<link rel="stylesheet" type"text/css" href="themes/theme1.css">'; 
    })

    Rtheme2.addEventListener('change',function(){
        HEAD.innerHTML += '<link rel="stylesheet" type"text/css" href="themes/theme2.css">'; 
    })

    Rtheme3.addEventListener('change',function(){
        HEAD.innerHTML += '<link rel="stylesheet" type"text/css" href="themes/theme3.css">'; 
    })


    function  theme1(){
        btnR.style.transform = 'translateX(0px)'
        btnR.style.transition = 'linear .5s all'
        btnR.style.backgroundColor = '#cd4329'
        }

    function theme2(){
            btnR.style.transform = 'translateX(26px)'
            btnR.style.transition = 'linear .5s all'
            btnR.style.backgroundColor = '#bd5702'
        }

    function theme3(){
            btnR.style.transform = 'translateX(50px)'
            btnR.style.transition = 'linear .5s all'
            btnR.style.backgroundColor = '#00e7d7'
        }



}

