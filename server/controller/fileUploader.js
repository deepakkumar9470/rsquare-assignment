import MultipleFile from '../models/FileUpload.js'
import SingleFile from '../models/SingleFile.js';

const fileFormatter = (bytes,decimal) =>{
   if(bytes ===0){
    return '0 Bytes'
   }

   const dm = decimal || 2;
   const size = ['Bytes', 'KB', 'MB', 'GB']
   const index = Math.floor(Math.log(bytes) / Math.log(1000))
   return parseFloat((bytes/ Math.pow(1000,index)).toFixed(dm)) + '-' + size[index] 
}


export const singleFile =async  (req,res)=>{

    try {
         const newfile = new SingleFile({
            fileName:req.file.originalname,
            filePath:req.file.path,
            fileType:req.file.mimetype,
            fileSize: fileFormatter(req.file.size, 2)
         })
        
       
       await newfile.save()

        
        res.status(201).json('Files uploaded Successfully..')

    } catch (error) {
        res.status(400).json(error)
    }
} 
export const multipleFile =async  (req,res)=>{

    try {
        let fileArrays =[]

        req.files.forEach((element)=>{
            const file = {
            fileName:element.originalname,
            filePath:element.path,
            fileType:element.mimetype,
            fileSize: fileFormatter(element.size, 2)
            }

            fileArrays.push(file);
        })

        const newFiles = new MultipleFile({
            title : req.body.title,
            files : fileArrays

        })

        await newFiles.save()
        res.status(201).json('Files uploaded Successfully..')

    } catch (error) {
        res.status(400).json(error)
    }
} 

export const getMultipleFiles = async  (req,res) =>{
   try {
      const getFiles = await MultipleFile.find()
      res.status(200).json(getFiles)
   } catch (error) {
    res.status(400).json(error)

   }
}