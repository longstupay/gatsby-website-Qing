import { Link } from "gatsby";
import React from "react";


export default () => {
    const toggleTheme = () => {
        const html = document.querySelector('html') as HTMLElement;
        const img = document.querySelector('#icon-theme') as HTMLImageElement;
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        const icon = isDark ? 'icon-sun' : 'icon-dark';
        img.src = `https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/${icon}.svg`;
    }
    return (
        <>
            <div className="w-full fixed top-0 z-40 bg-white dark:bg-gray-800">
                <div className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="flex flex-row items-center justify-between lg:justify-start">
                        <a href="./index.html" className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8">Huang Qing</a>
                        <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className="flex-col items-center flex-grow hidden pb-4 border-blue-600 md:pb-0 md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2">
                        <Link to="/" className="px-4 py-2 mt-2 text-sm text-light-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline" >Home</Link>
                        <Link to="/blog" className="px-4 py-2 mt-2 text-sm text-light-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline" >Blog</Link>
                        
                        <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
                            <form action="" method="post" id="revue-form" name="revue-form" target="_blank" className="p-1 transition duration-500 ease-in-out transform border2 bg-gray-100 dark:bg-gray-600 rounded-xl sm:max-w-lg sm:flex">
                                <div className="flex-1 min-w-0 revue-form-group">
                                    <label htmlFor="member_email" className="sr-only">Email address</label>
                                    <input id="cta-email" type="email" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-400 dark:placeholder-white transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your email  " />
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                                    <button type="submit" value="Subscribe" id="member_submit" className="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10">Notify me</button>
                                </div>
                            </form>
                        </div>
                        <button onClick={toggleTheme} className='relative z-30 dark:invert ml-5'>
                            <img id='icon-theme' className='md:opacity-70 w-7 md:-md-1' src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/icon-dark.svg" alt="theme" />
                        </button>
                    </nav >
                </div >
            </div >
        </>
    )
}