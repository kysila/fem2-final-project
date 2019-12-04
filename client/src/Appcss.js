import { withStyles } from '@material-ui/core/styles';

export const GlobalCss = withStyles({
// @global is handled by jss-plugin-global.
  '@global': {
    body: {
      fontFamily: "'Museo Sans 500'",
      color: '#444444',
      backgroundColor: '#fff',
    },

    a: {
      textDecoration: 'none',
    },
    '.MuiButton-root': {
      fontFamily: "'Museo Sans 500'",
      background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
      borderRadius: '4px',
      border: 'none',
      color: '#FFFFFF',
    },
    '.MuiTypography-root': {
      fontFamily: "'Museo Sans 500'",
      color: '#444444',
      '& p, li': {
        fontSize: 14,
      },
    },
    '.MuiChip-root': {
      fontFamily: "'Museo Sans 500'",
    },
    '.MuiTypography-body2': {
      fontFamily: "'Museo Sans 500'",
    },
    '.MuiButtonGroup-groupedContainedPrimary:not(:last-child)': {
      borderRight: '1px solid #EAEAEA',
    },
    '.MuiContainer-maxWidthMd': {
      maxWidth: '1060px',
    },
    '.MuiCardMedia-root': {
      backgroundSize: 'contain',
    },
    '.MuiFormLabel-root': {
      fontFamily: "'Museo Sans 500'",
    },
    '.MuiMenu-paper': {
      maxHeight: '40vh',

    },
    '.sf-download-bar': {
      fontFamily: "'Museo Sans 500'",
    },
    '.MuiInputBase-root': {
      fontFamily: "'Museo Sans 500'",
    },
    '.MuiSlider-root': {
      color: '#8F8DE2',
      padding: '50px 0 0',
    },
    '.MuiSlider-valueLabel': {
      transform: 'scale(1) translate(3px, -10px)',
    },
    '.MuiSlider-valueLabel>span': {
      background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%) !important',
      width: '25px',
      height: '25px',
      fontSize: '10px',
    },
    '.MuiListItemText-root': {
      fontFamily: "'Museo Sans 500'",
    },
    '.MuiPopover-paper': {
      minWidth: '20vw !important',
    },
    '.Mui-selected': {
      boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.05)',
    },
    '.MuiTab-root': {
      minWidth: 'auto',
      padding: '6px 16.5px',
      color: '#444444',
      fontSize: '14px',
      borderBottom: '1px solid #EAEAEA',
    },
    '.MuiTab-textColorPrimary.Mui-selected': {
      color: '#6A86E8',
    },
    '.MuiTabs-indicator': {
      backgroundColor: '#6A86E8',
    },
    '.MuiButtonBase-root': {
      boxShadow: 'none',
    },
    '.App': {
      marginTop: '130px',
    },
  },
})(() => null);
