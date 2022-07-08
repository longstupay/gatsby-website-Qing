import React, { FC, ReactNode } from "react";


const BlogItem:FC<{children:ReactNode}> =  ({children})=>{
    return (
        <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {children}
            </div>
          
        </>
    )
}


export default BlogItem