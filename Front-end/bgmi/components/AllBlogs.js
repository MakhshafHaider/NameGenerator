import React, { useEffect, useState } from 'react'
import PostPreview from './PostPreview';

export default function AllBlogs({posts}) {

    function renderPostPreviews(){
         return posts.map((post) => {
            return <PostPreview post={post} key={post.id} />
         })
    }

  return (
    <div className='all_blogs_post'>
        {/* <h2>Our posts</h2> */}
        {renderPostPreviews()}
    </div>

  )
}
