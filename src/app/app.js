import express from 'express';
import hbs from 'hbs';
import expressHbs from 'express-handlebars';
import { mainRouter } from './routes/mainRouter.js';
import { militaryRouter } from './routes/militaryRouter.js';
import connect from '../mongo/connect.js';
import fs from 'fs';

connect('mongodb+srv://admin:8XHF3yA9JzJln5La@cluster0.mfmkkup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


const app = express();


// hbs.registerHelper('dynamicPartial', );


app.engine('hbs', expressHbs.engine(
    {
        layoutsDir: './src/web/views/layouts',
        defaultLayout: 'layout',
        extname: 'hbs',
        partialsDir: './src/web/views/partials',
        helpers: {
            dynamicPartial: function(articleId, options) {
                const filePath = `./src/web/views/partials/articles/article${articleId}.hbs`;
                try {
                    const template = fs.readFileSync(filePath, 'utf8');
                    const partial = hbs.handlebars.compile(template);
                    return new hbs.handlebars.SafeString(partial(options.hash));
                } catch (err) {
                    return `<p>Partial ${articleId} not found.</p>`;
                }
            }
        }
    }
));
app.set('view engine', 'hbs');
app.set('views', './src/web/views');


app.use(express.static('./src/web/static'));
app.use(express.urlencoded({ extended: true }));


app.use('/', mainRouter);
app.use('/military', militaryRouter);



app.listen(8080, () => {
    console.log('MVC Server started on port 3000!');
});