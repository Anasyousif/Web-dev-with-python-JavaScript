import React from 'react';
import './blog.css';
import {Article } from '../../';
import {blog01, blog02, blog03, blog04, blog05} from './imports';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt__blog-heading">
      <h1 className="gradient__text">A lot is happening, We are blogging about it</h1>
    </div>
    <div className="gpt3__blog-container">
    <div className="gpt3__blog-container_groupA">
   <Article imgUrl={blog01} date = "Oct 20, 2023"/>
    </div>
    <div className="gpt3__blog-container_groupB">
    <Article imgUrl={blog02} date = "Oct 20, 2023" text = "GPT-3 Open AI is the future. let us explore how is it?" />
    <Article imgUrl={blog03} date = "Oct 20, 2023" text = "GPT-3 Open AI is the future. let us explore how is it?" />
    <Article imgUrl={blog04} date = "Oct 20, 2023" text = "GPT-3 Open AI is the future. let us explore how is it?" />
    <Article imgUrl={blog05} date = "Oct 20, 2023" text = "GPT-3 Open AI is the future. let us explore how is it?" />
    </div>
    </div>
    </div>
  )
}

export default Blog