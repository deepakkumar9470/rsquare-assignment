import mongoose from 'mongoose'


const UserSchema = mongoose.Schema({

    firstName : {
        type  : String, trim : true
    },
    lastName : {
        type  : String, trim : true
    },
    email : {
        type  : String, trim : true
    },

    phone : {
        type  : Number, trim : true
    },
    verified:  {
        type:  Boolean, default : false
    }
  
},{timestamps:  true})


export default mongoose.model('user',UserSchema )