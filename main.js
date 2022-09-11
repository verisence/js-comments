let comments = document.querySelector('.comments')
let form = document.querySelector('.form')
let username = document.querySelector('#name')
let comment = document.querySelector('#comment')

addEventListener('DOMContentLoaded', (event) => {

});


form.addEventListener('submit', (event) => {
    event.preventDefault()
    var today = moment().format('D MMMM YYYY, hh:mma');
    comments.innerHTML += '<div class="comment"><div class="title"><p class="name">' + username.value + '</p><p class="date">~ ' + today + '</p></div><p>' + comment.value + '</p></div>'
    form.reset()
})






// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function () {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}