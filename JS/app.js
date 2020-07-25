// Create the type of element you pass in the parameters
let createNode = element => document.createElement(element);

// Append the second parameter(element) to the first one
let append = (parent, el) => parent.appendChild(el); 

// Get the list where we will place our authors
const div = document.getElementById('characters');
let aside = document.querySelector('.aside');
let modalContent = document.querySelector('.modal-content');
const url = 'https://swapi.dev/api/people/?results';

class User {
  constructor(par) {
    this.par = par
  }

  get viewUser() {
    const {
      name,
      gender,
      height
    } = this.par

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
    let character  = data.results;
    
    character.map((par,index) => {
        let aa = `https://picsum.photos/200/300/?=${index}`;
        let user = new User(par);
        //  Create the elements we need
        let any = user.viewUser
        let section = createNode('section')
        p1 = createNode('h3'),
        cl = createNode('span'),
        img1 = createNode('img'),
        // Make the HTML of our span to be the first and last name of our author
        p1.innerHTML += `${par.name}`,
        // p2.innerHTML += `${par.height}`,
        img1.src = aa;
        // p3.innerHTML += user.name

        // Append all our elements
        append(section, img1),
        append(section, p1),
        append(div, section)

        p1.addEventListener("click", () => {
          aside.style.display = "block";
          modalContent.innerHTML = `
            <div class="char-container">
              <p>${any.name}</p>
              <p>${any.gender}</p>
              <p>${any.height}</p>
              <p class="close">&times;</p>  
            <div>
          `
          let only = document.querySelector('.close');
          only.onclick = () => {
            aside.style.display = "none";
          } 
        });
    })
  
  }) 

  // Get the modal
// var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// var close = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
// div.onclick = function() {
//   aside.style.display = "block";
//   close.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// only.onclick = () => {
//   aside.style.display = "none";
// } 



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == aside) {
    aside.style.display = "none";
  }
}