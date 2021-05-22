const express = require('express')
const Student = require('../models/student')
const router = new express.Router()


// Post marks of a student 
router.post('/marks', async (req, res)=>{
    const student = new Student({
        ...req.body
    })

    try {
        await student.save()
        res.status(201).send(student)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
})

// Get leaderboard 
// GET /leaderboard/?limit=2&page=2
router.get('/leaderboard', async (req, res)=>{
    const {sortBy='total', limit, page=1} = req.query

    try{
        const students = await Student.find()
        .limit(limit * 1)
        .skip((page - 1) * limit).sort(sortBy)
        .exec();

        if(sortBy!=='rollNo'&&sortBy!=='studentName')
            students.reverse();

        // get total documents in the Student collection 
        const count = await Student.countDocuments();
        
        // return response with students, total pages, and current page
        res.send({
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            students
        });
    } catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})

module.exports = router