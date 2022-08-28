// Fetch: The fetch() method in JavaScript is used to request to the server and load the information on the webpages. The request can be of any APIs that return the data of the format JSON or XML. This method returns a promise. 




// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     // .json is not similar but close to json.parse(stringied obj to regular obj)
//     .then(json => console.log(json))


function loadData() {

    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}