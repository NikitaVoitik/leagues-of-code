import React from 'react';
import { COLORS } from "@/lib/constants";

type AnchorButtonProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
  href: string;
  className?: string;
  children: React.ReactNode;
};

type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
  href?: undefined;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = AnchorButtonProps | NativeButtonProps;

const isAnchorProps = (props: ButtonProps): props is AnchorButtonProps =>
  typeof (props as AnchorButtonProps).href === 'string';

const Button = (props: ButtonProps) => {
  const baseClasses = (className = '') => `
    px-7 py-4
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

  const buttonStyle = {
    backgroundColor: COLORS.primaryDark
  };

  if (isAnchorProps(props)) {
    const { children, className = '', href, target, rel, ...anchorProps } = props;
    const isExternal = href.startsWith('http');

    return (
      <a
        href={href}
        className={baseClasses(className)}
        style={buttonStyle}
        target={target ?? (isExternal ? '_blank' : undefined)}
        rel={rel ?? (isExternal ? 'noopener noreferrer' : undefined)}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { children, className = '', disabled = false, ...buttonProps } = props;

  return (
    <button
      className={baseClasses(className)}
      style={buttonStyle}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
