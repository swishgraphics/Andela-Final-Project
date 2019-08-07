import express from 'express';

import RequestController from '../controllers/control';

const router = express.Router();

// get all todos
router.get('/api/requests', RequestController.getAllRequests);

// get todos by id
router.get('/api/requests/:id', RequestController.getRequestById);

// create new todo
router.post('/api/requests', RequestController.postRequest);

// update request
router.put('/api/requests/:id', RequestController.updateRequest);

// Delete Todo
router.delete('/api/requests/:id', RequestController.deleteRequest);

export default router;
