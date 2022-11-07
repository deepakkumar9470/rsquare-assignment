import mongoose from 'mongoose'


const FileSchema = mongoose.Schema({

    title : {
        type  : String
    },
    files : [Object]
    
  
},{timestamps:  true})


export default mongoose.model('multiplefile',FileSchema )