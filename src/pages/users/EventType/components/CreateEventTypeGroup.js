import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import style from '../EventType.module.css'

const CreateEventTypeGroup = () => {
  return (
    <div>
      <Header isNotFixed />
      <div className={`md:mx-auto max-w-px-980 bg-white mt-8`}>
        <p className="text-center font-semibold text-xl">Add Group  Event Type</p>
        <div className="border border-black mt-2 pb-4">
          <div className="px-4 pb-6 pt-2">
            <p>What Event is this ?</p>
          </div>
          <hr />
          <div className="mt-4 px-6">
            <div className="max-w-px-420">
              <p className="text-sm font-semibold mt-6">Event Name*</p>
              <input type="text"
                placeholder=""
                className="block w-full py-2 px-2 mt-0.5
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500"
                required />
            </div>
            <div className="max-w-px-420">
              <p className="text-sm font-semibold mt-6">Location*</p>
              <input type="text"
                placeholder=""
                className="block w-full py-2 px-2 mt-0.5
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500"
                required />
            </div>
            <div className="max-w-px-420">
              <p className="text-sm font-semibold mt-6">Description/Instruction*</p>
              <textarea type="text"
                placeholder=""
                className="block w-full px-2 mt-0.5
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500 h-32"
                required ></textarea>
            </div>
            <div className="max-w-px-420">
              <p className="text-sm font-semibold mt-6">Event Link*</p>
              <input type="text"
                placeholder=""
                className="block w-full py-2 px-2 mt-0.5
                  text-gray-800 appearance-none
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-primary-500"
                required />
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex text-right justify-end mr-8">
            <Link to="/dashboard" className="p-1.5">Cancel</Link>
            <button className="p-1.5 bg-primary-500 text-white rounded-md">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateEventTypeGroup;