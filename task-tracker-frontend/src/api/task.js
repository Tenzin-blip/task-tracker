const API_URL = 'https://task-tracker-4hn8.onrender.com/api/tasks';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

export const fetchTasks = async () => {
  const response = await fetch(API_URL, {
    headers: getAuthHeader(),
  });
  return await response.json();
};

export const addTask = async (text) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: getAuthHeader(),
    body: JSON.stringify({ "title":text }),
  });
  return await response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: getAuthHeader(),
  });
  return await response.json();
};

// Google API call to authenticate user by sending Google token to backend
export const googleLogin = async (googleToken) => {
  const response = await fetch('https://task-tracker-4hn8.onrender.com/api/auth/google', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: googleToken }),
  });
  if (!response.ok) {
    throw new Error('Google auth failed');
  }
  return await response.json();
};
