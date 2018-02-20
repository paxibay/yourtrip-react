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

// <Select onChange={(e, { value }) => alert(value)} />
// <Dropdown placeholder='Select' fluid selection options={options} onChange={(e, { value }) => onStopClick(value)} />
// onClick={() => onTodoClick(todo.id)}
// connectExample: https://gist.github.com/markerikson/121c77a01c453466361a9c6434a08620