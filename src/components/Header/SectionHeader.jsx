import React from 'react';

const SectionHeader = ({ children, className }) => {
  return <div className={`section-header ${className}`}>{children}</div>;
};

export default SectionHeader;
