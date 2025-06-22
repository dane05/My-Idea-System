import React, { useState, useEffect } from 'react';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';
import ApproverDashboard from './components/ApproverDashboard';

export default function App() {
  const [ideas, setIdeas] = useState(() => {
    const saved = localStorage.getItem('ideas');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('ideas', JSON.stringify(ideas));
  }, [ideas]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">💡 My Idea System</h1>
      <IdeaForm setIdeas={setIdeas} />
      <IdeaList ideas={ideas} />
      <ApproverDashboard ideas={ideas} setIdeas={setIdeas} />
    </div>
  );
}