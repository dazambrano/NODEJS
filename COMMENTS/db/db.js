'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://developer:developer@cluster0.ilpr1.mongodb.net/sample_mflix?retryWrites=true&w=majority');
module.exports = mongoose;