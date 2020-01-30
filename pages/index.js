import Layout from "../components/layout";
import Link from "next/link";
import cookie from 'js-cookie';
import Logout from "../components/logout";

const Index = () => {
  const getToken = cookie.get('token');
  return(
    <Layout>
      <div className="center-text">
        <h2>Welcome to Workshop 7: Login and Logout</h2>
        <Link href="/login">
          <a>
            Login
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export default Index;