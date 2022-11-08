import mongoose from 'mongoose'


const connect = async (req, res) => {

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to Mongodb..')

    } catch (error) {
        console.log(error)
    }

}

export default connect