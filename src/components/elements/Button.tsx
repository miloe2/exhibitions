export interface ButtonProps {
  backgroundColor?: 'primary' | 'secondary' | 'disabled';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'round' | 'semi' | 'square';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  size = 'md',
  backgroundColor = 'primary', // 기본값 설정
  label = 'button',
  shape = 'semi',
  onClick,
  ...props
}: ButtonProps) => {
  // 사이즈에 따른 클래스 정의
  const sizeClass = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // 모양에 따른 클래스 정의
  const roundedClass = {
    round: 'rounded-full',
    square: '',
    semi: 'rounded-md',
  };

  // 배경색 및 글자색 정의
  const bgClass = {
    primary: '#333',
    secondary: '#fff',
    disabled: '#ccc',
  };

  const fontColor = {
    primary: '#ddd',
    secondary: '#111',
    disabled: '#888',
  };

  // 클래스명과 스타일 설정
  const buttonClass = `${roundedClass[shape]} ${sizeClass[size]}`;
  const buttonStyle = {
    backgroundColor: bgClass[backgroundColor],
    color: fontColor[backgroundColor],
  };

  return (
    <button
      onClick={onClick}
      className={buttonClass}
      style={buttonStyle} // 인라인 스타일로 전달
      {...props} // 나머지 props 전달
    >
      {label}
    </button>
  );
};

export default Button;
