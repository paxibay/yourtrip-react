import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import { SelectRoute } from './SelectRoute';

export const Routes = () => {
  const labels = ['Route', 'Direction', 'Stop'];

  const routes = labels.map((label, i) => {
    return <SelectRoute labelKey={label} key={i} />;
  });

  return (
    <Segment>
      <Grid columns={2}>
        {routes}
      </Grid >
    </Segment>
  );
}
