import React, { useEffect, useState } from 'react'
import Card from '../../Components/molecules/Card'
import { instance } from '../../utils/instance';
import List from './child/List';
import Navbar from '../../Components/molecules/Navbar';
import Footer from '../../Components/molecules/Footer';

const BlogList = () => {
  
  const [data, setData] = useState([]);
  const getBlogs = async() =>{
    try{
      await instance.get('blog').then((res))
    } catch(error){
      console.log(error);
    }
    };
    useEffect(() =>{
      getBlogs();
    },[]);
  


  return (
    <>
    <Navbar/>
    <List/>
    <Footer/>
    </>
  )
}

export default BlogList