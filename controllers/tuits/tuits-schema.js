import mongoose from 'mongoose';

const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  topic: String,
  title: String,
  username: String,
  handle: String,
  time: String,
  image: String,
  replies: Number,
  retuits: Number,
  disliked: Boolean,
  dislikes: Number
}, {collection: 'tuits'});
export default schema;