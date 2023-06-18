const right = document.querySelector(".desFront");
const left = document.querySelector(".progFront");
const rightTrg = document.querySelector(".tringger-right");
const leftTrg = document.querySelector(".tringger-left");
const rightBlc = document.querySelector(".block-right");
const leftBlc = document.querySelector(".block-left");
const rightOvr = document.querySelector(".overlay-right");
const leftOvr = document.querySelector(".overlay-left");
const pilDiv = document.querySelector(".pilih-divisi-about");


// 

rightTrg.addEventListener("mouseover",slideLeft);
rightTrg.addEventListener("mouseout",backLeft);

leftTrg.addEventListener("mouseover",slideRight);
leftTrg.addEventListener("mouseout",backRight);

function slideLeft() {
    left.style.transform = 'translateX(-100%)';
    leftBlc.classList.remove("noBlock");
    leftBlc.classList.add("block");
    leftOvr.classList.remove("noBlock");
    leftOvr.classList.add("block");
    pilDiv.innerHTML = 'DISAIN';
}
function backLeft() {
    left.style.transform = 'translateX(0)';
    setTimeout(() => {
        leftBlc.classList.add("noBlock");
        leftBlc.classList.remove("block");
    }, 1000);
    leftOvr.classList.add("noBlock");
    leftOvr.classList.remove("block");
    pilDiv.innerHTML = 'PILIH DIVISI';
}

function slideRight() {
    right.style.transform = 'translateX(100%)';
    rightBlc.classList.remove("noBlock");
    rightBlc.classList.add("block");
    rightOvr.classList.remove("noBlock");
    rightOvr.classList.add("block");
    pilDiv.innerHTML = 'PROGRAMMING';
}
function backRight() {
    right.style.transform = 'translateX(0)';
    setTimeout(() => {
        rightBlc.classList.add("noBlock");
        rightBlc.classList.remove("block");
    }, 1000);
    rightOvr.classList.add("noBlock");
    rightOvr.classList.remove("block");
    pilDiv.innerHTML = 'PILIH DIVISI';
}

// Custom element for Pengurus

class cardOne extends HTMLElement{
    constructor() {
        super();

        this.foto = this.getAttribute('foto') ? this.getAttribute('foto') : "/spill/IMG/temp_4x3.png";

        this.innerHTML = 
        `
            <div class="card-one-style">
                <img class="card-stamp" src="/spill/IMG/Square\ Black.svg" alt=""/>
                <div class="card-header">
                    <p class="card-h">
                        SPILL Staff Card
                    </p>
                </div>
                <div class="card-body">
                    <div class="card-text">
                        <p class="card-nama">
                            ${this.getAttribute('nama')}
                        </p>
                        <p class="card-nickname-before">
                            Codename:
                        </p>
                        <p class="card-nickname">
                            ${this.getAttribute('nickname')}
                        </p>
                        <p class="card-jabatan">
                            ${this.getAttribute('jabatan') + " SPILL"}
                        </p>
                        <p class="card-kelas">
                            ${this.getAttribute('kelas')}
                        </p>
                    </div>
                    <div class="card-img">
                        <div class="card-pict" style="background-image: url(${this.foto});"></div>
                        <img class="card-spill" src="/spill/IMG/Horizontal\ Black.svg" alt="SPILL"/>
                    </div>
                </div>
            </div>
        `;
    }
}

window.customElements.define('card-one', cardOne);