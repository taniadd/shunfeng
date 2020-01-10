window.addEventListener("load", function() {
    var cas = document.querySelector('.case_1');
    var year = document.getElementById("year");
    var cass = document.querySelector('.case_2');
    var yearr = document.getElementById("yearr");
    cas.addEventListener('mouseover', function() {
        year.style.display = 'block';
    });
    cas.addEventListener('mouseout',function(){
        year.style.display = 'none';
    });

    cass.addEventListener('mouseover', function() {
        yearr.style.display = 'block';
    });
    cass.addEventListener('mouseout',function(){
        yearr.style.display = 'none';
    });
})