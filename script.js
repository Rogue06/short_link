let error = document.querySelector('.error_message');
let longLink = document.querySelector('.long_link');
let short = document.querySelector('.result');

// 
function shortLinkFunct(){
    // Check input
    if(!longLink.value == ""){
        //vider l'error
        error.innerHTML = "";

        //connection API
        let url = `https://api-ssl.bitly.com/v4/shorten?url=$(longLink.value)`;
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
    } else {
        // Error
        error.innerHTML = "Please fill out the field!"
    }
}