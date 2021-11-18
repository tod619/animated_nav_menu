const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')

const navItems = [nav1,nav2,nav3,nav4,nav5]

// Function Declarations

// Animate nav items in/out
function navAnimation(direction1, direction2){
    navItems.forEach((item, idx) => {
        item.classList.replace(`slide-${direction1}-${idx+1}`, `slide-${direction2}-${idx+1}`)
    })
}

// Toggle nav items
function toggleNav() {
    // toggle: menu bars open/close
    menuBars.classList.toggle('change')
    // Toggle: menu active
    overlay.classList.toggle('overlay-active')

    if(overlay.classList.contains('overlay-active')) {
        // animate overlay in
        overlay.classList.replace('overlay-slide-left','overlay-slide-right')
        // animate in nav items
        navAnimation('out','in')        
    } else {
        // animate overlay out
        overlay.classList.replace('overlay-slide-right','overlay-slide-left')
        // animate nav items out
        navAnimation('in','out')       
    }
}

// Event Listners
menuBars.addEventListener('click', toggleNav)
navItems.forEach(item => {
    item.addEventListener('click', toggleNav)
})