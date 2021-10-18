import React from 'react';
import styled from 'styled-components';

import { Loki } from '../index';

import '../style.scss';

export default {
  title: 'Loki Text',
  displayName: 'stuff',
  component: Loki,
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
  background-color: #06070b;
`;

const Template = (args) => <Wrapper><Loki {...args} /></Wrapper>;

export const DefaultState = Template.bind({});

DefaultState.args = {};
