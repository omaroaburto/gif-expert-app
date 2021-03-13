 const getGif = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?limit=12&q=${encodeURI(category)}&api_key=9nh9gUaGYIGL1KI6ogB963BZJ1iWR6gS`;
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