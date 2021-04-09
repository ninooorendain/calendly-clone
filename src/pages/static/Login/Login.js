import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Chevron from '../../../shared/icons/Chevron';
import InputField from '../components/InputField';


const Login = () => {
  const query = new URLSearchParams(useLocation().search);
  const langParams = query.get('lang');
  const history = useHistory();
  return (
      <InputField
      title={langParams ? 'قم بتسجيل الدخول إلى حساب Plotsy الخاص بك.' : 'Log into your Plotsy account.'}
      buttonText={langParams ? 'يكمل' : 'Continue'}
      isArabic={langParams}
      changeEng={langParams && 'login'}
      changeAr={!langParams && 'login?lang=ar'}
    >
      {
        langParams ? <p className="font-light mt-8">ليس لديك حساب؟<Link to="/signup?lang=ar" className="text-primary-500">اشتراك</Link>.</p>
          : <p className="font-light mt-8">Dont have an account ?<Link to="/signup" className="text-primary-500"> Sign up</Link>.</p>
      }
    </InputField>
  );
}

export default Login;
