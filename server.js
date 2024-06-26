const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

const note_routes = require('./routes/note_routes');
const user_routes = require('./routes/user_routes');
const task_routes = require('./routes/task_routes');
const category_routes = require('./routes/category_routes');
const sharedNote_routes = require('./routes/sharedNote_routes');
const notification_routes = require('./routes/notification_routes');

app.use(bodyParser.urlencoded({ limit: '5000mb' }));
app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(note_routes);
app.use(user_routes);
app.use(task_routes);
app.use(category_routes);
app.use(sharedNote_routes);
app.use(notification_routes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


