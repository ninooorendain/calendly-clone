import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import InputField from '../components/InputField';

const Signup = () => {
  const query = new URLSearchParams(useLocation().search);
  const langParams = query.get('lang');
  const history = useHistory();
  return (
    <InputField
      title={langParams ? 'قم بالتسجيل مع Plotsy مجانًا' : 'Sign up with Plotsy for free'}
      buttonText={langParams ? 'البدء' : 'Get Started'}
      isArabic={langParams}
      handleClick={() => history.push('/vendor')}
      changeEng={langParams && 'signup'}
      changeAr={!langParams && 'signup?lang=ar'}
    >
      {
        langParams ? <p className="font-light mt-8">هل لديك حساب ؟ <Link to="/login?lang=ar" className="text-primary-500">يسجل دخول</Link>.</p>
          : <p className="font-light mt-8">Already have an account ? <Link to="/login" className="text-primary-500">Log in</Link>.</p>
      }
    </InputField>
  );
}

export default Signup;