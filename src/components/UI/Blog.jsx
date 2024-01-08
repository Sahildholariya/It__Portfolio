import React from 'react'

import "../../style/blog.css"

import videoImg from "../../images/video.png"
import article from "../../images/article.png"
import caseStudy from "../../images/case-study.png"

const blogData = [
    {
      imgUrl:videoImg,
      title:'video',
      desc:'To know about work. Watch some video f....',
      linkUrl:'/'
    },
    {
      imgUrl:article,
      title:'Articles',
      desc:'Do you want to improve the way your brand interacts with customer? Lets talk....',
      linkUrl:'/'
    },  
    {
      imgUrl:caseStudy,
      title:'Case Study',
      desc:'Boost your conversation rate with us...',
      linkUrl:'/'
    },  
]

const Blog = () => {
  return (
    <>
      <section id='blog'>
        <div className="container">
          <div className="blog__top-content">
            <h6 className="subtitle">Our blog</h6>
            <h2>
              Let's have look from our 
              <span className="highlight"> recent blog</span>
            </h2>
          </div>

          <div className="blog__wrapper">
            {
              blogData.map((item,index)=>(
                <div className="blog__item" key={index}>
                    <h3>{item.title}</h3>
                    <div className="blog__img">
                      <img src={item.imgUrl} alt="" />
                    </div>
                    <p className="description blog__desc"> {item.desc}</p>
                      
                    <div>
                      <a href="/" className="lern__more"><i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
