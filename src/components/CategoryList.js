import React from 'react';
import { Table, Button } from 'react-bootstrap';

const CategoryList = ({ categories, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <tr key={category.id}>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td>
              <img src={category.image} alt={category.name} width="50" />
            </td>
            <td>
              <Button variant="warning" onClick={() => onEdit(category)} className="me-2">
                Edit
              </Button>
              <Button variant="danger" onClick={() => onDelete(category.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CategoryList;
