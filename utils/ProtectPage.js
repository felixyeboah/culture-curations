import { useRouter } from 'next/router';
import useAuth from '@context/userContext';
import isEmpty from 'lodash/isEmpty';

export function withPublic(Component) {
  return function WithPublic(props) {
    const auth = useAuth();
    const router = useRouter();

    if (
      !auth.loading &&
      !isEmpty(auth.isAuthenticated()) &&
      auth.active === true
    ) {
      router.replace('/dashboard');
      return <p>loading...</p>;
    } else if (!auth.loading && auth.emailSent === true) {
      router.replace('/auth/verify');
      return <p>loading...</p>;
    }

    return <Component auth={auth} {...props} />;
  };
}

export function withPrivate(Component) {
  return function WithPrivate(props) {
    const auth = useAuth();
    const router = useRouter();

    if (
      !auth.loading &&
      isEmpty(auth.isAuthenticated()) &&
      auth?.active === false
    ) {
      router.replace('/auth/login');
      return <p>loading...</p>;
    }

    return <Component auth={auth} {...props} />;
  };
}
