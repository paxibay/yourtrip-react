import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import { SelectRoute } from './SelectRoute';

export const Routes = () => (
  <Grid >
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>
          <SelectRoute />
          <SelectRoute />
          <SelectRoute />
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)