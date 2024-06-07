import express from 'express';
import { getAllDataQuery, insertData, getDataQuery, updateDataQuery, deleteDataQuery, deleteAllDataQuery, markAllCompleteQuery } from '../../model/tasks/index.js';

export const router = express.Router();

router.use(express.json());

router.get('/api/tasks', async (req, res) => {
    try {
        const data = await getAllDataQuery();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/api/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getDataQuery(id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/api/tasks', async (req, res) => {
    try {
        const { title, description } = req.body;
        const data = await insertData(title, description);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/api/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, is_completed } = req.body;
        const data = await updateDataQuery(id, title, description, is_completed);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/api/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await deleteDataQuery(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/api/tasks', async (req, res) => {
    try {
        await deleteAllDataQuery();
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/api/tasks/complete', async (req, res) => {
    try {
        await markAllCompleteQuery();
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});