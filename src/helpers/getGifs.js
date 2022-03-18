    //peticion http
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/trending?q=$={ encodeURI(category) }&limit=10&api_key=TI7lUxE68MW4qzbyUeZGKK5EaeszaX5c`;
    const resp = await fetch( url );
    const { data } = await resp.json(); //tiene un "arreglo" de 10 componentes con la informacion de los gifs
    //me interesas la data/info que viene adentro de la data
    
    
    const gifs = data.map( img => { 
        return { //esto va a transformar cada uno de los elementos que estan en img/arreglo y retorna un objeto con la info que me interesa
             id: img.id, //aca se podria usar desestructuracion pero lo complicaria 
            title: img.title,
            url: img.images?.downsized_medium.url, //el signo pregunta es para preguntar si vienen las imgs entonces que lo utilice al downsized 
        }
     })
    
    return gifs ;
    
}