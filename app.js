// Searching for the gif
async function searchGif(e) {
    e.preventDefault();
    // Storing API key
    const api_key = 'OtgkGA48W8L1cv68kvQ50ntKZ8PU58oW';

    // Storing baseURL used for interacting with the Giphy API
    const baseURL = 'https://api.giphy.com/v1/gifs/search';

    // Storing the search query given by the user
    const q = $('#searchGifs')[0].value;

    // Store the gif url
    const gif = await getGif(api_key, q, baseURL);

    addToFeed(gif);

    // Resetting the input value
    $('#searchGifs')[0].value = '';
}

// GET request to Giphy
async function getGif(api_key, q, baseURL) {
    const res = await axios.get(baseURL, { params: { api_key, q } });
    console.log(res);
    const i = randomIndex();
    return res.data.data[i].images.original.url;
}

// Add the gif to the feed
function addToFeed(url) {
    $(`<img class="col-12 col-md-6 col-lg-4 my-4 gifs" src="${url}">`).appendTo('#feed');
}

// Create random index
function randomIndex() {
    return Math.floor(Math.random() * 51);
}

// Delete all gifs
function deleteGifs() {
    $('.gifs').remove();
}

// Add submit listener on the form
$('#gif-form').on('submit', searchGif);

// Add click listener to delete button
$('#delete-btn').on('click', deleteGifs);