import React from 'react';

const APPROVERS = ['approver1', 'approver2'];

export default function ApproverDashboard({ ideas, setIdeas }) {
  const approveIdea = (id, approver) => {
    setIdeas(prev =>
      prev.map(idea => {
        if (idea.id !== id) return idea;
        if (idea.approvals.includes(approver)) return idea;

        const updated = {
          ...idea,
          approvals: [...idea.approvals, approver],
        };
        if (updated.approvals.length >= 2) {
          updated.status = 'Approved';
        }
        return updated;
      })
    );
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Approver Dashboard</h2>
      {ideas.filter(idea => idea.status !== 'Approved').length === 0 && (
        <p>All ideas approved!</p>
      )}
      {APPROVERS.map(approver => (
        <div key={approver} className="mb-4">
          <h3 className="font-bold mb-1">Logged in as: {approver}</h3>
          <ul className="space-y-2">
            {ideas
              .filter(
                idea =>
                  !idea.approvals.includes(approver) && idea.status !== 'Approved'
              )
              .map(idea => (
                <li key={idea.id} className="flex justify-between items-center border p-2 rounded">
                  <span>{idea.text}</span>
                  <button
                    className="bg-green-600 text-white px-3 py-1 rounded"
                    onClick={() => approveIdea(idea.id, approver)}
                  >
                    Approve
                  </button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}