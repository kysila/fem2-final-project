import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(() => ({
  subsectionTitle: {
    fontSize: '33px',
    fontWeight: '326',
    textTransform: 'capitalize',
    marginBottom: '20px',
    color: (props) => props.color,
  },

}));
