 const getGif = async (category) =>{
    const API_KEY ='9nh9gUaGYIGL1KI6ogB963BZJ1iWR6gS'; // agrega tu apikey de giphy
    const url = `https://api.giphy.com/v1/gifs/search?limit=12&q=${encodeURI(category)}&api_key=${API_KEY}`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gif = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    }); 
    return gif;
} 

export default getGif
