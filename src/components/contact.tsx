import axios from "axios";
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import { useDebounceFn } from 'ahooks';
import { navigate } from "gatsby"

export default () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');
    const [show, setShow] = useState(false)

    //防抖
    const { run } = useDebounceFn(
        () => {
            const regMail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            console.log(email, name, msg)
            if (!email || !name || !msg) {
                alert('请填写完整信息！')
            } else {
                if (!regMail.test(email)) {
                    alert('请填写正确邮箱')
                } else {
                    setShow(true)
                    setTimeout(() => {
                        axios({
                            method: 'post',
                            url: 'http://127.0.0.1:7001/api/sendmsg/',
                            data: {
                                to: '761798834@qq.com',
                                subject: `${name}在个人网站发起联系`,
                                html: `<p>他的邮箱是：${email}</p><p>向你留言：</p>${msg}</p>`
                            }
                        })
                            .then(function (response) {
                                console.log(response)
                                setShow(false)
                                alert('发送成功')
                                navigate('/blog')
                            }).catch(function () {
                                alert('网络错误，请稍后再试')
                            })
                            .finally(function () {
                                setShow(false)
                            });
                    }, 2800);
                }
            }
        },
        {
            wait: 500,
        },
    );

    return (
        <>
            <div style={show ? { display: "block" } : { display: "none" }} className="flex flex-col items-center justify-center pt-20 bg-black opacity-70 fixed left-0 top-0 w-screen h-screen z-50">
                <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse dark:bg-cyan-400"></div>
                    <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse dark:bg-cyan-400"></div>
                    <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse dark:bg-cyan-400"></div>
                </div>
            </div>
            <div id="contact" className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-20 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-400 text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="text-gray-100">立即向我发送消息</div>
                    </div>
                </div>
                <div className="space-y-3">
                    <div>
                        <label htmlFor="name" className="text-sm">name</label>
                        <input id="name" onChange={e => setName(e.target.value)} type="text" placeholder="" className="w-full p-3 rounded bg-gray-600" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Your Email</label>
                        <input id="email" onChange={(e) => setEmail(e.target.value)} type="email" className="w-full p-3 rounded bg-gray-600" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">消息</label>
                        <textarea id="message" onChange={(e) => setMsg(e.target.value)} rows={3} className="w-full p-3 rounded bg-gray-600"></textarea>
                    </div>
                    <div onClick={() => run()} className="w-full cursor-pointer text-center p-3 text-sm font-bold tracking-wide uppercase rounded bg-cyan-400 text-gray-900">Send Message</div>
                </div>
            </div>
        </>
    )
}