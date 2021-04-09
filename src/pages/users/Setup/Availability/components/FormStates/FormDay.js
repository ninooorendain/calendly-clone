import React, { useEffect, useState } from 'react';
import CloseCircle from '../../../../../../shared/icons/CloseCircle';
import DayLists from '../DayLists';
import DayListsEnd from '../DayListsEnd'

const FormDay = ({ isShow }) => {
  const [items, setItems] = useState(1);
  const handleAdd = () => {
    setItems(items + 1)
  }
  const handleRemove = () => {
    setItems(items - 1)
  }

  const handleDisplay = () => {
    let daySelect = [];
    for (var i = 0; i < items; i++) {
      daySelect.push(<div className="md:flex md:space-x-4 mt-4 border p-2 maxSm:relative">
        <div className="flex-1">
          <h2 className="font-semibold">Start Day: </h2>
          < DayLists isDay index={i} />
          <div class="relative inline-block w-full text-gray-700 flex-1 mt-2">
            <select class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border appearance-none focus:shadow-outline" placeholder="Regular input">
              <option>12:00 AM</option>
              <option>1:00 AM</option>
              <option>2:00 AM</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="font-semibold">End Day: </h2>
          <DayListsEnd isDay index={i} />
          <div class="relative inline-block w-full text-gray-700 flex-1 mt-2">
            <select class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border appearance-none focus:border-primary-500" placeholder="Regular input">
              <option>12:00 AM</option>
              <option>1:00 AM</option>
              <option>2:00 AM</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
          </div>
        </div>
        {items > 1 && <div><p className="text-right maxSm:absolute maxSm:top-1 maxSm:right-0 text-xl cursor-pointer" onClick={() => handleRemove()}><CloseCircle width="25" height="25" /></p> </div>
        }
      </div>)
    }
    return daySelect;
  }
  useEffect(() => {
    console.log(items)
  }, [items])
  return (
    <div>
      {
        isShow &&
        <>
          <div className="flex justify-end space-x-4">
            <div className="text-right text-4xl mb-4 cursor-pointer" onClick={() => handleAdd()}>+</div>
          </div>
          {
            handleDisplay()
          }
          <div className="days mt-6">
          </div>
          <button className="mt-8 bg-primary-500 text-white py-2 rounded-full px-6 focus:outline-none" type="button">Submit</button>
        </>
      }
    </div>
  );
}

export default FormDay;