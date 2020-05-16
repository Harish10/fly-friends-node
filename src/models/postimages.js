import Mongoose from 'mongoose'
import validator from 'validator'
var Schema = Mongoose.Schema;

var PostImagesSchema = new Schema({
    postId: {
        ref: 'Posts',
        type: Schema.Types.ObjectId
    },
    postImage: {
        type: String,
        max: 255
    }
});

var PostImages = "PostImages"
export default Mongoose.model(PostImages, PostImagesSchema);