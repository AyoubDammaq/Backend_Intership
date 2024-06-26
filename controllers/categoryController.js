const db = require('../database_config/db');



module.exports.createCategory = async (req, res) => {
    const { categoryName, categoryColor } = req.body;
    const sql = "INSERT INTO category (categoryName, categoryColor) VALUES (?, ?)";

    try {
        await db.query(sql, [categoryName, categoryColor]);
        console.log("Category added successfully");
        res.status(200).send("Category added successfully");
    } catch (error) {
        console.log("Error adding category");
        res.status(500).send(error);
    }
};

module.exports.getAllCategories = async (req, res) => {
    try {
        const [categories] = await db.query("SELECT * FROM category");
        res.status(200).send(categories);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports.getCategoryByID = async (req, res) => {
    try {
        const _id = req.params.id;
        const category = await db.query("SELECT * FROM category WHERE idcategory = ?", [_id]);
        res.status(200).send(category);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports.UpdateCategory = async (req, res) => {
    const _id = req.params.id;
    const { categoryName, categoryColor} = req.body;

    const sql = "UPDATE category SET categoryName = ?, categoryColor = ? WHERE idcategory= ?";
    try {
        await db.query(sql, [ categoryName, categoryColor, _id ]);
        res.status(200).send("Category updated successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports.deleteCategory = async (req, res) => {
    try {
        const _id = req.params.id;
        await db.query("DELETE FROM category where idcategory = ?", [_id]);
        res.status(200).send('Category was deleted successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
