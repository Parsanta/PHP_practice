import { useState } from 'react';
import axios from 'axios';
import './Style.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (password.length === 0) {
      alert("Password has been left blank!");
    } else if (email.length === 0) {
      alert("Email has been left blank!");
    } else {
      const url = 'http://localhost/api.php';
      let fData = new FormData();
      fData.append('email', email);
      fData.append('password', password);
      axios.post(url, fData)
        .then(response => alert(response.data))
        .catch(error => alert(error));
    }
  }

  return (
    <>
      <div className='container'>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="button" name="submit" id="submit" value="SEND" onClick={handleSubmit} />
      </div>
    </>
  );
}

export default Login;
