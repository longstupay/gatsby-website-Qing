import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

interface RootObject {
    scrapedData: ScrapedDatum[];
    fontNews: FontNew[];
    liveShow: LiveShow;
  }
  
  interface LiveShow {
    src: string;
    desc: string;
  }
  
  interface FontNew {
    title: string;
    link: string;
    id: string;
    udate: string;
    author: string;
  }
  
  interface ScrapedDatum {
    title: string;
    link: string;
    id: string;
  }

const BlogNews = () => {

    const [news, setNews] = useState<RootObject | null>(null)
    
    const fetchData = useCallback(async()=>{
        axios({
            method:'get',
            url:'http://159.75.144.47:7001/api/news/',
            responseType:"json"
          })
            .then(function(response) {
                console.log(response.data)
                response.data?setNews(response.data):null;
          }).catch(function(e){
            console.log(e)
          })
    },[])

    useEffect(()=>{
        fetchData()
    },[])
    return (
        <section className="px-5 py-10 bg-gray-700 text-gray-100 mt-16">
            <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
                <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
                    <div className="flex flex-col space-y-8 md:space-y-12">
                        {/* 前端热帖 */}
                        <div className="flex flex-col space-y-2">
                            <h3 className="flex items-center space-x-2 text-gray-400">
                                <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-cyan-400"></span>
                                <span className="text-xs font-bold tracking-wider uppercase">前端热帖</span>
                            </h3>
                            <a rel="noopener noreferrer" href={news?.fontNews[0].link || '#'} className="font-serif hover:underline">{ news?.fontNews[0].title || '站在巨人的肩膀上--用VUE3试试搞个在线IDE吧！'}</a>
                            <p className="text-xs text-gray-400">{news?.fontNews[0].udate}
                                <a rel="noopener noreferrer"  className="hover:underline text-cyan-400">{ news?.fontNews[0].author || 'Leroy Jenkins'}</a>
                            </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="flex items-center space-x-2 text-gray-400">
                                <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-cyan-400"></span>
                                <span className="text-xs font-bold tracking-wider uppercase">前端热帖</span>
                            </h3>
                            <a rel="noopener noreferrer" href={news?.fontNews[1].link || '#'} className="font-serif hover:underline">{ news?.fontNews[1].title || '关于 React Hook 可能出现的使用误区总结'}</a>
                            <p className="text-xs text-gray-400">{news?.fontNews[1].udate}  
                                <a rel="noopener noreferrer" className="hover:underline text-cyan-400">{news?.fontNews[1].author || 'Leroy Jenkins'}</a>
                            </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="flex items-center space-x-2 text-gray-400">
                                <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-cyan-400"></span>
                                <span className="text-xs font-bold tracking-wider uppercase">前端热帖</span>
                            </h3>
                            <a rel="noopener noreferrer" href={news?.fontNews[2].link || '#'} className="font-serif hover:underline"> { news?.fontNews[2].title || '盘点 6 月 yyds 的开源项目！'}</a>
                            <p className="text-xs text-gray-400">{news?.fontNews[2].udate}  
                                <a className="hover:underline text-cyan-400">{news?.fontNews[2].author || 'Leroy Jenkins'}</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full space-y-2">
                        <div className="flex w-full h-1 bg-opacity-10 bg-cyan-400">
                            <div className="w-1/2 h-full bg-cyan-400"></div>
                        </div>
                        <a rel="noopener noreferrer" href="#" className="flex items-center justify-between w-full">
                            <span className=" text-xs font-bold tracking-wider uppercase">更多前端资讯</span>
                            <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent text-cyan-400">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
                {/* 大推荐 */}
                <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96" style={{backgroundImage: `url(${news?.liveShow.src})`}}>
                    <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 border-cyan-400 text-gray-100">精彩直播</span>
                    <a href='https://juejin.cn/live' className="w-full flex flex-col items-center justify-end p-6 text-center sm:p-8 group via-transparent flex-grow-1 bg-gradient-to-b from-gray-900 to-gray-900">
                        <span className="flex items-center mb-4 space-x-2 text-cyan-400">
                            <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400">
                                <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-cyan-400"></span>
                            </span>
                            <span className="text-sm font-bold">Live</span>
                        </span>
                        <div className="font-serif text-2xl font-semibold group-hover:underline text-gray-100">{ news?.liveShow.desc || 'CloudWeGo：从开源、开放到企业落地'}</div>
                    </a>
                </div>
                {/* 总热榜 */}
                <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                    <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-cyan-400">
                        <button type="button" className="pb-1 text-xl font-bold uppercase border-b-2 border-cyan-400"><a href="https://juejin.cn/?sort=three_days_hottest">掘金热榜</a></button>
                    </div>
                    <div className="flex flex-col divide-y divide-gray-700">
                        <div className="flex px-1 py-4">
                            <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src="https://source.unsplash.com/random/244x324" />
                            <div className="flex flex-col flex-grow">
                                <a rel="noopener noreferrer" href={news?.scrapedData[0].link} className="font-serif hover:underline">{ news?.scrapedData[0].title ||'为什么 React 的 Diff 算法不采用 Vue 的双端对比算法？'}</a>
                                <p className="mt-auto text-xs text-gray-400">综合
                                    <a rel="noopener noreferrer" href="#" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">最热</a>
                                </p>
                            </div>
                        </div>
                        <div className="flex px-1 py-4">
                            <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src="https://source.unsplash.com/random/245x325" />
                            <div className="flex flex-col flex-grow">
                                <a rel="noopener noreferrer" href={news?.scrapedData[1].link} className="font-serif hover:underline">{news?.scrapedData[1].title || '我在 Shopee 工作这两年'}</a>
                                <p className="mt-auto text-xs text-gray-400">综合
                                    <a rel="noopener noreferrer" href="#" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">最热</a>
                                </p>
                            </div>
                        </div>
                        <div className="flex px-1 py-4">
                            <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src="https://source.unsplash.com/random/246x326" />
                            <div className="flex flex-col flex-grow">
                                <a rel="noopener noreferrer" href={news?.scrapedData[2].link} className="font-serif hover:underline">{news?.scrapedData[2].title || '分享几个方便好用的VSCode插件'}</a>
                                <p className="mt-auto text-xs text-gray-400">综合
                                    <a rel="noopener noreferrer" href="#" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">最热</a>
                                </p>
                            </div>
                        </div>
                        <div className="flex px-1 py-4">
                            <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src="https://source.unsplash.com/random/247x327" />
                            <div className="flex flex-col flex-grow">
                                <a rel="noopener noreferrer" href={news?.scrapedData[3].link} className="font-serif hover:underline">{news?.scrapedData[3].title || 'Fastjson2你开始使用了吗？来看看源码解析'}</a>
                                <p className="mt-auto text-xs text-gray-400">综合
                                    <a rel="noopener noreferrer"  className="block text-blue-400 lg:ml-2 lg:inline hover:underline">最热</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default BlogNews