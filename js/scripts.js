// const tabs = document.querySelectorAll('.tab')
// const panels = document.querySelectorAll('.panel')
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')




// Hamburger button listener
btn.addEventListener('click', navToggle)
menu.addEventListener('click', navToggle)

function navToggle() {
    menu.classList.toggle('hidden')
    btn.classList.toggle('open')

    // if (btn.classList.contains('open')) {
    //     logo.setAttribute('src', 'images/logo-bookmark-footer.svg')
    // }
    // else {
    //     logo.setAttribute('src', 'images/logo-bookmark.svg')
    // }

}


// tabs.forEach((tab) => tab.addEventListener('click', onTabClick))


// // Deactivate all tabs
// function onTabClick(e) {
//     tabs.forEach((tab) => {
//         tab.children[0].classList.remove('border-softRed', 'border-b-4', 'md:border-b-0')

//     })
//     // Hide all pnels
//     panels.forEach((panel) => panel.classList.add('hidden'))

//     // Activat a new tab and panel base on target
//     e.target.classList.add('border-softRed', 'border-b-4')
//     const classString = e.target.getAttribute('data-target')
//     document.getElementById('panels')
//         .getElementsByClassName(classString)[0]
//         .classList.remove('hidden')
// }



