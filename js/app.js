// $(function () {

//   // Nav toggle
//   $('#nav_toggle').on('click', function(event) {
//       event.preventDefault()

//       $(this).toggleClass('active')
//       $('nav').toggleClass('active')
//   })

// })


let navMain = document.querySelector('.nav')
let navToggle = document.querySelector('.burger')

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('nav--closed')) {
        navMain.classList.remove('nav--closed')
        navMain.classList.add('nav--active')
    } else {
        navMain.classList.add('nav--closed')
        navMain.classList.remove('nav--active')
    }
    if (navToggle.classList.contains('burger--closed')) {
        navToggle.classList.remove('burger--closed')
        navToggle.classList.add('burger--active')
    } else {
        navToggle.classList.add('burger--closed')
        navToggle.classList.remove('burger--active')
    }
    })

