import Layout from "../components/layout";
import Axios from "axios";
import useSWR from "swr";
import Link from "next/link";
import NavLink from "../components/link";

const getAllWorkshop = async (url) => {
  const res = await Axios.get(url);
  return res
}

const Workshop = () => {
  const { data, error } = useSWR('/api/workshop', getAllWorkshop);
  
  const errorHandler = error?.response;

  return(
    <Layout>
      <div className="center-text">
        {error ? (
          <h2>Error {errorHandler.data.statusCode}: {errorHandler.data.message}</h2>
        ) : (
          !data ? (
            <h2>Loading...</h2>
          ) : (
            <ul className="workshop-list-wrapper">
              <div className="margin-bottom">
                {data.data.map(workshop => (
                  <Link href={`/workshop/${workshop.id}`}>
                    <a>
                      <li className="workshop-list" key={workshop.id}>
                        {workshop.id} {workshop.title}
                      </li>
                    </a>
                  </Link>
                ))}
                <NavLink />
              </div>
            </ul>
          )
        )}
      </div>
    </Layout>
  )
}

export default Workshop;