import React, { useState, useEffect } from 'react';
import { getCategories, createCategory, updateCategory, deleteCategory } from './services/api';
import CategoryForm from './components/CategoryForm';
import CategoryList from './components/CategoryList';
import { ToastContainer, toast } from 'react-toastify';
import { Container } from 'react-bootstrap';



const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      toast.error('Failed to fetch categories.');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSave = async (category) => {
    try {
      if (selectedCategory) {
        await updateCategory(selectedCategory.id, category);
        toast.success('Actualizado correctamente');
      } else {
        await createCategory(category);
        toast.success('Creado correctamente');
      }
      fetchCategories();
      setSelectedCategory(null);
    } catch (error) {
      toast.error('Fallo al guardar');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      toast.success('Eliminado exitosamente');
      fetchCategories();
    } catch (error) {
      toast.error('Fallo al eliminar');
    }
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container className="mt-5">
      <h1>Categorias CRUD</h1>
      <CategoryForm selectedCategory={selectedCategory} onSave={handleSave} />
      <CategoryList categories={categories} onEdit={handleEdit} onDelete={handleDelete} />
      <ToastContainer />
    </Container>
  );
};

export default App;