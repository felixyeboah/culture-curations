import { useRouter } from 'next/router';
import useAuth from '@context/userContext';

export function withPublic(Component) {
  return function WithPublic(props) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth.loading && auth.isAuthenticated) {
      router.push('/dashboard');
      return <p>loading...</p>;
    }

    return <Component auth={auth} {...props} />;
  };
}

export function withPrivate(Component) {
  return function WithPrivate(props) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth.loading && !auth.isAuthenticated) {
      router.push('/auth/login');
      return <p>loading...</p>;
    }

    return <Component auth={auth} {...props} />;
  };
}
