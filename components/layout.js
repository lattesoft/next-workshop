import Nav from "./nav"
import '../styles/style.scss';

const Layout = ({ children }) => {
  return(
    <div>
      <Nav />
      <main className="container">
        {children}
      </main>
      <style>{`
        .container {
          position: relative;
          width: 100%;
          height: 100vh;
        }
      `}</style>
    </div>
  )
}

export default Layout;