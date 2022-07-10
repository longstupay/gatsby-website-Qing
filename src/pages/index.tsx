import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Contact from "../components/contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default ()=>{
  return (
    <>
    <Header />
    <main className="container">
        <section id="home" className="home-section">
          <div className="order-2 md:order-1 mt-10">
            <h2 className="text-5xl md:text-7xl font-bold">
              Hi,
            </h2>
            <h2 className="text-5xl md:text-7xl font-bold mt-2">
              I'm <span className=" text-cyan-500">HuangQing</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold opacity-70 mt-5 mb-10">
              前端工程师
            </h3>
            <a href="#portfolio" className="btn-primary">see my work</a>
          </div>
          <div className="container-hero-image">
            {/* <img className="w-full h-full object-cover opacity-90 object-center" loading="lazy" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/hero.jpg" alt="profile" /> */}
            <StaticImage className="w-full h-full object-cover opacity-90 object-center" loading="lazy" src="../images/hero.jpg" alt="hero pic" />
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-32">
          {/* describe */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
            <div className="rounded-full w-48 md:w-64 h-48 md:h-64 overflow-hidden bg-cyan-500">
              <img className="w-full h-full object-cover opacity-90" loading="lazy" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/hero.jpg" alt="profile" />
              {/* <LazyLoadImage className="w-full h-full object-cover opacity-90" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/hero.jpg" alt="profile" effect="blur" /> */}
            </div>
            <div className="w-full md:w-1/2 text-base md:text-lg text-center md:text-left">
              <h2 className="text-cyan-500 font-bold text-2xl md:text-3xl mb-3">Hi,I'm Huang Qing</h2>
              <p className="mb-3 opacity-70">
                学历:本科
              </p>
              <p className="opacity-70"> 熟练运用html、css、JavaScript进行网页制作;掌握ES6,TypeScript;掌握NodeJS,可使用Nest,Midway开发后台管理;掌握react; 掌握Taro开发微信小程序;了解使用Figma设计B端页面；熟练使用docker部署常见应用</p>
            </div>
          </div>
          {/* my skill */}
          <div className="mt-32 text-center">
            <h2 className="text-center text-cyan-500 font-bold text-3xl md:text-4xl mb-14">专业技能</h2>
            <div className="flex flex-wrap items-center justify-center gap-24 md:gap-12">
              <div className="skill" data-text="javascript">
                <img className="w-12 h-12" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/javascript.png" alt="javascript" />
              </div>
              <div className="skill" data-text="react">
                <img className="w-12 h-12" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/reactjs.png" alt="react" />
              </div>
              <div className="skill" data-text="tailwindcss">
                <img className="w-12 h-12" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/tailwindcss.png" alt="tailwindcss" />
              </div>
              <div className="skill" data-text="nodejs">
                {/* <img className="w-12 h-12" src="../images/node.jpeg" alt="vue" /> */}
                <StaticImage className="w-12 h-12" src="../images/node.jpeg" alt="skill-nodejs" />
              </div>
              
            </div>
          </div>
        </section>
        {/* dots */}
        <div className="hidden md:flex items-center justify-between gap-3 w-full">
          <div className=" bg-cyan-400/60 h-3 w-4"></div>
          <div className=" bg-cyan-400/60 h-3 w-4"></div>
          <div className=" bg-cyan-400/60 h-3 w-4"></div>
          <div className=" bg-cyan-400/60 h-3 w-4"></div>
          <div className=" bg-cyan-400/60 h-3 w-4"></div>
          <div className=" bg-cyan-400/60 h-3 w-4"></div>
          <div className=" bg-cyan-400/60 h-3 w-4"></div>
          <div className=" bg-gradient-to-r from-cyan-400/60 to-cyan-400/0 flex-grow h-3"></div>
        </div>
        {/* portfolio section */}
        <section id="portfolio" className="pt-32  flex flex-col items-center justify-center">
          <h2 className="portfolio-heading">
            最近项目
          </h2>
          <ul className="w-full md:w-5/6 space-y-10 py-5 px-2">
            <li className="portfolio-card">
              <div className="w-full md:w-1/3 h-60">
                {/* <img className="h-full w-full object-cover" loading="lazy" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/random-portfolio.jpg" alt="portfolio" /> */}
                <StaticImage className="h-full w-full object-cover"  src="../images/app1.jpg" alt="app1 of pic" />
              </div>
              <div className="w-full md:w-2/3 p-5">
                  <h2 className="text-3xl font-bold mb-3 text-left">
                    React个人网站
                  </h2>
                  <p className="text-left">
                    个人网站，使用react和tailwindcss，gatsby等构建网站。主要用于写笔记，后端结合midway和puppeteer实现邮件发送和订阅推送功能。
                  </p>
                  <div className="mt-8 font-semibold text-white flex items-center gap-2">
                    <a className="portfolio-link bg-cyan-400" href="https://github.com/longstupay/gatsby-website-Qing">
                      <img className="w-5 h-5" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/github.svg" alt="github" />
                      github</a>
                    <Link className="portfolio-link bg-gray-600 dark:bg-black" to="/blog">
                      <img className="w-5 h-5" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/web.svg" alt="website" />
                      website</Link>
                  </div>
                </div>
            </li>

            <li className="portfolio-card">
              <div className="w-full md:w-1/3 h-60">
                <StaticImage className="h-full w-full object-cover"  src="../images/app2.jpg" alt="app2 of pic" />
              </div>
              <div className="w-full md:w-2/3 p-5">
                  <h2 className="text-3xl font-bold mb-3 text-left">
                    课堂小程序
                  </h2>
                  <p className="text-left">
                  技术栈：Taro+tailwind，腾讯云开发。可以发布作业，创建课程，学生提交作业。教师日常收作业的小工具
                  </p>
                  <div className="mt-8 font-semibold text-white flex items-center gap-2">
                    <a className="portfolio-link bg-cyan-400 a-hover" href="#github-ng" onClick={e=>e.preventDefault()}>
                      <img className="w-5 h-5" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/github.svg" alt="github" />
                      github</a>
                    {/* <Link  className="portfolio-link bg-gray-600 dark:bg-black" to="/app3">
                      <img className="w-5 h-5" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/web.svg" alt="website" />
                      website</Link> */}
                  </div>
                </div>
            </li>

            <li className="portfolio-card">
              <div className="w-full md:w-1/3 h-60">
              <StaticImage className="h-full w-full object-cover"  src="../images/app3.jpg" alt="app3 of pic" />
              </div>
              <div className="w-full md:w-2/3 p-5">
                  <h2 className="text-3xl font-bold mb-3 text-left">
                    医疗管理系统(设计)
                  </h2>
                  <p className="text-left">
                  Taro小程序、后台页面Antd Pro,服务端Midway，用户手机登录小程序，可进行疫苗预约。后台为药品的上架和门诊的管理
                  </p>
                  <div className="mt-8 font-semibold text-white flex items-center gap-2">
                    <a className="portfolio-link bg-cyan-400 a-hover" href="https://github.com/longstupay/myhome" onClick={e=>e.preventDefault()}>
                      <img className="w-5 h-5" src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/github.svg" alt="github" />
                      github</a>
                   
                  </div>
                </div>
            </li>
          </ul>
        </section>
      </main>
      <Contact />
      <Footer />
    </>
  )
}