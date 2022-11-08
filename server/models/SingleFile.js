import mongoose from 'mongoose'


const SingleFileSchema = mongoose.Schema({

    fileName: {
        type: String, required: true
    },
    filePath: {
        type: String, required: true
    },
    fileType: {
        type: String, required: true
    },
    fileSize: {
        type: String, required: true
    },



}, { timestamps: true })


export default mongoose.model('singlefile', SingleFileSchema)