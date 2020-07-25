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
        // console.log(user);
        //  Create the elements we need
        let any = user.viewUser
        let section = createNode('section')
        p1 = createNode('h3'),
        cl = createNode('span'),
        img1 = createNode('img')
        // Make the HTML of our span to be the first and last name of our author
        p1.innerHTML = `${par.name}`,
        // p2.innerHTML += `${par.height}`,
        img1.src = aa;
        // p3.innerHTML += user.name

        // Append all our elements
        append(section, img1),
        append(section, p1),
        append(div, section)

        section.addEventListener("click", () => {
          aside.style.display = "block";
          modalContent.innerHTML = `
            <div class="char-container">
              <div>
                <img src="${aa}" />
              </div>
              <div>
                <p class="char-name">Name: ${any.name}</p>
                <p>Gender: ${any.gender}</p>
                <p>Height: ${any.height}</p>
                <p class="close">&times;</p>
              </div>  
            <div>
          `
          let only = document.querySelector('.close');
          only.onclick = () => {
            aside.style.display = "none";
          } 
        });
    })
  
  }) 

window.onclick = function(event) {
  if (event.target == aside) {
    aside.style.display = "none";
  }
}