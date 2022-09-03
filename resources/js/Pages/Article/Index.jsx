import React from 'react';

const Index = ({ articles }) => {
  return (
    <div className="flex flex-col">
      {articles.map(a => (
        <>
          <div key={a.id}>{a.title}</div>
          <div className="text-xs text-gray-400">{a.content}</div>
        </>
      ))}
    </div>
  );
};

export default Index;
