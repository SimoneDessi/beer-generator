const randomBeer = document.querySelector('#random-beer')
const descriptionBeer = document.querySelector('#description')
const button = document.querySelector('#beer-button')
const randomImage = document.querySelector('#beer-image')

const getData  = () => {
  fetch('https://api.punkapi.com/v2/beers/random')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    const name = data[0].name
    const description = data[0].description
    const image = data[0].image_url
    
  randomBeer.textContent = name
  descriptionBeer.textContent = description
  randomImage.setAttribute('src', image)

  })
}
getData()
button.addEventListener('click', getData)
