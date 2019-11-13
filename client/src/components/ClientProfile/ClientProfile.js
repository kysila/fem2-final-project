/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Material UI
import {
  Container, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Local imports
import { Footer, Header } from '../../commons';
import ProfileBreadcrumbs from './ProfileBreadcrumbs/ProfileBreadcrumbs';
import { Information } from './Information/Information';
import { useStyles } from './style';
import { dispatchGetCustomer } from '../../store/auth/actions';

function ClientProfile(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState('panel1');
  const [state, setState] = useState({
    redirect: false,
  });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    if (!props.user) {
      setState({ ...state, redirect: true });
    }
  }, [props]);

  if (state.redirect) {
    return <Redirect push to="/" />;
  }

  return (
    <React.Fragment>
      <Header
        callCenter="1-855-324-5387"
      />
      <Container
        maxWidth="md"
        className={classes.mainContainerTop}
      >
        <ProfileBreadcrumbs />
        <Typography
          variant="h2"
          className={classes.h2Name}
          align="left"
          style={{ fontFamily: 'Tungsten Book' }}
        >
          My Account
        </Typography>
      </Container>
      <Container
        maxWidth="md"
        className={classes.mainContainer}
      >
        <section
          className={classes.contentSection}
        >

          <Information
            user={props.user}
            getCustomerInfo={props.getCustomerInfo}
          />
          <ExpansionPanel
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                className={classes.heading}
                style={{ color: '#6A86E8' }}
              >
                My Order List
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper,
                neque lectus feugiat lectus, varius pulvinar
                diam eros in elit. Pellentesque convallis laoreet laoreet.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                className={classes.heading}
                style={{ color: '#6A86E8' }}
              >
                My Favorite Items
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies,
                auctor nunc in, volutpat
                nisl. Integer sit amet egestas eros,
                vitae egestas augue. Duis vel est augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
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
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies,
                auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros,
                vitae egestas augue. Duis vel est augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography
                className={classes.heading}
                style={{ color: '#6A86E8' }}
              >
                My Reviews
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies,
                auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros,
                vitae egestas augue. Duis vel est augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'panel6'}
            onChange={handleChange('panel6')}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography
                className={classes.heading}
                style={{ color: '#6A86E8' }}
              >
                My Bonuses
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies,
                auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros,
                vitae egestas augue. Duis vel est augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </section>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

function putStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

function putActionsToProps(dispatch) {
  return {
    getCustomerInfo: () => dispatch(dispatchGetCustomer()),
  };
}

const Profile = connect(putStateToProps, putActionsToProps)(ClientProfile);
export { Profile as ClientProfile };
