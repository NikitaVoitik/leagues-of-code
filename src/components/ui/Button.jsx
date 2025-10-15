import React from 'react';

const Button = ({ children, onClick, href, disabled = false, className = '', ...props }) => {
  const baseClass = `
    px-7 py-4
    bg-[#1836CF] 
    text-white 
    border-2 border-black 
    rounded-md
    text-lg
    shadow-[4px_4px_0px_0px_#000000]
    transition-all duration-200 ease-in-out
    hover:shadow-[6px_6px_0px_0px_#000000]
    active:shadow-[2px_2px_0px_0px_#000000]
    disabled:opacity-50 disabled:cursor-not-allowed
    font-bold
    ${className}
  `;

  // If href is provided, render as link
  if (href) {
    return (
      <a
        href={href}
        className={baseClass}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      className={baseClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
