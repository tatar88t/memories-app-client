import {makeStyles} from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
      },
      heading: {
        textDecoration: 'none',
        color: '#25D3FF',
        fontFamily: '"Lexend Mega", sans-serif',
      },
      imageWrapper: {
        filter: 'drop-shadow(3px 3px 7px rgba(0,0,0, 0.4))',
        marginLeft: '15px',
      },
      image: {
        marginLeft: '15px',
        transform: 'rotate(7deg)',
        borderRadius: '4px',
        clipPath: 'polygon(0 0, 65% 0, 100% 30%, 100% 100%, 0 100%)',
      },
      toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
      },
      profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
      },
      userName: {
        display: 'flex',
        alignItems: 'center',
      },
      brandContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
      },
}));