import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default () => {
    return (
        <>
            <div id="contact" className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-20 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-400 text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="text-gray-100">立即向我发送消息</div>
                    </div>
                </div>
                <form noValidate={true} className="space-y-3 ng-untouched ng-pristine ng-valid ng-submitted">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-600" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Your Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded bg-gray-600" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">发送消息</label>
                        <textarea id="message" rows={3} className="w-full p-3 rounded bg-gray-600"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-cyan-400 text-gray-900">Send Message</button>
                </form>
            </div>
        </>
    )
}