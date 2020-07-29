// Create the type of element you pass in the parameters
let createNode = element => document.createElement(element);

// Append the second parameter(element) to the first one
let append = (parent, el) => parent.appendChild(el); 

const div = document.getElementById('characters');
let aside = document.querySelector('.aside');
let modalContent = document.querySelector('.modal-content');

const url = 'https://swapi.dev/api/people/?results';

// Create the character Class
class User {
  constructor(character) {
    this.character = character
  }
  // to get certain properties for each character
  get viewUser() {
    const {
      name,
      gender,
      height
    } = this.character

    return {
      name,
      gender,
      height
    }
  }

}

fetch(url)
// Transform the data into json
  .then((resp) => resp.json())
  .then((data) => {
    let characters  = data.results;
    
    characters.map((character,index) => {
        let image = `https://picsum.photos/200/300/?=${index}`;
        let user = new User(character);
        
        //  Create the elements we need
        let any = user.viewUser
        let section = createNode('section')
        characterName = createNode('h3'),
        img1 = createNode('img')

        // Make the HTML of the page to be First Name and Image
        characterName.innerHTML = `${character.name}`,
        img1.src = image;

        // Append all elements on the page
        append(section, img1),
        append(section, characterName),
        append(div, section)

        // Append the div elements of Star Wars Character individual details into the modal
        section.addEventListener("click", () => {
          aside.style.display = "block";
          modalContent.innerHTML = `
            <div class="char-container">
              <div>
                <img src="${image}" />
              </div>
              <div>
                <p class="char-name">Name: <strong>${any.name}</strong></p>
                <p>Gender: <strong>${any.gender}</strong></p>
                <p>Height: <strong>${any.height}</strong></p>
                <p class="close">&times;</p>
              </div>  
            <div>
          `
          let only = document.querySelector('.close');

          // Close button function
          only.onclick = () => {
            aside.style.display = "none";
          } 
        });
    })
  
  }) 

// On clicking outside the modal, it should also close 
window.onclick = function(event) {
  if (event.target == aside) {
    aside.style.display = "none";
  }
}


