import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        // color: 'rgba(0,183,255, 1)',
        color: '#25D3FF',
        fontFamily: '"Lexend Mega", sans-serif',
      },
      imageWrapper: {
        filter: 'drop-shadow(3px 3px 7px rgba(0,0,0, 0.4))',
        marginLeft: '15px',
      },

      image: {
        transform: 'rotate(7deg)',
        borderRadius: '4px',
        clipPath: 'polygon(0 0, 65% 0, 100% 30%, 100% 100%, 0 100%)',
        
        // boxShadow: '3px 3px 8px 2px rgba(0,0,0, 0.3);',
      },
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: "column-reverse"
        }
      }
    
}));