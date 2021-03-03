import React from 'react';

export default function NameInput({ name, onChange }) {
  return (
    <input
      type="text"
      placeholder="이름"
      name="name"
      value={name}
      onChange={onChange}
    />
  );
}