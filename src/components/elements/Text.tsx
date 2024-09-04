import React from 'react';

export interface TextProps {
  size?: 24 | 18 | 14;
  text: string;
  type: 'default' | 'secondary' | 'accent';
  weight?: 'regular' | 'medium' | 'bold';
  lineHeight?: number;
  letterSpacing?: number;
  onClick?: () => void;
}

export const Text = ({
  size = 24,
  text = '텍스트를 입력해주세요.',
  type = 'default',
  weight = 'regular',
  lineHeight = 1.5,
  letterSpacing = 0.5,
  onClick,
  ...props
}: TextProps) => {
  const textColor = {
    default: '#222',
    secondary: '#888', 
    accent: '#007BFF', 
  };

  // Define font weight mapping
  const fontWeight = {
    regular: 400,
    medium : 500,
    bold: 700,
  };

  // Compose inline styles
  const textStyle = {
    color: textColor[type],
    fontSize: `${size}px`, // Ensure size is in pixels
    fontWeight: fontWeight[weight],
    lineHeight: `${lineHeight}`, // Set line height to enhance readability
    letterSpacing: `${letterSpacing}px`, // Slight spacing for better legibility
  };

  return (
    <p
      onClick={onClick}
      style={textStyle} // Apply styles inline
      {...props} // Pass additional props
    >
      {text}
    </p>
  );
};

export default Text;
