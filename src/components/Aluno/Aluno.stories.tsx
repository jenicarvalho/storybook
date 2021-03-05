import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Aluno, { AlunoProps } from './index';

export default {
  title: 'Componente Aluno',
  component: Aluno,
} as Meta;

const Template: Story<AlunoProps> = (args) => <Aluno {...args} />;

export const Lara = Template.bind({});
Lara.args = {
  name: 'Lara Santos'
};

export const Daniel = Template.bind({});
Daniel.args = {
  name: 'Daniel',
  color: 'red'
};
 