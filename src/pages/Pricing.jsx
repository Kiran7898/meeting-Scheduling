import React, { useState } from 'react';
import SchedulingPopup from './SchedulingPopup';

const Pricing = () => {
  const [paymentCycle, setPaymentCycle] = useState('monthly');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePaymentCycle = () => {
    setPaymentCycle(paymentCycle === 'monthly' ? 'annually' : 'monthly');
  };
  const togglePopup = () => {
     setIsPopupOpen(!isPopupOpen);
  };

  const standardPrice = paymentCycle === 'monthly' ? 10 : 10 * 12 * 0.85;
  const proPrice = paymentCycle === 'monthly' ? 17 : 17 * 12 * 0.85;

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <div className=''>
            <h2 className="text-8xl  font-extrabold text-gray-900">Pricing</h2>
            <p className="mt-4 text-lg text-gray-500">Start your 14-day free trial. No CC required.</p>
          </div>

          <div className="mt-6 ml-60 flex justify-end ">
            <div className="bg-green-100 rounded-md p-2 mt-20 mb-0">
              <span className="text-green-800 h-0">Save 15%</span>
            </div>
            <div className="ml-0 flex  mt-20 items-center">
              <label htmlFor="pricing-toggle" className="text-gray-700 font-medium mr-2">
                Pay Annually
              </label>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input
                  type="checkbox"
                  id="pricing-toggle"
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  checked={paymentCycle === 'monthly'}
                  onChange={togglePaymentCycle}
                />
                <label
                  htmlFor="pricing-toggle"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
              <label htmlFor="pricing-toggle" className="text-gray-700 font-medium">
                Pay Monthly
              </label>
            </div>
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
          <div className="border border-gray-200 rounded-lg   hover:bg-green-200 shadow-sm divide-y divide-gray-200">
            <div className="p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Standard 🥇</h2>
              <p className="mt-4 text-sm text-gray-500">
                Version History: 90 days <br />
                Read-only users: unlimited
              </p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">
                  ${standardPrice.toFixed(2)}
                </span>{' '}
                <span className="text-base font-medium text-gray-500">per user, per month</span>
              </p>
              <p className="mt-4 text-sm text-gray-500">billed annually</p>
              <button
                className="mt-16 w-full bg-gray-800 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-gray-900"
                onClick={togglePopup}
              >
                Start your free trial
              </button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg  hover:bg-pink-200 shadow-sm divide-y divide-gray-200">
            <div className="p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Pro 🚀</h2>
              <p className="mt-4 text-sm text-gray-500">
                Version history: unlimited, <br />
                Read-only users: unlimited, <br />
                Group permissions, <br />
                SAML + SSO, <br />
                No Fibery branding on forms, Extra-caring support
              </p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">
                  ${proPrice.toFixed(2)}
                </span>{' '}
                <span className="text-base font-medium text-gray-500">per user, per month</span>
              </p>
              <p className="mt-4 text-sm text-gray-500">billed annually</p>
              <button
                className=" mt-1 w-full bg-gray-800 border border-transparent  rounded-md py-3 px-5  inline-flex items-center justify-center text-base font-medium text-white hover:bg-gray-900"
                onClick={togglePopup}
              >
                Start your free trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
// import './popup.css'

// const Pricing = () => {
//   const [paymentCycle, setPaymentCycle] = useState('monthly');
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const togglePaymentCycle = () => {
//     setPaymentCycle(paymentCycle === 'monthly' ? 'annually' : 'monthly');
//   };

//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen);
//   };

//   const standardPrice = paymentCycle === 'monthly' ? 10 : 10 * 12 * 0.85;
//   const proPrice = paymentCycle === 'monthly' ? 17 : 17 * 12 * 0.85;

//   return (
//     <div className="bg-white py-12">
//       {isPopupOpen && <SchedulingPopup onClose={togglePopup} />}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Pricing component content */}
//         <div className="text-center  flex">
//           <div className="text-left  ">
//             <h2 className="text-8xl font-extrabold font-serif text-gray-900">Pricing</h2>
//             <p className="mt-4  text-xl text-gray-500">
//               Start your 14-day free trial. No CC required.
//             </p>
//             <div className="mt-6 flex justify-center">
//               {/* Payment cycle toggle */}
//             </div>
//           </div>
          
//         </div>
//         <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
//           <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
//             <div className="p-6">
//               <h2 className="text-lg leading-6 font-medium text-gray-900">
//                 Standard 🥇
//               </h2>
//               {/* Standard plan details */}
//               <button
//                 className="mt-8 w-full bg-gray-800 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-gray-900"
//                 onClick={togglePopup}
//               >
//                 Start your free trial
//               </button>
//             </div>
//           </div>
//           <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
//             <div className="p-6">
//               <h2 className="text-lg leading-6 font-medium text-gray-900">
//                 Pro 🚀
//               </h2>
//               {/* Pro plan details */}
//               <button
//                 className="mt-8 w-full bg-gray-800 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-gray-900"
//                 onClick={togglePopup}
//               >
//                 Start your free trial
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;