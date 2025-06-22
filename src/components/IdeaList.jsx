import React from 'react';

export default function IdeaList({ ideas }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">All Ideas</h2>
      {ideas.length === 0 && <p>No ideas yet.</p>}
      <ul className="space-y-3">
        {ideas.map(idea => (
          <li key={idea.id} className="bg-white p-4 rounded shadow">
            <p>{idea.text}</p>
            <p className="text-sm text-gray-600 mt-1">
              Status: <strong>{idea.status}</strong> | Approvals: {idea.approvals.join(', ') || 'None'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}