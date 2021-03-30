const School= require('../models/school')


exports.signup=(req, res)=>{
    console.log('req.body', req.body)
    const school = new School(req.body)

    school.save((err, school)=>{
        if(err){
            return res.status(400).json({
                err
            })
        }
        res.json({
            school
        })
    })
};