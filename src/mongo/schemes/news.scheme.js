import mongoose from "mongoose";


const Schema = mongoose.Schema;

const schema = new Schema(
    {
        article: { type: String }
    }
);


const News = mongoose.model("News", schema);


export {
    News
}