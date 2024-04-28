import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import '../css/login.css';

const fields = {
  username: {
    type: 'text',
    required: 'Missing username.',
  },
  password: {
    type: 'password',
    required: 'Missing password.',
  },
};

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // TEMPORARY submit function
    // Just to verify that fields are being passed properly.
    // Simulate API call with setTimeout.
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      setLoading(false);
      navigate('/home');
    }, 2000);
  };
  return (
    <div className="login-section">
      <div className="login-form">
        <div className="login-logo">
          <img width="100" height="100" src="https://img.icons8.com/clouds/100/journal.png" alt="journal"/>
        </div>
        <Form fields={fields} onSubmit={onSubmit} onSubmitAction="Log In" loading={loading}/>
      </div>
    </div>
  );
}

export default Login;
