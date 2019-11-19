import React, { useState } from 'react';
// Material UI
import {
  ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Local imports
import { useStyles } from './style';


export const ViewedItems = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <ExpansionPanel
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            className={classes.heading}
            style={{ color: '#6A86E8' }}
          >
            My Viewed Items
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          className={classes.expansionPanelDetails}
        >
          <Typography>
            Nunc vitae orci ultricies,
            auctor nunc in, volutpat nisl.
            Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </React.Fragment>
  );
}
