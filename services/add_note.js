const db = require('../database_config/db');


async function create (note) {
    const result = await db.query(`insert into notes (title, description, category) 
    values
    ('${note.title}', '${note.description},   '${note.category}')`)


    if(result.affectedRows){
        console.log('Note added successfully')
    }else{
        console.log('Note not added successfully')
    }
}

module.exports = {
    create,
}