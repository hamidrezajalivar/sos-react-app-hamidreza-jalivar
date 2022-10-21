import '../styles/blog.css'

import { Col } from 'antd';
import { Row } from 'antd';
import Search from './Search';
import SelectFilter from './Select';
import { useProductACtions } from '../contexts/UserContext';
import { useState } from 'react';

const filterOptions = [
  { value: '', label: 'همه' },
  { value: 'بیماری', label: 'بیماری' },
  { value: 'درمان', label: 'درمان' },
  { value: 'پیشگیری', label: 'پیشگیری' },
];
const sortOptions = [
  { value: 'highest', label: 'بیشترین' },
  { value: 'lowest', label: 'کمترین' },
];
const Filter = () => {
  const dispatch = useProductACtions();

  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const filterHanler = (selectedOption) => {

    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);

  }
  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  }
  return (

    <div className='w-[93%] mx-auto'>
      <Search filter={filter} placeholder="دنبال چی میگردی ؟" />
      <Row className="filter">
        <Col span={11}>
          <SelectFilter value={filter} changeHandler={filterHanler} options={filterOptions} placeholder="دستبه بندی" />
        </Col>
        <Col span={11}>
          <SelectFilter value={sort} changeHandler={sortHandler} options={sortOptions} placeholder="بازدید" />
        </Col>
      </Row>
    </div>

  );
}

export default Filter;