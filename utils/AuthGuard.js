/* eslint-disable react/display-name */
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const withAuthpppp = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== 'undefined') {
      const Router = useRouter();

      const accessToken = JSON.parse(Cookies.get('_token'));
      const user = JSON.parse(Cookies.get('_user'));

      if (!accessToken) {
        Router.push('/auth/login');
        return null;
      } else if (user.emailSent && !user.active) {
        Router.push('/auth/verify');
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default withAuthpppp;
