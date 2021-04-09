import React from 'react';
import { useHistory } from 'react-router';
import InputField from '../components/InputField/InputField';

const VendorDetails = () => {
  const history = useHistory();
  return (
    <>
      <InputField
        buttonText="Continue"
        title="Setup Details"
        isVendorDetails
        handleClick={() => history.push('/setup/timeslot')}
      />
    </>
  );
}

export default VendorDetails;
