const db = require('../database_config/db');

module.exports.addTask = async (req, res) => {
    const { description, submitDate, userId } = req.body;
    const sql = "INSERT INTO task (description, submitDate, userId) VALUES (?, ?, ?)";
    
    try {
            await db.query(sql, [description, submitDate, userId]);
            res.status(200).send("Task added successfully");
    } catch (error) {
        return res.status(500).send(error);
    }
};

module.exports.getTasks = async (req, res) => {
    try {
        const [tasks] = await db.query("SELECT * FROM task");
        res.status(200).send(tasks);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports.getTaskById = async (req, res) => {
    try {
        const _id = req.params.id;
        const task = await db.query("SELECT * FROM task WHERE idTask = ?", [_id]);
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports.updatedTask = async (req, res) => {
    const _id = req.params.id;
    const { description, submitDate} = req.body;

    const sql = "UPDATE task SET description = ?, submitDate = ? WHERE idTask= ?";
    try {
        await db.query(sql, [ description, submitDate, _id ]);
        res.status(200).send("Task updated successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports.removeTask = async (req, res) => {
    try {
        const _id = req.params.id;
        await db.query("DELETE FROM task where idTask = ?", [_id]);
        res.status(200).send('Task was deleted successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};


