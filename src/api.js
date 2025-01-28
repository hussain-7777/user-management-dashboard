// API functions for user management
const BASE_URL = 'http://localhost:3001'; // Adjust this URL according to your backend server

export const createUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create user');
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update user');
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }
};

export const getUser = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
};

export const fetchUsers = getAllUsers;

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete user');
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};
