import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  reviewsMainBox: {
    width: 500,
  },
  reviewsHeader: {
    marginBottom: '10px',
    padding: '15px 0',
    fontSize: 14,
    fontWeight: 'bold',
    borderBottom: '1px solid #AAAAAA',
  },
  commentItem: {
    marginTop: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #EAEAEA',
    '&:last-child': {
      border: 'none',
    },
  },
  commentTitle: {
    marginBottom: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
  },
  customerName: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  commentDate: {
    color: '#888888',
  },
  commentDesc: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  userReview: {
    paddingBottom: '20px',
    borderBottom: '1px solid #EAEAEA',
  },
  userComment: {
    width: '100%',
  },
  addReview: {
    display: 'block',
    marginTop: '10px',
    padding: '10px 15px',
  }
});