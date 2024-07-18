import React from 'react';

const MainContent = ({ selectedTopic }) => {
  if (!selectedTopic) {
    return (
      
      <div style={{marginLeft:"50px"}}>
        <h2>Welcome to Python Tutorials</h2>
        <p>Select a topic from the sidebar to get started.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{selectedTopic.name}</h2>
      <p>{selectedTopic.content}</p>
    </div>
  );
};

export default MainContent;
