class NavBar extends HTMLElement{
    constructor() {
        super();

        this.home = '/spill/';
        this.about = '/spill/about/';
        this.blog = '/spill/404.html" rel="nofollow';
        this.proj = '/spill/404.html" rel="nofollow';
        this.desHome = '/spill/design/" rel="nofollow';
        this.progHome = '/spill/404.html" rel="nofollow'; // rel nofollow added cause the page is still on working

        this.innerHTML = 
        `
            <nav id="main-nav" class="main-nav-b">

                <div class="dropdown">
                    <p class="dpd-s prog"><a href="${this.progHome}" tabindex="5">Programming</a></p>
                    <hr/ class="dpd-sep">
                    <p class="dpd-s dis"><a href="${this.desHome}" tabindex="6">Disain</a></p>
                </div>

                <div class="navbar">
                    <ul class="logo">
                        <li class="l-top"><a href="${this.home}" tabindex="1">SPILL</a></li>
                        <!--<li class="l-btm">Design Division</li>-->
                    </ul>
                    <ul class="link">
                        <li><a class="home" href="${this.home}" tabindex="2">Home</a></li>
                        <li><a class="about" href="${this.about}" tabindex="3">About</a></li>
                        <li>
                            <button class="divisi-wraper" tabindex="4" type="button">
                                <p class="divisi">Divison</p>
                                <svg class="divisi-i" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/></svg>
                            </button>
                        </li>
                        <li><a class="blog" href="${this.blog}" tabindex="7">Blog</a></li>
                    </ul>
                    <div class="hbr-c-wraper">    
                        <button class="hbr-c" aria-controls="primary-navigation" tabindex="8" title="primary navigation" type="button">
                            <div class="hbr"></div>
                        </button>
                    </div>    
                </div>

                <div class="nav-plus">
                    <div class="nav-plus-warper">
                        <div class="nav-plus-sub-wraper nav-plus-home">
                            <a href="${this.home}"><svg class="nav-plus-i nav-plus-home" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M16 42v-8h16v8ZM6 32.5v-9.15q0-.65.25-1.25t.75-1L22 7.8q.4-.4.925-.575Q23.45 7.05 24 7.05q.55 0 1.075.175.525.175.925.575l4 3.55ZM9 42q-1.25 0-2.125-.875T6 39v-3.8l8-7.1V42Zm25 0V25.6L25.45 18l6.05-5.35L41 21.1q.5.45.75 1.025T42 23.35V39q0 1.25-.875 2.125T39 42Z"/></svg></a>
                            <p><a class="nav-plus-home" href="${this.home}">Home</a></p>
                        </div>
                        <div class="nav-plus-sub-wraper nav-plus-about">
                            <a href="${this.about}"><svg class="nav-plus-i nav-plus-about" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M0 36v-2.65q0-1.95 2.1-3.15T7.5 29q.65 0 1.2.025.55.025 1.1.125-.4.85-.6 1.725-.2.875-.2 1.875V36Zm12 0v-3.25q0-3.25 3.325-5.25t8.675-2q5.4 0 8.7 2 3.3 2 3.3 5.25V36Zm27 0v-3.25q0-1-.175-1.875t-.575-1.725q.55-.1 1.1-.125Q39.9 29 40.5 29q3.4 0 5.45 1.2Q48 31.4 48 33.35V36Zm-15-7.5q-4 0-6.5 1.2T15 32.75V33h18v-.3q0-1.8-2.475-3T24 28.5Zm-16.5-1q-1.45 0-2.475-1.025Q4 25.45 4 24q0-1.45 1.025-2.475Q6.05 20.5 7.5 20.5q1.45 0 2.475 1.025Q11 22.55 11 24q0 1.45-1.025 2.475Q8.95 27.5 7.5 27.5Zm33 0q-1.45 0-2.475-1.025Q37 25.45 37 24q0-1.45 1.025-2.475Q39.05 20.5 40.5 20.5q1.45 0 2.475 1.025Q44 22.55 44 24q0 1.45-1.025 2.475Q41.95 27.5 40.5 27.5ZM24 24q-2.5 0-4.25-1.75T18 18q0-2.55 1.75-4.275Q21.5 12 24 12q2.55 0 4.275 1.725Q30 15.45 30 18q0 2.5-1.725 4.25T24 24Zm0-9q-1.25 0-2.125.85T21 18q0 1.25.875 2.125T24 21q1.3 0 2.15-.875Q27 19.25 27 18q0-1.3-.85-2.15Q25.3 15 24 15Zm0 18Zm0-15Z"/></svg></a>
                            <p><a class="nav-plus-about" href="${this.about}">About</a></p>
                        </div>
                        <div class="nav-plus-sub-wraper nav-plus-blog">
                            <a href="${this.blog}"><svg class="nav-plus-i nav-plus-blog" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M13.85 34.05H27.6v-3H13.85Zm0-8.55h20.3v-3h-20.3Zm0-8.55h20.3v-3h-20.3ZM9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h30q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V9H9v30ZM9 9v30V9Z"/></svg></a>
                            <p><a class="nav-plus-blog" href="${this.blog}">Blog</a></p>
                        </div>
                        <div class="nav-plus-sub-wraper nav-plus-projek">
                            <a href="${this.proj}"><svg class="nav-plus-i nav-plus-projek" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M11.1 44q-2.2 0-3.725-1.525T5.85 38.75V32.5h6.35V4l3 3 3-3 2.95 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3v34.75q0 2.2-1.525 3.725T36.9 44Zm25.8-3q1 0 1.625-.625t.625-1.625V9H15.2v23.5h19.45v6.25q0 1 .625 1.625T36.9 41ZM17.85 16.9v-3h12v3Zm0 6.7v-3h12v3Zm16.65-6.7q-.6 0-1.05-.45Q33 16 33 15.4q0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45Zm0 6.45q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45ZM11.05 41h20.6v-5.5H8.85v3.25q0 1 .625 1.625T11.05 41Zm-2.2 0v-5.5V41Z"/></svg></a>
                            <p><a class="nav-plus-projek" href="${this.proj}">Project</a></p>
                        </div>
                        <div class="nav-plus-sub-wraper nav-plus-prog">
                            <a href="${this.progHome}"><svg class="nav-plus-i nav-plus-prog" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m34 36-2.1-2.1 9.8-9.9-9.8-9.9L34 12l12 12Zm-20 0L2 24l12-12 2.1 2.1L6.3 24l9.8 9.9Zm2-10.25q-.7 0-1.225-.525Q14.25 24.7 14.25 24q0-.7.525-1.225.525-.525 1.225-.525.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225-.525.525-1.225.525Zm8 0q-.7 0-1.225-.525Q22.25 24.7 22.25 24q0-.7.525-1.225.525-.525 1.225-.525.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225-.525.525-1.225.525Zm8 0q-.7 0-1.225-.525Q30.25 24.7 30.25 24q0-.7.525-1.225.525-.525 1.225-.525.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225-.525.525-1.225.525Z"/></svg></a>
                            <p><a class="nav-plus-prog prog-name" href="${this.progHome}">Programming</a></p>
                        </div>
                        <div class="nav-plus-sub-wraper nav-plus-dis">
                            <a href="${this.desHome}"><svg class="nav-plus-i nav-plus-dis" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V11H7v26Zm4.85-5H36.2l-7.35-9.95-6.55 8.7-4.6-6.45ZM7 37V11v26Z"/></svg></a>
                            <p><a class="nav-plus-dis" href="${this.desHome}">Disain</a></p>
                        </div>
                    </div>
                </div>

            </nav>
        `;
    }
}

window.customElements.define('nav-bar', NavBar);

//

const menuBtn = document.querySelector('.hbr-c');
const menuExt = document.querySelector(".nav-plus");
const global = document.querySelector("html");

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuExt.classList.add('nav-plus-plop');
        setTimeout(() => {
            menuExt.classList.add('nav-plus-appear');
        }, 20);
        global.style.overflowY = 'hidden';
        if (dpdOpen) {
            dpdArr.classList.remove('flip');
            dpd.classList.remove('dpd-appear');
            setTimeout(() => {
                dpd.classList.remove('dpd-plop');
            }, 500);
            dpdOpen = false;
        }
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuExt.classList.remove('nav-plus-appear');
        setTimeout(() => {
            menuExt.classList.remove('nav-plus-plop');
        }, 500);
        global.style.overflowY = 'auto';
        menuOpen = false;
    }
})

const divisi = document.querySelector(".divisi-wraper");
const dpdArr = document.querySelector(".divisi-i");
const dpd = document.querySelector(".dropdown");


let dpdOpen = false;

divisi.addEventListener('click', () => {
    if(!dpdOpen) {
        dpdArr.classList.add('flip');
        if (!menuOpen) {
            dpd.classList.add('dpd-plop');
            setTimeout(() => {
                dpd.classList.add('dpd-appear');
            }, 20);
            dpdOpen = true;
        }
        if (menuOpen) {
            setTimeout(() => {
                dpdArr.classList.remove('flip');
                dpdOpen = false;
            }, 500);
            }
    } else {
        dpdArr.classList.remove('flip');
        dpd.classList.remove('dpd-appear');
        setTimeout(() => {
            dpd.classList.remove('dpd-plop');
        }, 500);
        dpdOpen = false;
    }
})

let progNav = document.querySelector(".prog-name")
if (window.matchMedia("(max-width: 767px)").matches)
{
    progNav.style.fontSize = "10px";
}