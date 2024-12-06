import axios from 'axios';

const API_BASE_URL = 'https://api.escuelajs.co/api/v1/categories';

export const getCategories = () => axios.get(API_BASE_URL);

export const createCategory = (category) => axios.post(API_BASE_URL, category);

export const updateCategory = (id, category) => axios.put(`${API_BASE_URL}/${id}`, category);

export const deleteCategory = (id) => axios.delete(`${API_BASE_URL}/${id}`);