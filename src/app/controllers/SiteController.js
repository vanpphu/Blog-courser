const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[GET]/
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch((err) => {
                next(err);
                // res.status(400).json({ error: 'ERROR..!!!' });
            });
        // Course.find({},function(err,courses){
        //     if(!err) res.json(courses);
        //     res.status(400).json({error: 'ERROR!!'});              //Code này bị lỗi
        // });
    }
    //[GET]/search
    search(req, res) {
        // console.log(req.query)
        res.render('search');
    }
}
module.exports = new SiteController();
