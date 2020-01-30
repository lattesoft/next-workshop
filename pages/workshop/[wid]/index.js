import Layout from "../../../components/layout"
import { useRouter } from 'next/router';
import Axios from "axios";
import useSWR from 'swr';
import Link from "next/link";

const getWorkshop = async (url) => {
  const res = await Axios.get(url);
  return res;
}

const Post = () => {
  const router = useRouter();
  const { wid } = router.query;
  const { data, error } = useSWR(`/api/workshop/${wid}`, getWorkshop);

  const errorHandler = error?.response;

  return(
    <Layout>
      {errorHandler ? (
        <h2 className="center-text">Error {errorHandler.data.statusCode}: {errorHandler.data.message}</h2>
      ) : !data ? (
        <h2 className="center-text">Loading...</h2>
      ) : (
        <h2 className="center-text">Workshop {data.data.id}: {data.data.title}</h2>
      )}
      <Link href="/workshop">
        <a className="back-workshop">Back to Workshop</a>
      </Link>
    </Layout>
  )
}

export default Post;