import mongoose from 'mongoose'


const UserSchema = mongoose.Schema({

    firstName: {
        type: String, trim: true, required: true
    },
    lastName: {
        type: String, trim: true, required: true
    },
    email: {
        type: String, required: true
    },

    phone: {
        type: Number, trim: true, required: true
    },
    password: {
        type: String, required: true
    },
    verified: {
        type: Boolean, default: false
    }

}, { timestamps: true })


export default mongoose.model('user', UserSchema)