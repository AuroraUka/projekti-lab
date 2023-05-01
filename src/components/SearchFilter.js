import React,{useState} from 'react';
import Table from 'react-bootstrap/Table';
import  Container  from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup  from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Search.css';
import Filter from './Filter';
import {data} from '../Simulation/Data.js';
import ImageCourses from '../img/home.jpg';

const SearchFilter = () => {
  const[search, setSearch]=useState('');
  console.log(search);
  return (
    <div>
      
      <div className='CoursesHero'>

        <Container id="SearchBox">
    <Form id='Searchform'>
    <h5 className='text-left mt-4' id='TextAS'>Discover Your Passion with Our Online Courses</h5>
    {/* <h1>Discover Your Passion with Our Online Courses</h1>
    <p>Our courses are designed to help you learn new skills, explore new topics, and discover your passion. 
      Choose from a wide range of subjects and start learning today!</p> */}
    <InputGroup className='my-3'>
        <Form.Control onChange={(e)=>setSearch(e.target.value)} placeholder='Search Course'/>
    </InputGroup>
    <Filter/>
    </Form>
{/* Vetem per stimulim */}
      <Table striped bordered hover>
<thead>
  <tr>
    <th>Name</th>
    <th>Surname</th>
    <th>Email</th>
    <th>Country</th>
  </tr>
</thead>
<tbody>
  {data.filter((item)=>{
    return search.toLowerCase()==='' ? item : item.country.toLowerCase().includes(search);
  }).map((item)=>(
    <tr key={item.id}>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>{item.email}</td>
      <td>{item.country}</td>
    </tr>
  ))}
</tbody>
      </Table>

        </Container>
        {/* <img src={ImageCourses} alt='' id='CoursesImg'></img> */}
      </div>
    </div>
  )
}

export default SearchFilter