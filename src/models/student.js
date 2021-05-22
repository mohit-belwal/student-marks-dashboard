// const validator = require('validator')
const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
        rollNo:{
            type: Number,
            //required: true
        },
        studentName:{
            type: String,
            //required: true,
        },
        marksMaths:{
            type: Number,
            default: 0,
           // required: true,
            validate(value){
                if(value<0) {
                    throw new Error('Marks must be a positive number')
                }}}, 
        marksPhysics:{
            type: Number,
            default: 0,
            //required: true,
            validate(value){
                if(value<0) {
                    throw new Error('Marks must be a positive number')
                }}},
        marksChemistry:{
            type: Number,
            default: 0,
            //required: true,
            validate(value){
                if(value<0) {
                    throw new Error('Marks must be a positive number')
                }}},
        total:{
            type: Number,
            //required: true,
            default: 0},
        percentage:{
            type: String,
            //required: true,
            default: 0}
})

const Student = mongoose.model('Student', studentSchema)

module.exports= Student
