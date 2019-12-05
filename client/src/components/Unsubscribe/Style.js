import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  box: {
    background: '#E5E5E5',
    opacity: '0.8',
    borderRadius: 7,
    marginTop: 150,
    lineHeight: 0.7,
    paddingBottom: 20,
  },
  appBar: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: '10px',
    position: 'sticky',
  },
  link: {
    color: '#444444',
    margin: '2%',
    fontSize: 14,
  },
  head: {
    fontSize: 40,
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    marginLeft: 40,
  },
  indication: {
    fontSize: 16,
    marginLeft: 40,
  },
  margin: {
    marginTop: 40,
  },
  buttonBlock: {
    marginTop: 60,
    marginBottom: 60,
    width: '50%',
    marginLeft: '25%',
    justifyContent: 'space-around',
  },
  textField: {
    width: '50%',
    '&>div>input': {
      backgroundColor: '#fff',
    },
  },
}));