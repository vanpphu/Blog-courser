const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function routes(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);

    // app.get('/', (req, res) => {        //req: chứa các thông tin ứng dụng gửi lên url
    //     res.render('home');             // res: trả về dữ liệu
    //  })                                  // Get: Gửi dữ liệu lên sever rồi trả dữ liệu về client
    //Post:Gửi dữ liệu lên sever rồi,yêu cầu server lưu lại dữ liệu tạo mới dữ liệu
    //  app.get('/search', (req, res) => {  //Put,path: Chỉnh sửa dữ liệu
    //    // console.log(req.query)
    //    res.render('search');
    //  })

    //  app.post('/search', (req, res) => {
    //    console.log(req.body)
    //    res.send('');
    //  })

    // app.post('/search', (req, res) => {
    //   res.render('search');
    // })
}

module.exports = routes;
