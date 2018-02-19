import React from 'react';
import { Container, Grid, Select } from 'semantic-ui-react'

// import { countryOptions } from '../common'
// [{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, ...{}]
const routeOptions = [
  {
    text: 'Jenny Hess',
    value: 'Jenny Hess',
  },
  {
    text: 'Payn Zhou',
    value: 'Payn Zhou',
  }
]

export const SelectRoute = ({ labelKey }) => (
  <Grid.Row stretched>
    <Grid.Column width={5} verticalAlign='middle'>
      <Container textAlign='right'>
        <label>{labelKey}</label>
      </Container>
    </Grid.Column>
    <Grid.Column width={10}>
      <Select placeholder='Select' options={routeOptions} />
    </Grid.Column>
  </Grid.Row>
)
