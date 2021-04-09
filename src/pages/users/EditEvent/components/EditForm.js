import React from 'react';
import Colors from './Colors';

const EditForm = () => {
  return (
    <div className="mt-4 px-6 pb-6">
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
      <div className="mt-4">
        <Colors />
      </div>
    </div>
  )
}

export default EditForm;