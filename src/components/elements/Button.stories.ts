import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// 스토리북 메타데이터 정의
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',  // 컴포넌트를 중앙에 배치
  },
  tags: ['autodocs'],  // Autodocs 생성
  argTypes: {
    backgroundColor: { 
      control: 'radio',  // 색상 선택을 위한 컨트롤 타입을 radio로 변경
      options: ['primary', 'secondary', 'disabled'],  // 선택할 수 있는 옵션
    },
    size: {
      control: 'radio',  // 크기 선택을 위한 컨트롤 타입을 radio로 변경
      options: ['sm', 'md', 'lg'],  // 선택할 수 있는 옵션
    },
    shape: {
      control: 'radio',  // 버튼 모양 선택을 위한 컨트롤 타입을 radio로 변경
      options: ['round', 'semi', 'square'],  // 선택할 수 있는 옵션
    },
    onClick: { action: 'clicked' },  // 클릭 이벤트 액션 정의
  },
  args: {
    onClick: () => console.log('Button clicked!'),  // 기본 클릭 이벤트 핸들러
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 다양한 스토리 정의
export const Primary: Story = {
  args: {
    backgroundColor: 'primary',  // 기본 색상 설정
    size: 'md',  // 기본 크기 설정
    shape: 'semi',  // 기본 모양 설정
    label: 'button',  // 기본 라벨 설정
  },
};

export const Disabled: Story = {
  args: {
    backgroundColor: 'disabled',
    size: 'md',
    shape: 'semi',
    label: 'Disabled Button',
  },
};
