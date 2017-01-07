var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title:{
        type: String,
        required: true,
        unqiue: true
    },

    text:{
        type: String,
        required: true
    },

    author: {
        type: Schema.Types.ObjectId, 
        required: true,
        ref: 'user'
    },

    categories: [{
        type: Schema.Types.ObjectId, 
        ref: 'category'
    }]
});

var Post = mongoose.model('post', postSchema);
Post.find({title: 'whatever'}, function(err, doc){

});

module.exports = mongoose.model('post', postSchema);