import type { StorybookConfig } from '@storybook/preact-vite'

const config = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  framework: {
    name: '@storybook/preact-vite',
    options: {},
  },
} satisfies StorybookConfig

export default config