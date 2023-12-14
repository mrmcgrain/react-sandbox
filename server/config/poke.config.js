const mongoose = require('mongoose');

// const db = 'reminders';
const db = 'pokemon';

mongoose.connect(`mongodb://127.0.0.1/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})  .then(() => console.log(`Established connection with DB - ${db} `))
    .catch(err => console.log(err))