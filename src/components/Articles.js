import { useEffect, useState } from 'react';

import Article from './Article';
import { Grid } from '@mui/material';
import { blogList } from './../data';

const Articles = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
      setPosts(blogList)
    },[])

    return (
        <>
            <Grid container spacing={1} style={{ width: "100%", margin: "auto" }} className="grid-articles">
                {posts.slice(0,4).map(post => (<Grid item md={3} key={post.id}>
                    <Article post={post} />
                </Grid>)
                )}

         
            </Grid>

        </>
    );
}

export default Articles;