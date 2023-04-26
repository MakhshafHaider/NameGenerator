import React from 'react'
import Link from 'next/link';

export default function HomeHeader() {
  return (
    <div className='home_header'>
      <div className='header_background_image'></div>
      <div className='home_header_detail'>
        <h1 className='home_header_heading'>The Ultimate BGMI Name Generator</h1>
        <span className='home_header_span'>Discover Your Perfect Game Name<br/></span>
        <div className='home_button'> <Link className='post_preview_button' href={"/blog"} >See All Blogs</Link></div>
      </div>
    </div>
  )
}

