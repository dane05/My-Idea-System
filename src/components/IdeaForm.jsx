import React, { useState } from 'react';

export default function IdeaForm({ setIdeas }) {
  const [text, setText] = useState('');

  const submitIdea = () => {
    if (!text.trim()) return;
    const newIdea = {
      id: Date.now(),
      text,
      approvals: [],
      status: 'Pending'
    };
    setIdeas(prev => [newIdea, ...prev]);
    setText('');
  };

  return (
    <div className="bg-white shadow rounded p-4 mb-6">
      <h2 className="text-xl font-semibold mb-2">Submit an Idea</h2>
      <textarea
        className="w-full border rounded p-2 mb-2"
        rows="3"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Your brilliant idea..."
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={submitIdea}
      >
        Submit
      </button>
    </div>
  );
}