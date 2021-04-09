import React, { useState } from 'react';
import CheckIcon from '../../../shared/icons/CheckIcon';
import Header from '../components/Header';
import style from './Billing.module.css'
import FormPayment from './components/FormPayment';

const Billing = () => {
  const [showForm, setShowForm] = useState(false)
  const toggle = () => {
    setShowForm(!showForm)
  }
  return (
    <div>
      <Header />
      <div className="bg-white">
        <div className={`md:mx-auto py-8 ${style.maxWidth}`}>
          <h1 className="font-semibold text-2xl">Billing</h1>
        </div>
        <hr />
        {
          showForm ? <FormPayment handleClick={() => toggle()} />
            : <div>
              <div className="text-center">
                <h2 className="font-semibold text-xl mt-8">Upgrade your account</h2>
                <p>You are enjoying free trial</p>
              </div>
              <div className="md:flex md:items-center md:justify-center mx-auto text-center mt-8 md:space-x-40">
                <div className="items-center text-center">
                  <h2>Premium</h2>
                  <button className="bg-primary-500 py-2 w-56 text-white rounded-md mt-2" onClick={() => toggle()}>Choose Premium</button>
                  <div className="mt-4">
                    <p className="font-light text-sm">starting at 8$/month</p>
                    <p className="font-light text-secondary-200 text-sm">Price in USD</p>
                  </div>
                  <ul className="space-y-1 mt-4 text-gray-500">
                    <li className="flex"><span className="mt-1 mr-2"><CheckIcon width="15" height="15" color="#000" /></span>  Unlimited event types </li>
                    <li className="flex"><span className="mt-1 mr-2"><CheckIcon width="15" height="15" color="#000" /></span> Removed Plotsy branding</li>
                    <li className="flex"><span className="mt-1 mr-2"><CheckIcon width="15" height="15" color="#000" /></span> Group meetings </li>
                    <li className="flex"><span className="mt-1 mr-2"><CheckIcon width="15" height="15" color="#000" /></span> 2 Calendar connection </li>
                    <li className="flex"><span className="mt-1 mr-2"><CheckIcon width="15" height="15" color="#000" /></span> Restrict cancel and reschedule </li>
                    <li className="flex"><span className="mt-1 mr-2"><CheckIcon width="15" height="15" color="#000" /></span> Team scheduling features </li>
                    <li className="flex"><span className="mt-1 mr-2"><CheckIcon width="15" height="15" color="#000" /></span> Customize your invitees experience </li>
                  </ul>
                </div>
                <div>
                  <h2>Pro</h2>
                  <button className="bg-primary-500 py-2 w-56 text-white rounded-md mt-2" onClick={() => toggle()}>Choose Pro</button>
                  <div className="mt-4">
                    <p className="font-light text-sm">starting at 12$/month</p>
                    <p className="font-light text-secondary-200 text-sm">Price in USD</p>
                    <ul className="space-y-1 mt-4 text-gray-500">
                      <li className="flex"><span className="mt-1 mr-2"><CheckIcon width="15" height="15" color="#000" /></span> 6 Calendar Connection </li>
                      <li className="flex"><span className="mt-1 mr-2"><CheckIcon width="15" height="15" color="#000" /></span> Salesforce Integration </li>
                      <li className="flex"><span className="mt-1 mr-2"><CheckIcon width="15" height="15" color="#000" /></span> HubSpot Integration </li>
                      <li className="flex"><span className="mt-1 mr-2"><CheckIcon width="15" height="15" color="#000" /></span> Mailchimp Integration </li>
                      <li className="flex"><span className="mt-1 mr-2"><CheckIcon width="15" height="15" color="#000" /></span> Stripe Integration </li>
                      <li className="flex"><span className="mt-1 mr-2"><CheckIcon width="15" height="15" color="#000" /></span> Paypal Integration </li>
                      <li className="flex"><span className="mt-1 mr-2"><CheckIcon width="15" height="15" color="#000" /></span> Google Analytics Integration </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        }
      </div>
    </div>
  );
}

export default Billing;

