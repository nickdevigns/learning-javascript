// Start writing JavaScript here!
const button = document.querySelector('button')
const body = document.body

button.addEventListener('click', evt => {
    // console.log("Push the screen")
    // if (body.classList.contains('offsite-is-open')) {
    //     body.classList.remove('offsite-is-open')
    // } else {
    //     body.classList.add('offsite-is-open')
    // }
    // body.classList.toggle('offsite-is-open')

})

const button2 = document.querySelector('.container button')
const body2 = document.querySelector('body')

button2.addEventListener('click', evt => {
    console.log("Push the screen")
    // body.classList.add('offsite-is-open')
    // if (body2.classList.contains('offsite-is-open')) {
    //     body2.classList.remove('offsite-is-open')
    // } else {
    //     body2.classList.add('offsite-is-open')
    // }
    body2.classList.toggle('offsite-is-open')
})