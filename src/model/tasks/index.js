import { query } from '../../core/database-manager/postgres-service.js';

export const getAllDataQuery = async () => {
    return await query('SELECT * FROM public.tasks');
};

export const insertData = async (title, description) => {
    return await query('INSERT INTO public.tasks (title, description) VALUES ($1, $2) RETURNING *', [title, description]);
};

export const getDataQuery = async (id) => {
    return await query('SELECT * FROM public.tasks WHERE id = $1', [id]);
};

export const updateDataQuery = async (id, title, description, is_completed) => {
    return await query('UPDATE public.tasks SET title = $1, description = $2, is_completed = $3 WHERE id = $4 RETURNING *', [title, description, is_completed, id]);
};

export const deleteDataQuery = async (id) => {
    return await query('DELETE FROM public.tasks WHERE id = $1', [id]);
};

export const deleteAllDataQuery = async () => {
    return await query('DELETE FROM public.tasks');
};

export const markAllCompleteQuery = async () => {
    return await query('UPDATE public.tasks SET is_completed = true');
};