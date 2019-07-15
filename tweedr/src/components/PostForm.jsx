import React from 'react'

function PostForm ({handleChange, handleSubmit}){
    return(
        <div className='post-form'>
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange} type='text'/>
                <button>Post</button>
            </form>
        </div>
    )
}

export default PostForm 