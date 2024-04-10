import React, { useState } from 'react';
import './popup.css'

const FormSection = () => {
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [workspaceName, setWorkspaceName] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleWorkspaceNameChange = (event) => {
    setWorkspaceName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Category:', category);
    console.log('Message:', message);
    console.log('Workspace Name:', workspaceName);
  };

  return (
    <div className="colo2">
      <h2 className="text-gray-950 font-semibold text-lg mb-4">Enter Details</h2>
      <div className="mb-4">
        <label className="block font-medium mb-2">Name *</label>
        <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Email *</label>
        <input type="email" className="border border-gray-300 rounded-md p-2 w-full" />
      </div>
      <button className="bg-white text-blue-500 border-2 border-blue-500 py-2 px-4 rounded-full mb-4">Add Guests</button>
      <div className="mb-4">
        <p className="font-medium mb-2">I want Fibery to work for: *</p>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="myself" className="mr-2" />
          <label htmlFor="myself" className="flex items-center">
            <span role="img" aria-label="Myself">
              🧑
            </span>
            Myself
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="lessthan10" className="mr-2" />
          <label htmlFor="lessthan10" className="flex items-center">
            <span role="img" aria-label="Less than 10 people">
              👫
            </span>
            &lt;10 people
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="10to50" className="mr-2" />
          <label htmlFor="10to50" className="flex items-center">
            <span role="img" aria-label="10 to 50 people">
              👥
            </span>
            10-50 people
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="morethan50" className="mr-2" />
          <label htmlFor="morethan50" className="flex items-center">
            <span role="img" aria-label="More than 50 people">
              🧑‍🦱
            </span>
            50+ people
          </label>
        </div>
      </div>
      <div className="mb-4">
        <p className="font-medium mb-2">Please, choose up to three options. You are more interested in: *</p>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="strategy" className="mr-2" />
          <label htmlFor="strategy" className="flex items-center">
            <span role="img" aria-label="Strategy">
              ⛰️
            </span>
            Strategy
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="productManagement" className="mr-2" />
          <label htmlFor="productManagement" className="flex items-center">
            <span role="img" aria-label="Product Management">
              😀
            </span>
            Product Management
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="engineering" className="mr-2" />
          <label htmlFor="engineering" className="flex items-center">
            <span role="img" aria-label="Engineering">
              🔨
            </span>
          Engineering
        </label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="feedbackManagement" className="mr-2" />
          <label htmlFor="feedbackManagement" className="flex items-center">
            <span role="img" aria-label="Feedback management">
                👤
            </span>
            Feedback management
            Strategy
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="somethingElse" className="mr-2" />
          <label htmlFor="somethingElse" className="flex items-center">
          <span role="img" aria-label="Something else">
            ❓
          </span>
          Something else
          </label>
        </div>
      </div>
      <br/>
      <div>
        <label htmlFor="message">
          Please, share anything that will help prepare for our meeting.
        </label><br/>
        <textarea
          id="message" 
          className='textarea'
          value={message}
          onChange={handleMessageChange}
        ></textarea>
      </div>
      <br/>
      <div>
        <label htmlFor="workspaceName">
          Please, share with us the name of your Fibery workspace (if any)
        </label> <br/>
        <textarea
          type="text"
          className='textarea'
          id="workspaceName"
          value={workspaceName}
          onChange={handleWorkspaceNameChange}
        ></textarea>
      </div>
      <div>
        <p>
          By proceeding, you confirm that you have read and agree to
          Calendly's Terms of Use and Privacy Notice.
        </p>
      </div>
      <br/>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4">Schedule Event</button>

      <h3>code logic was perfect. but i'm not understanding where i did mistake,<br/>
       after clicking the next button the from is not displaying.<br/> 
      this is the last day to submit that's why in submiting the project </h3>
    </div>
  );
};

export default FormSection;