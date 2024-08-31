import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", 
    "../src/components/elements/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: [
    { from: '../public', to: '/public' }, // 프로젝트 루트의 public 폴더 전체를 static으로 제공
    { from: '../public/font', to: '/fonts' }, // 폰트가 있는 디렉토리에서 Storybook이 직접 접근할 수 있도록 설정
  ],
};
export default config;
