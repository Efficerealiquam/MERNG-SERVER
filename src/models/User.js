const { Schema, model } = require('mongoose');


const userSchema = new Schema({
      username: String,
      password: String,
      email: { type: String, lowercase: true },
      createdAt: String
});

module.exports = model('User', userSchema);
