import mongoose from "mongoose";

// admin : 8XHF3yA9JzJln5La
// mongodb+srv://admin:8XHF3yA9JzJln5La@cluster0.mfmkkup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
async function connect(url) {
    try {
        if(url) {
            await mongoose.connect(url);
            console.log(`Succesfully connected to MongoDB(url: ${url})`);
        }
        else {
            throw new Error("Empty \"url\" parameter!");
        }
    }
    catch(err) {
        console.log('Mongo connect function err :>> ', err.stack);
    }
}


export default connect;