import Layout from "../components/layout";
import Link from "next/link";

const Index = () => {
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