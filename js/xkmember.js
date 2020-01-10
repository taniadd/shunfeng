window.addEventListener('load', function () {
    var person = document.querySelector('#person');
    var bag = document.querySelector('#bag');
    var persons = document.querySelector('#persons');
    var bags = document.querySelector('#bags');
    // var itme = document.querySelector('.itme');
    var flag = true;
    var flags = 1;
    person.addEventListener('click', function () {
        dot();
    })

    persons.addEventListener('click', function () {
        dots();
    })

    function dot() {
        if (flag == true) {
            bag.style.display = 'block'
            flag = false
        } else {
            bag.style.display = 'none'
            flag = true
        }
    }

    function dots() {
        if (flags == 1) {

            bags.style.display = 'block'
            flags = 2

        } else {

            bags.style.display = 'none'
            flags= 1

        }
    }
})