const mainController = {};


mainController.home = async (req, res) => {
    try {
        res.render('home');
    } catch (error) {
        console.log('error GET / :>> ', error.stack);
        res.sendStatus(400);
    }
}; 


mainController.about = async (req, res) => {
    try {
        res.render('about_us');
    } catch (error) {
        console.log('error GET /about_us :>> ', error.stack);
        res.sendStatus(400);
    }
}; 


mainController.news = async (req, res) => {
    try {
        res.render('news');
    } catch (error) {
        console.log('error GET /news :>> ', error.stack);
        res.sendStatus(400);
    }
}; 


mainController.article = async (req, res) => {
    try {
        const articleId = req.params.id;
        console.log('articleId :>> ', articleId);

        res.render('article', {
            id: articleId
        });
    } catch (error) {
        console.log('error GET /news :>> ', error.stack);
        res.sendStatus(400);
    }
}; 


export {
    mainController
};