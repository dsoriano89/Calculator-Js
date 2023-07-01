var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var r = document.getElementById('r')

document.addEventListener('input', function() {
    var result = n1.valueAsNumber + n2.valueAsNumber;
    r.textContent = isNaN(result) ? "" : result;
})

// function soma() {
//     var result = n1.valueAsNumber + n2.valueAsNumber;
//     r.textContent = isNaN(result) ? "" : result;
// }
// document.addEventListener('input', soma);
