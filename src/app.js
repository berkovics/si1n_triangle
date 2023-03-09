let baseInput = document.querySelector('#base')
let heightInput = document.querySelector('#height')
let areaInput = document.querySelector('#area')
let calcButton = document.querySelector('#calcButton')

//console.log(baseInput, heightInput, areaInput, calcButton);

calcButton.addEventListener('click', () => {
    workInput()
});

function workInput() {
    let base = Number(baseInput.value)
    let height = Number(heightInput.value)
    let area = calcTriangle(base, height)
    areaInput.value = area
    console.log(area)
}

function calcTriangle(base, height) {
    return base * height / 2
}