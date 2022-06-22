
// // code to fetch and diplay images


//API urls
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let myDogBreed = []

document.addEventListener('DOMContentLoaded', ()=>{
   //function to display  dog images    
function displayDogImages(){
    fetch(imgUrl)
    .then(response => response.json())
    .then(myBreeds =>{
        myBreeds.message.forEach(function(image){
            const dogImage = document.createElement('img')
            dogImage.src = image;
        const dogImageContainer = document.getElementById('dog-image-container')
        dogImageContainer.appendChild(dogImage)
            //console.log(dogImageCOntainer)
        })
    })
}
displayDogImages()

//function to display dog breeds(name)
function displayDogBreed(){
    
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(dogBreed =>{
        myDogBreed = Object.keys(dogBreed.message)
        myDogBreed.forEach(function(breed){
            addBreed(breed)
            filterDogBreed()

        })
    })
}
displayDogBreed()
function filterDogBreed() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (e) {
       filterDog(e.target.value)

    });
}
//function that filters the dog according to the letters they start with
function filterDog(text){
    updateBreeds(myDogBreed.filter(breed => breed.startsWith(text)))
}
function updateBreeds(dogs){
    const ul = document.querySelector('#dog-breeds')
    let updateChild = ul.lastElementChild;
    //works with the text that we click on
       while(updateChild){
            ul.removeChild(updateChild);
            updateChild = ul.lastElementChild;
           

       }
    dogs.forEach(dog=>addBreed(dog))
}
function addBreed(breed){
    const ul = document.querySelector('#dog-breeds')
    const li = document.createElement('li')
    li.innerText = breed;
    ul.appendChild(li);
    li.style.cursor = 'pointer'
    li.addEventListener('click', ()=>{
        //add style color to the list of dog breeds
        li.style.color  = 'red'
    })
}
});