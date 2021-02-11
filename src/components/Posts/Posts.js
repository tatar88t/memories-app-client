import React from 'react';

import {useSelector} from 'react-redux';

import {Grid, CircularProgress} from '@material-ui/core';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({setCurrentId}) => {
    const classes = useStyles();
    //in '../../reducers/index.js' we have combined reducer in global state named posts
    const posts = useSelector((state) => state.posts);

    console.log(posts, 'POSTS');
    return (
        !posts.length ? <CircularProgress /> : 
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
        </Grid>
    
    );
}

export default Posts;