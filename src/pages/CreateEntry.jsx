import React, { useState } from 'react';
import Form from '../components/Form';
import '../css/CreateEntry.css';
import '../css/components/Form.css';

const fields = {
  title: {
    type: 'text',
    required: 'Title is required.',
  },
  summary: {
    type: 'text',
    required: 'Summary is required.',
    description: 'Describe your entry so you can see it at a glance.',
  },
  tags: {
    type: 'text',
    description: 'You\'ll use this to help filter your entries.',
  },
};

function CreateEntryPage() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    // TEMPORARY submit function
    // Just to verify that fields are being passed properly.
    // Simulate API call with setTimeout.
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="create-entry">
      <div className="create-entry-section">
        <Form fields={fields} onSubmit={onSubmit} loading={loading} width="90vw"/>
        <p className="create-entry-view-date">I want to see this in...</p>
      </div>
    </div>
  );
}

export default CreateEntryPage;
