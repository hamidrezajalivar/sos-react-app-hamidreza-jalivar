import Articles from "../components/Articles";
import ButtonEffect from './../components/ButtonEffect';
import Container from '@mui/material/Container';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Box';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>صفحه اصلی</title>
      </Helmet>
      <Container className="content">
        <div className="headContent">
          <Typography sx={{ fontSize: 24 }}>
            مقاله‌ها
          </Typography>
          <Link to="/blogs" className="moreBtn">نمایش همه</Link>
        </div>
        <Articles />
        <div className="moreBlog">
          <ButtonEffect link="/blogs">بیشتر</ButtonEffect>
        </div>
      </Container>
    </>
  );
}

export default Home;