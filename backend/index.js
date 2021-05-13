import { createConnection } from 'typeorm';

const express = require('express');
const cors = require('cors');
const students = require('./models/seed/students');
const resources = require('./resources');
const { PORT = 3000 } = process.env;

const run = async () => {
    const connection = await createConnection();

    const app = express();

    // Allow cross origin requests
    app.use(cors());
    app.options('*', cors());

    app.use(express.json());
    app.use('/public', express.static('resources'));

    /* Application */
    const router = express.Router();
    router.get('/resources', (req, res) => {
        res.json({ resources });
    });

    router.get('/students', async (req, res) => {
        let list = await connection.getRepository('student').find();
        res.json(list);
    });
    router.get('/students/:studentId(\\d+)', async (req, res) => {
        let list = await connection
            .getRepository('student')
            .findOne({ id: req.params.studentId });
        res.json(list);
    });

    router.get('/assignments', async (req, res) => {
        const assignments = await connection
            .getRepository('assignment')
            .find({ relations: ['questions'] });
        res.json(assignments);
    });

    router.get('/classrooms', async (req, res) => {
        let list = await connection.getRepository('class_room').find();
        res.json(list);
    });
    router.get('/classrooms/:classId(\\d+)', async (req, res) => {
        let list = await connection
            .getRepository('class_room')
            .findOne(req.params.classId, {
                relations: ['students', 'assignments'],
            });
        res.json(list);
    });
    router.get('/classrooms/:classId(\\d+)/students', async (req, res) => {
        let list = await connection
            .getRepository('class_room')
            .findOne({ id: req.params.classId, relations: ['students'] });
        res.json(list.students);
    });
    router.get('/classrooms/:classId(\\d+)/assignments', async (req, res) => {
        const classes = await connection
            .getRepository('class_room')
            .findOne({ id: req.params.classId, relations: ['assignments'] });
        res.json(classes.assignments);
    });

    /**
     * POST body to save an assignment
     * The body should look like this
     * {
     *   "name": "My First Assignment",
     *   "date": "1617719851333", - This is a unix time stamp. You can use `new Date().getTime()` to get this
     *   "resources": [2,3],
     *   "students": ["5bd9e9fbecef8d003e003001", "5bd9e9fbecef8d003e003003"]
     * }
     */
    router.post('/assignment', (req, res) => {
        const messages = [];

        if (!req.body.name) messages.push('Please add an assignment name');
        if (!req.body.date) messages.push('Please add an assignment due date');
        if (!req.body.resources)
            messages.push('Please add a least 1 resource for the assignment');
        if (!req.body.students)
            messages.push(
                'Please provide a list of students assigned to the task'
            );

        if (messages.length > 0) return res.status(400).json({ messages });
        return res
            .status(201)
            .json({ message: 'Accepted assignment response successfully' });
    });
    router.post('/asset', (req, res) => {
        const messages = [];

        if (!req.body.name) messages.push('Please add an assignment name');
        if (!req.body.date) messages.push('Please add an assignment due date');
        if (!req.body.resources)
            messages.push('Please add a least 1 resource for the assignment');
        if (!req.body.students)
            messages.push(
                'Please provide a list of students assigned to the task'
            );

        if (messages.length > 0) return res.status(400).json({ messages });
        return res
            .status(201)
            .json({ message: 'Accepted assignment response successfully' });
    });

    app.use('/', router);

    const server = app.listen(PORT, () => {
        const { address, port } = server.address();
        console.log(`Listening: http://${address}:${port}`);
    });
};

run().then(() => {
    console.log('Started server');
});
