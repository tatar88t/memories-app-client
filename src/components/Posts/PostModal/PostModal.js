import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import moment from 'moment'
import { CardMedia, Typography, CardContent } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  dialogMedia: {
      width: '100%',
      minHeight: '600px',
  },
  dialogContent: {
      padding: '16px 32px',
  },
  dialogTitle: {
      padding: '16px 32px',
      '& h2': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }
  },
  dialogDate: {
      padding: '0 32px',
      marginBottom: '0',
  },
  dialogTags: {
      padding: '16px 32px',
  },
  dialogContentTitle: {
    padding: '16px 32px',
    marginBottom: '0',
  },
  dialogContentmessage: {
    padding: '16px',
    whiteSpace: 'pre-wrap',
  },
}));

export default function PostModal({open, handleClose, post}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={'md'}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle className={classes.dialogTitle}>
            <div>
                {post.name}
            </div> 
            <DialogContentText className={classes.dialogDate}>
                {moment(post.createdAt).fromNow()}
            </DialogContentText>
        </DialogTitle>
        
        <DialogContent className={classes.dialogContent}>
         
          <CardMedia className={classes.dialogMedia} image={post.selectedFile}/>
            <div className={classes.dialogTags}>
                <Typography variant="body2" color="textSecondary" component="h2">
                    {post.tags.map((tag) => `#${tag} `)}
                </Typography>
            </div>
            <Typography className={classes.dialogContentTitle} gutterBottom variant="h5" component="h2">{post.title}</Typography>
            <CardContent>
                <Typography className={classes.dialogContentmessage} variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}