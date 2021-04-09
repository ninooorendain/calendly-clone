import React from 'react';

const FormPayment = ({ handleClick }) => {
  return (
    <div class="leading-loose mx-auto flex flex-col justify-center items-center">
      <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl border">
        <button className="bg-secondary-500 text-white px-4 py-1 rounded-md mb-8" onClick={handleClick}>Back</button>
        <p class="text-gray-800 font-medium">Customer information</p>
        <div class="">
          <label class="block text-sm text-gray-00" for="cus_name">Name</label>
          <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name" />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-00" for="cus_name">Phone Number</label>
          <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Phone" aria-label="Name" />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="cus_email">Email</label>
          <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email" />
        </div>
        <div class="mt-2">
          <label class=" block text-sm text-gray-600" for="cus_email">Address</label>
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email" />
        </div>
        <div class="mt-2">
          <label class="hidden text-sm block text-gray-600" for="cus_email">City</label>
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email" />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden block text-sm text-gray-600" for="cus_email">Country</label>
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email" />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email" />
        </div>

        <p class="mt-4 text-gray-800 font-medium">Payment information</p>
        <div class="">
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number" aria-label="Name" />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden block text-sm text-gray-600" for="cus_email">Country</label>
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="MM / DD" aria-label="Email" />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
          <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="CVC" aria-label="Email" />
        </div>
        <div class="mt-4">
          <button class="px-4 py-1 text-white font-light tracking-wider bg-primary-500 rounded" type="submit">Pay</button>
        </div>
      </form>
    </div>
  )
}

export default FormPayment;