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

document.getElementById('submitButton').addEventListener('click', setGrid, false);


/* 

function makeGrid() {
    var height = Number(document.getElementById('inputHeight').value)
    var width = Number(document.getElementById('inputWidth').value)
    var canvas = document.getElementById('pixelCanvas')
    for (var row = 0; row < height; row++) {
        var newTr = canvas.insertRow(row)
        idNameTr = 'row'.concat(row)
        newTr.setAttribute('id', idNameTr)
        for (var cel = 0; cel < width; cel++) {
            var newTd = canvas.insertCell(cel)
            idNameTd = 'cell'.concat(row, cel)
            newTd.setAttribute('id', idNameTd)
}

*/

