import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0 20px',

    '& input': {
      borderRadius: '99rem',
      display: 'none',
    },

    '& label': {
      background: '#5d9cec',
      borderRadius: '99rem',
      padding: '6px 14px',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      color: '#fff',
      boxShadow: '0px 3px 4px -1px rgba(0, 0, 0, 0.3)',
      // fontStyle: 'italic',
      fontSize: '11px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: '0.3s all',
      '&:hover': {
        background: '#2D54C2'
      }
    },

    '& span': {
      maxWidth: '164px',
      display: 'inline-block',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      marginLeft: '16px',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '12px',
      fontSize: '12px',
      fontStyle: 'italic',
      color: '#666'
    }

  },
  buttonSubmit: {
    marginBottom: 10,
    background: '#2D54C2',
    borderRadius: '99rem',
    transition: '0.3s all',
    '&:hover': {
      background: '#1e3882'
    }

  },
  buttonReset: {
    background: '#e84118',
    borderRadius: '99rem',
    transition: '0.3s all',
    '&:hover': {
      background: '#bb3514'
    }
  }
}));