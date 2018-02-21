import React from 'react';
import { Container, Grid, Dropdown } from 'semantic-ui-react'

export const SelectRoute = ({ labelKey, options, onChange }) => (
  <Grid.Row stretched>
    <Grid.Column width={5} verticalAlign='middle'>
      <Container textAlign='right'>
        <label>{labelKey}</label>
      </Container>
    </Grid.Column>
    <Grid.Column width={10}>
      <Dropdown placeholder='Select' fluid selection options={options} onChange={(e, { value }) => onChange(value)}  />
    </Grid.Column>
  </Grid.Row>
)
