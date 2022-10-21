import * as React from 'react';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Box from '@mui/material/Box';
import ButtonEffect from './ButtonEffect';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const Article = ({ post, onClick }) => {
    return (
        <>
            <Link to={`/articles/article/${post.id}`} className='articleItem'>

                <Card sx={{ p: 2, m: 1, border: 1, borderColor: '#0F5098', borderRadius: '16px' }} onClick={onClick}>
                    <CardMedia
                        style={{ borderRadius: '16px' }}
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={post.image}
                    />
                    <CardContent sx={{ p: 1 }}>
                        <Typography gutterBottom style={{ fontSize: '16px', fontWeight: "bold" }} component="div">
                            {post.title}
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', color: '#9E9E9E' }}>
                            <AccessTimeIcon style={{ fontSize: "25px", paddingLeft: "4px" }} />
                            <Typography gutterBottom style={{ fontSize: '14px', color: "#9E9E9E", paddingTop: "3px" }} component="div">
                                5 دقیقه
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و...
                        </Typography>
                    </CardContent>
                    <CardActions sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',

                    }}>

                        <ButtonEffect />
                    </CardActions>
                </Card>
            </Link>
        </>
    );
}

export default Article;