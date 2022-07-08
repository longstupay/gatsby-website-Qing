import React, { FC, ReactNode } from "react";

const BlogList:FC<{children:ReactNode}> =  ({children}) => {
    return (
        <>

            <div className="w-full flex flex-col items-center mt-26 pt-12">
                <div className="w-full flex justify-around px-12 mb-12">
                    <div className="title">
                        <p className="text-4xl font-bold text-gray-800 dark:text-white">
                            Lastest articles
                        </p>
                    </div>
                    <div className="text-end">
                        <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                            {/* <div className="relativeS">
                                <input type="text" id="&quot;form-subscribe-Search" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a title" />
                            </div>
                            <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                Search
                            </button> */}
                        </form>
                    </div>
                </div>
                {children}
            </div>


        </>
    )
}

export default BlogList