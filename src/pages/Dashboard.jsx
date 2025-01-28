import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Alert, Button, Card, Badge } from 'react-bootstrap';
import UserList from '../components/UserList';
import { fetchUsers, deleteUser } from '../api';

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setIsLoading(true);
      const data = await fetchUsers();
      setUsers(data);
      setError('');
    } catch (err) {
      setError('Failed to load users');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (user) => {
    navigate(`/edit-user/${user.id}`, { state: { user } });
  };

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
      setError('');
    } catch (err) {
      setError('Failed to delete user');
    } finally {
      setIsLoading(false);
    }
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="dashboard">
      <Card className="dashboard-header mb-4">
        <Card.Body>
          <Row className="align-items-center">
            <Col>
              <h1 className="mb-0">User Management Dashboard</h1>
              <p className="text-muted mb-0">
                Manage your users efficiently
              </p>
            </Col>
            <Col xs="auto">
              <Button 
                variant="primary"
                onClick={() => navigate('/add-user')}
                className="d-flex align-items-center"
              >
                <i className="bi bi-plus-circle me-2"></i>
                Add New User
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="dashboard-stat">
            <Card.Body>
              <h3 className="mb-2">Total Users</h3>
              <div className="d-flex align-items-center">
                <h2 className="mb-0">{users.length}</h2>
                <Badge bg="info" className="ms-2">Active</Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {error && (
        <Alert variant="danger" className="error-alert">
          <i className="bi bi-exclamation-triangle me-2"></i>
          {error}
        </Alert>
      )}

      <UserList
        users={currentUsers}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isLoading={isLoading}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Dashboard;
