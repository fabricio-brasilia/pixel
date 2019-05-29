// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



function setGrid(e) {
    e.preventDefault()
    var canvas = document.getElementById('pixelCanvas')
    var height = Number(document.getElementById('inputHeight').value)
    var width = Number(document.getElementById('inputWidth').value)
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild)
    }
    for (var row = 0; row < height; row++) {
        var newTr = document.createElement('tr')
        idNameTr = 'tr'.concat(row)
        newTr.setAttribute('id', idNameTr)
        canvas.appendChild(newTr)
        for (var col = 0; col < width; col++) {
            var newTd = document.createElement('td')
            idNameTd = 'td'.concat(row, col)
            newTd.setAttribute('id', idNameTd)
            thisTr = document.getElementById(idNameTr)
            thisTr.appendChild(newTd)
        }
    }
}

function changeColor(e) {
    e.preventDefault() 
    var color = document.getElementById('colorPicker').value
    if (e.target.nodeName === 'TD') {
        e.target.bgColor = color
    }
}

document.getElementById('submitButton').addEventListener('click', setGrid, false);
document.getElementById('pixelCanvas').addEventListener('click', changeColor, false);

/*
document.querySelector('#content').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'SPAN') {  // ← verifies target is desired element
        console.log('A span was clicked with text ' + evt.target.textContent);
    }
});
*/