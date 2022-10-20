let header = document.querySelector('#page-header')
header.style.textAlign = "left"
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '150px';
    dogImages[i].style.transform = 'rotate(180deg)';
}
let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = 'left'
}
let footerText = document.querySelector('.footer')
footerText.style.color = 'red'
let generalText = document.querySelectorAll('.column')
for(let i = 0; i < generalText.length; i++){
    generalText[i].style.backgroundColor = 'black';
    generalText[i].style.color = 'white'
}







