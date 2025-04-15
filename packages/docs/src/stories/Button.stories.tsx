import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@magalhaesdev/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const BIg: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}
