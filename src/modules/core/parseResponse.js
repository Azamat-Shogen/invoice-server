import bodyParser from 'body-parser';

export default function parseHandler(app){
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.use(bodyParser.json());
}