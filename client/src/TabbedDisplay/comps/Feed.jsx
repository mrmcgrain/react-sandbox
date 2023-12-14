import React, { useState, useEffect } from '@testing-library/react'

export default function Feed({ post }) {




    return (
        <div>
            {console.log("prop", post)}
            {
                post ?
                    post.map((post) => {
                        return <div key={post.id} >
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>

                        </div>

                    })
                    :(null)



}
            <p>Feed comp</p>





        </div>


    )

}