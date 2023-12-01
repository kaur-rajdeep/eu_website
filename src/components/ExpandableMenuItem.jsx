// ExpandableMenuItem.js
import React, { useState } from 'react';
import "../pages/About us/About.css"

const ExpandableMenuItem = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`expandable-menu-item ${expanded ? 'expanded' : ''}`}>
      <div className="header">
        <span className="title">{title}</span>
        <button className="expand-button" onClick={toggleExpand}>
          {expanded ? '-' : '+'}
        </button>
      </div>
      {expanded && <div className="content">{content}</div>}
    </div>
  );
};

export default ExpandableMenuItem;
