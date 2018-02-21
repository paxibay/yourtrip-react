import React from 'react';
import { Message } from 'semantic-ui-react'

export const NextBus = ({ minutes }) => (
  <Message>
    <Message.Header>
      ARRIVES IN
    </Message.Header>
    <br/>
    <div>
      {minutes != -1 && `${minutes} Min`}
    </div>
  </Message>
);