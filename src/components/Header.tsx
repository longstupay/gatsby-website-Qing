import React from "react";

export default () => {

    function changeMuenIcon(menu: HTMLElement) {
        const isContainTranslate = menu.classList.contains('translate-y-[-200%]');
        const icon = isContainTranslate ? 'Menu' : 'icon-close';
        const menuIcon = document.querySelector('#icon-menu') as HTMLImageElement;
        // https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/icon-close.svg
        menuIcon.src = `https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/${icon}.svg`;
    }

    const closeMenu = () => {
        const menu = document.querySelector('#menu') as HTMLElement;
        menu.classList.add('translate-y-[-200%]');
        changeMuenIcon(menu)
    }
    const showMenu = () => {
        const menu = document.querySelector('#menu') as HTMLElement;
        menu.classList.toggle('translate-y-[-200%]');
        changeMuenIcon(menu)
    }
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
            <nav className="nav">
                <div className="container flex items-center justify-between h-16 md:h-20">
                    <h1 className="relative z-30 font-semibold text-2xl pl-1">
                        Huang Q
                    </h1>
                    <div className="flex items-center flex-row-reverse md:flex-row gap-3 md:gap-12">
                        {/* Menu List */}
                        <ul id="menu" className="nav-menus translate-y-[-200%] md:translate-y-0">
                            <a onClick={closeMenu} className="border-b-4 border-transparent hover:border-blue-400 font-semibold" href="#home">主页</a>
                            <a onClick={closeMenu} className="nav-link" href="#about">个人信息</a>
                            <a onClick={closeMenu} className="nav-link" href="#portfolio">最近项目</a>
                            <a onClick={closeMenu} className="nav-link" href="#contact">联系我</a>
                        </ul>
                        {/* Mobile Menu Button */}
                        <button id='toggle-menu' onClick={showMenu} className='ralative w-12 z-30 p-2 md:hidden dark:invert'>
                            <img id='icon-menu' src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/Menu.svg" alt="menu" />
                        </button>
                        {/* toggle Theme */}
                        <button onClick={toggleTheme} className='relative z-30 dark:invert'>
                            <img id='icon-theme' className='md:opacity-70 w-7 md:-md-1' src="https://qiankun-app.oss-cn-shenzhen.aliyuncs.com/icon-dark.svg" alt="theme" />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}