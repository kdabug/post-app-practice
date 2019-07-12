import React from 'react'

function PostBoard ({posts}){
    const allPosts = posts.map(post =>{
        return <p>{post}</p>
    })
    return(
        <div className='post-board-ctn'>
            {allPosts}
        </div>
    )
}

export default PostBoard