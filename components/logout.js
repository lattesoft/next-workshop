import cookie from 'js-cookie';
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();
  const onLogout = async () => {
    await cookie.remove('token');
    router.push('/');
  }
  return(
    <span onClick={onLogout}>Logout</span>
  )
}

export default Logout