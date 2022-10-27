const container = document.querySelector('.container');
const count = document.getElementById('count');
const amout = document.getElementById('amout');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)')

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        calculateTotal()
    }
});


select.addEventListener('change', function (e) {
    calculateTotal()

});

function calculateTotal() {

    const selectedSeats = container.querySelectorAll('.seat.selected')

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function (seat) {
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function (seat) {
        seatsArr.push(seat);
    });

    // [1,3,5]
    let selectedSeatIndexs = selectedSeatsArr.map(function (seat) {
        return seatsArr.indexOf(seat);
    });

    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amout.innerText = selectedSeatCount * select.value;

}