import React from 'react';

import {TextField, Button, Typography, Paper} from '@material-ui/core';

import FileBase from 'react-file-base64';

import {useDispatch, useSelector} from 'react-redux';

import useStyles from './styles';

import {createPost, updatePost} from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = React.useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
     });
    const [uploaded, setUploaded] = React.useState('')
    const classes = useStyles();
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    
    React.useEffect (() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData))

        } else {
            dispatch(createPost(postData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '', title: '', message: '', tags: '', selectedFile: ''
        });

        setUploaded('')
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    {currentId ? 'Editing' : 'Creating'} a Memory
                </Typography>
                <TextField 
                    name="creator"
                    variant="outlined"
                    label="Creator" 
                    fullWidth 
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField 
                    name="title"
                    variant="outlined"
                    label="Title" 
                    fullWidth 
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField 
                    name="message"
                    variant="outlined"
                    label="Message" 
                    fullWidth 
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField 
                    name="tags"
                    variant="outlined"
                    label="Tags" 
                    fullWidth 
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />
                <div className={classes.fileInput}>
                    <label>
                        Upload photo
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={(file) => {setPostData({ ...postData, selectedFile: file.base64 }); setUploaded(file.name)}} 
                        />
                    </label>
                   {uploaded && <span>{uploaded}</span>}
                </div>
                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    type="submit" 
                    fullWidth
                >
                    Submit
                </Button>
                <Button 
                    className={classes.buttonReset} 
                    variant="contained" 
                    color="secondary" 
                    size="large" 
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
}

export default Form;