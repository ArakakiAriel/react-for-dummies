const user = {
    name: "Kenji",
    age: 27,
    user_type: "admin"
}

const returnUser = ({name, age, user_type = "client"}) => { //Si ven, cuando se asigna un valor a una variable se lo asignará por defecto si no viene en el objeto que se le pasa a la función
    console.log(name, age, user_type);
};

const api_key = 'wKeZ3oG4mz7cXDaH1EGAfcUtGygT5F68';
const api_call = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

api_call
    .then( resp => resp.json())
    .then(
        ({data}) => {
            console.log(data)
            const {url} = data.images.original;
            const img = document.createElement('img');
            img.src = url;

            document.body.append(img);
        }
    ).catch(console.warn);

returnUser(user);
returnUser({name: "Pepe", age: 12});