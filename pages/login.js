import Layout from "../components/layout";
import Link from "next/link";
import { useState } from "react";
import cookie from 'js-cookie';
import Axios from "axios";
import { useRouter } from 'next/router';

const Index = () => {
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const getToken = cookie.get('token');
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await Axios.post('http://localhost:3000/api/login', {
      name,
      password
    })
    if(res.data.statusCode === 200) {
      await cookie.set('token', res.data.token);
      router.push('/profile');
    }
  }
  
  const onChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'name':
        setName(value)
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }
  return(
    <Layout>
      <div className="center-text">
        {!getToken ? (
          <div className="login-wrapper">
            <form className="form-login">
              <label>Username</label>
              <input name="name" placeholder="Username" type="text" value={name} onChange={(e) => onChange(e)}/>
              <label>Password</label>
              <input name="password" placeholder="Password" type="password" value={password} onChange={(e) => onChange(e)}/>
              <button className="login-button" onClick={(e) => onSubmit(e)}>Login</button>
            </form>
            <Link href="/">
              <a className="back-to-home">
                Back to Home
              </a>
            </Link>
          </div>
        ) : (
          <>
            <h2>You already login</h2>
            <Link href="/profile">
              <a>Go to Profile</a>
            </Link>
          </>
        )}
      </div>
    </Layout>
  )
}

export default Index;