import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundBlendMode: 'darken',
    filter: 'brightness(50%)',
    cursor: 'pointer',
    transition: '.5s ease-in-out',
    '&:hover': {
      filter: 'brightness(90%)',
    }
  },
  border: {
    border: 'solid',
  },
  edit: {
    color: '#fff',
    // transition: '.1s ease-in',
    '&:hover': {
      color: '#6acee1',
    }
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    // height: '100%',
    height: '462px',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    // maxHeight: '40px',
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    '& h2': {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  },
  title: {
    padding: '0 16px',
    marginBottom: 0,
    maxHeight: '64px',
    overflow: 'hidden',
    position: 'relative',
    '&::before': {
      content: '',
      position: 'absolute',
      width: '30px',
      height: '34px',
      top: '0',
      right: '0',
      background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 54%)',
    },
  },
  message: {
    whiteSpace: 'pre-wrap',
    color: '#354147',
    height: '84px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '6px',
      background: '#F5F5F5',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      background: '#6acee1',  
    },

    '&::-webkit-scrollbar-track': {

    },
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});