let comments = document.querySelector('.comments')
let form = document.querySelector('.form')
let username = document.querySelector('#name')
let comment = document.querySelector('#comment')

function formatDate(date, format) {
    
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    var today = moment().format('D MMMM YYYY, hh:mma');
    comments.innerHTML += '<div class="comment"><div class="title"><p class="name">'+username.value+'</p><p class="date">~ '+today+'</p></div><p>'+comment.value+'</p></div>'
    form.reset()
})
