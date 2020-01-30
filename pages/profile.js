import Layout from "../components/layout";
import Logout from "../components/logout";

const Profile = () => {
  return(
    <Layout>
      <div className="center-text">
        <h2>PROFILE</h2>
        <Logout />
      </div>
    </Layout>
  )
}

export default Profile;