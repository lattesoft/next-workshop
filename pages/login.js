import Layout from "../components/layout";
import Link from "next/link";

const Index = () => {
  return(
    <Layout>
      <div className="center-text">
        <div className="login-wrapper">
          <form className="form-login">
            <label>Username</label>
            <input name="name" placeholder="Username" type="text"/>
            <label>Password</label>
            <input name="password" placeholder="Password" type="password"/>
            <button className="login-button">Login</button>
          </form>
          <Link href="/">
            <a className="back-to-home">
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Index;