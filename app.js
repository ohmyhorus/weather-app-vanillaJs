window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition (position =>{
          long = position.coords.longitude;
          lat = position.coords.latitude;
          //mettere poi qui const api = link long e latt
        });

        fetch(api)
          .then(response =>{
            return response.json();
          })
          .then(data=>{
            console.log(data);
          })

    }else{
        h1.textContent = "hey this is not working!enable your gps"
    }

});