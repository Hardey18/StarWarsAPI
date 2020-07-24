function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}
// console.log('Be happy')
// alert('Hello')
function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}

const ul = document.getElementById('characters'); // Get the list where we will place our authors
const url = 'https://swapi.dev/api/people/?results';
var imgOne;

fetch(url)
  .then((resp) => resp.json())   // Transform the data into json
  .then((data) => {
    let im;
    console.log(data);
    let character  = data.results;
    fetch('http://jsonplaceholder.typicode.com/photos') // make a 2nd request and return a promise
    .then(response => response.json())
    .then(json => {
        //let img = json.
       console.log(json)
       
       json.map((par) => (
           //console.log(par),
           im = par
           //console.log(im)
           //imgOne = par.thumbnailUrl
            //par.url
       ))
    }) // Get the resultsreturn characters.map(character => { // Map through the results and for each run the code below
    
    
    character.map((par,index) => {
        let aa = `https://picsum.photos/200/300/?=${index}`;
        let li = createNode('li') //  Create the elements we need
        p1 = createNode('p'),
        p2 = createNode('p'),
        img1 = createNode('img'),
        p1.innerHTML = `${par.name}`, // Make the HTML of our span to be the first and last name of our author
        p2.innerHTML = `${par.height}`,
        img1.src = aa;
        console.log()
         
    append(li,img1),
    append(li, p1),
    append(li, p2),
    append(ul, li)})

    
    //append(li, img); // Append all our elements
    
  })
     
  

    
    
  //})

//   });
