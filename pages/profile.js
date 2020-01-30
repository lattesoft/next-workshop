import Layout from "../components/layout";
import Logout from "../components/logout";
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import Link from "next/link";

const Profile = () => {
  const getToken = cookie.get('token');

  return(
    <Layout>
      <div className="center-text">
        {getToken ? (
          <>
            <h2>PROFILE</h2>
            <Logout />
          </>
        ) : (
          <>
            <h2>Not Login</h2>
            <Link href="/login">
              <a>Back to Login</a>
            </Link>
          </>
        )}
      </div>
    </Layout>
  )
}

export default Profile;