import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const CategoryForm = ({ selectedCategory, onSave }) => {
  const [formData, setFormData] = useState({ name: '', image: '' });

  useEffect(() => {
    if (selectedCategory) {
      setFormData(selectedCategory);
    } else {
      setFormData({ name: '', image: '' });
    }
  }, [selectedCategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ingresar nombre"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Imagen URL</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Ingresar imagen URL"
          required
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        {selectedCategory ? 'Actualizar' : 'Crear'}
      </Button>
    </Form>
  );
};

export default CategoryForm;
