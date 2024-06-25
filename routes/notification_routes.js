const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');


router.post('/notification/add', notificationController.addNotification);

router.get('/notifications', notificationController.getNotifications);

router.get('/notification/:id', notificationController.getNotificationById);

router.put('/notification/edit/:id', notificationController.updateNotification);

router.delete('/notification/delete/:id', notificationController.removeNotification);

module.exports = router;