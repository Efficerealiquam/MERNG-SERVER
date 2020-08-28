const mongoose = require('mongoose');


if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(db => console.log('DB is connect'))
        .catch(err => console.log(err));
}
