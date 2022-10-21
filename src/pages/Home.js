import Articles from "../components/Articles";
import ButtonEffect from './../components/ButtonEffect';
import  Container  from '@mui/material/Container';
import { Link } from 'react-router-dom';
import  Typography  from '@mui/material/Box';

const Home = () => {
    return (
        <>
  <Container className="content">
          <div className="headContent">
          
          <Typography sx={{ fontSize: 24 }}>
          مقاله‌ها
          </Typography>

            <Link to="/blogs" className="moreBtn">نمایش همه</Link>
          </div>

           <Articles/>
           <ButtonEffect>بیشتر</ButtonEffect>
           </Container>
         </>
    );
}

export default Home;