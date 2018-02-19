import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import { SelectRoute } from './SelectRoute';

export const Routes = (routes) => {
  console.log('routeList', routes)
  const labels = ['Route', 'Direction', 'Stop'];

  const selects = labels.map((label, index) => {
    return <SelectRoute labelKey={label} key={index} />;
  });

  return (
    <Segment>
      <Grid columns={2}>
        {selects}
      </Grid >
    </Segment>
  );
}
