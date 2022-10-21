import Articles from "../components/Articles";
import  Container  from '@mui/material/Container';
import { Link } from 'react-router-dom';
import  Typography  from '@mui/material/Box';

const Home = () => {
    return (
        <>
  <Container style={{marginTop:"70px",maxWidth:"100%"}}>
          <div className="headContent">
          
          <Typography sx={{ fontSize: 24 }}>
          مقاله‌ها
          </Typography>

            <Link to="/blogs">نمایش همه</Link>
          </div>

           <Articles/>
           </Container>
         </>
    );
}

export default Home;