document.getElementById('reverseButton').addEventListener('click', function() {
    var input = document.getElementById('inputString').value;
    var reversed = reverseString(input);
    document.getElementById('result').innerText = reversed;
});

document.getElementById('copyButton').addEventListener('click', function() {
    var result = document.getElementById('result').innerText;
    navigator.clipboard.writeText(result).then(function() {
        alert('¡Texto copiado al portapapeles!');
    }, function(err) {
        console.error('Error al intentar copiar el texto: ', err);
    });
});

function reverseString(str) {
    return str.split('').reverse().join('');
}
