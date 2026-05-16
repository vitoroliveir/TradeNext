import React from 'react';

export default function TextLimiter({ text = "" }) {
  const value = String(text);

  return (
    <div title={value}>
      <span>{value}</span>
    </div>
  );
};
