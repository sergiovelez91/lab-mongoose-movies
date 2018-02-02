const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity').then(() => console.log("Conectado!"));
const Celebrity = require('../models/Celebrity');

const celebrities = [
    {
        name: 'Carmen de Mairena',
        occupation: 'Farandula',
        catchPhrase:'Coge una ciruela y pa dentro hasta que duela'
        
    },
    {
        name: 'El Cigala',
        occupation: 'Cantante',
        catchPhrase:'Si ya sabes cómo me pongo, ¿pa qué me invitas?'
    },
    {
        name: 'Dinio',
        occupation:'Pornstar',
        catchPhrase:'La noche me confunde'
    }
];

Celebrity.collection.drop();

celebrities.forEach( cel => {
    let celeb  = new Celebrity(cel);
    celeb.save((err, celebrity) =>{
        if(err) {
            throw err;
        }
        console.log(`Celebrity guardada ${celebrity.name}`);
    })
});