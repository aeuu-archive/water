import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <h1 style={{ paddingLeft: 12, color: '#f7f7f7' }}>
      <b>{title}</b>
    </h1>
  );
};

export default Header;
