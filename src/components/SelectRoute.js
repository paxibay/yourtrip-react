import React from 'react';
import { Select, Form } from 'semantic-ui-react'

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

export const SelectRoute = () => (
  <Form>
    <Form.Field inline>
      <label>First name</label>
      <Select placeholder='Select' options={routeOptions} />
    </Form.Field>
  </Form>
)

