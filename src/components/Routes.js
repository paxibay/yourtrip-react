import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import { SelectRoute } from './SelectRoute';

export const Routes = ({ routeList, routeStopes, routeDirection, onRouteClick, onDirectionClick, onStopClick }) => {
  const labels = ['Route', 'Direction', 'Stop'];
  const selects = labels.map((label, index) => {
    let select = '';
    switch (label) {
      case 'Route':
        select = <SelectRoute labelKey={label} key={index} options={routeList} onChange={onRouteClick} />;
        break;
      case 'Stop':
        select = <SelectRoute labelKey={label} key={index} options={routeStopes} onChange={onStopClick} />;
        break;
      case 'Direction':
        select = <SelectRoute labelKey={label} key={index} options={routeDirection} onChange={onDirectionClick} />;
        break;
      default:
        select = <SelectRoute labelKey={label} key={index} options={routeList} />;
        break;
    }
    return select
  });

  return (
    <Segment>
      <Grid columns={2}>
        {selects}
      </Grid >
    </Segment>
  );
}
