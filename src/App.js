import { useRef } from 'react';
import './App.css';

import anime from 'animejs';


function App() {
    const buttonRef = useRef();

    return (
        <div className="App">
            <button ref={buttonRef} onClick={() => {
                anime({
                    targets: buttonRef.current,
                    duration: 1200,
                    opacity: [0, 1],
                    delay: 700
                })
            }}>anime button</button>

            <div style={{border:'solid black 1px'}}>
                <button onClick={() => {
                    anime({
                        targets: '#id_move_left_nav p',
                        translateX: [100, 0],
                        duration: 1200,
                        opacity: [0, 1],
                        delay: (el, i) => {
                            return 300 + 100 * i;
                        },
                    })
                }}>리스트 차례로 오른쪽에서 등장</button>

                <nav id='id_move_left_nav'>
                    <p>test 1</p>
                    <p>test 3</p>
                    <p>test 3</p>
                </nav>
            </div>

            <div style={{border:'solid black 1px'}}>
                <button onClick={() => {
                    anime({
                        targets: '#id_move_up_nav p',
                        translateY: [100, 0],
                        opacity: [0, 1],
                        duration: 1200,
                        delay: (el, i) => {
                            return 1000 + 100 * i;
                        },
                    })
                }}>리스트 차례로 아래에서 등장</button>

                <nav id='id_move_up_nav'>
                    <p>test 1</p>
                    <p>test 3</p>
                    <p>test 3</p>
                </nav>
            </div>

            <div style={{ border: 'solid black 1px' }}>
                <button id="id_large_button" onClick={() => {
                    anime({
                        targets: '#id_large_button',
                        easing: 'easeOutExpo',
                        scale: [2, 1],
                        opacity: [0, 1],
                    })
                }}>작아지면서 등장</button>
            </div>


            <div className='text-animation-container'>
                {/* 텍스트 애니메이션 1 */}
                <div style={{ background: 'black' }}>
                    <button onClick={() => {

                        var textWrapper = document.querySelector('.ml1 .letters');
                        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                        anime.timeline({ loop: true })
                            .add({
                                targets: '.ml1 .line',
                                scaleX: [0, 1],
                                opacity: [0.5, 1],
                                easing: "easeOutExpo",
                                duration: 700,
                                offset: '-=875',
                                delay: 0
                            })

                        anime.timeline({ loop: true })
                            .add({
                                targets: '.ml1 .letter',
                                scale: [0.3, 1],
                                opacity: [0, 1],
                                translateZ: 0,
                                easing: "easeOutExpo",
                                duration: 600,
                                delay: (el, i) => 70 * (i + 1)
                            }).add({
                                targets: '.ml1',
                                opacity: 0,
                                duration: 1000,
                                easing: "easeOutExpo",
                                delay: 1000
                            });
                    }}>텍스트 애니메이션 1 속도 문제 해결 필요</button>

                    <h1 className="ml1">
                        <span className="text-wrapper">
                            <span className="line line1"></span>
                            <span className="letters">THURSDAY</span>
                            <span className="line line2"></span>
                        </span>
                    </h1>
                </div>

                {/* 텍스트 애니메이션 2 */}
                <div style={{ border: 'solid black 1px' }}>
                    <button onClick={() => {

                        var textWrapper = document.querySelector('.ml2');
                        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
                        
                        anime.timeline({loop: true})
                        .add({
                        targets: '.ml2 .letter',
                        scale: [4,1],
                        opacity: [0,1],
                        translateZ: 0,
                        easing: "easeOutExpo",
                        duration: 950,
                        delay: (el, i) => 70*i
                        }).add({
                        targets: '.ml2',
                        opacity: 0,
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 1000
                        });
                    }}>텍스트 애니메이션 2</button>
                    <h1 className="ml2">Sunny mornings</h1>
                </div>

                {/* 텍스트 애니메이션 3 */}
                <div style={{ border: 'solid black 1px' }}>
                    <button onClick={() => {

                        var textWrapper = document.querySelector('.ml3');
                        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                        anime.timeline({ loop: true })
                            .add({
                                targets: '.ml3 .letter',
                                opacity: [0, 1],
                                easing: "easeInOutQuad",
                                duration: 2250,
                                delay: (el, i) => 150 * (i + 1)
                            }).add({
                                targets: '.ml3',
                                opacity: 0,
                                duration: 1000,
                                easing: "easeOutExpo",
                                delay: 1000
                            });
                    }}>텍스트 애니메이션 3</button>
                    <h1 className="ml3">Great Thinkers</h1>
                </div>

                {/* 텍스트 애니메이션 4 */}
                <div style={{ border: 'solid black 1px' }}>
                    <button onClick={() => {

                        var ml4 = {
                            opacityIn: [0, 1],
                            scaleIn: [0.2, 1],
                            scaleOut: 3,
                            durationIn: 800,
                            durationOut: 600,
                            delay: 500,
                        };

                        anime.timeline({ loop: true })
                            .add({
                                targets: '.ml4 .letters-1',
                                translateX: 0,
                                opacity: ml4.opacityIn,
                                scale: ml4.scaleIn,
                                duration: ml4.durationIn
                            }).add({
                                targets: '.ml4 .letters-1',
                                opacity: 0,
                                scale: ml4.scaleOut,
                                duration: ml4.durationOut,
                                easing: "easeInExpo",
                                delay: ml4.delay
                            }).add({
                                targets: '.ml4 .letters-2',
                                opacity: ml4.opacityIn,
                                scale: ml4.scaleIn,
                                duration: ml4.durationIn
                            }).add({
                                targets: '.ml4 .letters-2',
                                translateX: 0,
                                opacity: 0,
                                scale: ml4.scaleOut,
                                duration: ml4.durationOut,
                                easing: "easeInExpo",
                                delay: ml4.delay
                            }).add({
                                targets: '.ml4 .letters-3',
                                translateX: 0,
                                opacity: ml4.opacityIn,
                                scale: ml4.scaleIn,
                                duration: ml4.durationIn
                            }).add({
                                targets: '.ml4 .letters-3',
                                opacity: 0,
                                scale: ml4.scaleOut,
                                duration: ml4.durationOut,
                                easing: "easeInExpo",
                                delay: ml4.delay
                            }).add({
                                targets: '.ml4',
                                opacity: 0,
                                duration: 500,
                                delay: 500
                            });
                    }}>텍스트 애니메이션 4</button>
                    <h1 className="ml4">
                        <span className="letters letters-1">Ready</span>
                        <span className="letters letters-2">Set</span>
                        <span className="letters letters-3">Go!</span>
                    </h1>
                </div>

                {/* 텍스트 애니메이션 5 */}
                <div style={{ border: 'solid black 1px' }}>
                    <button onClick={() => {
                        anime.timeline({ loop: true })
                            .add({
                                targets: '.ml5 .line',
                                opacity: [0.5, 1],
                                scaleX: [0, 1],
                                easing: "easeInOutExpo",
                                duration: 700
                            }).add({
                                targets: '.ml5 .line',
                                duration: 600,
                                easing: "easeOutExpo",
                                translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
                            }).add({
                                targets: '.ml5 .ampersand',
                                opacity: [0, 1],
                                scaleY: [0.5, 1],
                                easing: "easeOutExpo",
                                duration: 600,
                                offset: '-=600'
                            }).add({
                                targets: '.ml5 .letters-left',
                                opacity: [0, 1],
                                translateX: ["0.5em", 0],
                                easing: "easeOutExpo",
                                duration: 600,
                                offset: '-=300'
                            }).add({
                                targets: '.ml5 .letters-right',
                                opacity: [0, 1],
                                translateX: ["-0.5em", 0],
                                easing: "easeOutExpo",
                                duration: 600,
                                offset: '-=600'
                            }).add({
                                targets: '.ml5',
                                opacity: 0,
                                duration: 1000,
                                easing: "easeOutExpo",
                                delay: 1000
                            });
                    }}>텍스트 애니메이션 5</button>
                    <h1 className="ml5">
                        <span className="text-wrapper">
                            <span className="line line1"></span>
                            <span className="letters letters-left">Signal</span>
                            <span className="letters ampersand">&amp;</span>
                            <span className="letters letters-right">Noise</span>
                            <span className="line line2"></span>
                        </span>
                    </h1>
                </div>

                {/* 텍스트 애니메이션 6 */}
                <div style={{ border: 'solid black 1px' }}>
                    <button onClick={() => {

                        var textWrapper = document.querySelector('.ml6 .letters');
                        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                        anime.timeline({ loop: true })
                            .add({
                                targets: '.ml6 .letter',
                                translateY: ["1.1em", 0],
                                translateZ: 0,
                                duration: 750,
                                delay: (el, i) => 50 * i
                            }).add({
                                targets: '.ml6',
                                opacity: 0,
                                duration: 1000,
                                easing: "easeOutExpo",
                                delay: 1000
                            });
                    }}>텍스트 애니메이션 6</button>
                    <h1 className="ml6">
                        <span className="text-wrapper">
                            <span className="letters">Beautiful Questions</span>
                        </span>
                    </h1>
                </div>

                {/* 텍스트 애니메이션 7 */}
                <div style={{ border: 'solid black 1px' }}>
                    <button onClick={() => {
                        var textWrapper = document.querySelector('.ml7 .letters');
                        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                        anime.timeline({ loop: true })
                            .add({
                                targets: '.ml7 .letter',
                                translateY: ["1.1em", 0],
                                translateX: ["0.55em", 0],
                                translateZ: 0,
                                rotateZ: [180, 0],
                                duration: 750,
                                easing: "easeOutExpo",
                                delay: (el, i) => 50 * i
                            }).add({
                                targets: '.ml7',
                                opacity: 0,
                                duration: 1000,
                                easing: "easeOutExpo",
                                delay: 1000
                            });
                    }}>텍스트 애니메이션 7</button>
                    <h1 className="ml7">
                        <span className="text-wrapper">
                            <span className="letters">Reality is broken</span>
                        </span>
                    </h1>
                </div>

                {/* 텍스트 애니메이션 8 */}
                <div style={{ border: 'solid black 1px' }}>
                    <button onClick={() => {
                        anime.timeline({ loop: true })
                            .add({
                                targets: '.ml8 .circle-white',
                                scale: [0, 3],
                                opacity: [1, 0],
                                easing: "easeInOutExpo",
                                rotateZ: 360,
                                duration: 1100
                            }).add({
                                targets: '.ml8 .circle-container',
                                scale: [0, 1],
                                duration: 1100,
                                easing: "easeInOutExpo",
                                offset: '-=1000'
                            }).add({
                                targets: '.ml8 .circle-dark',
                                scale: [0, 1],
                                duration: 1100,
                                easing: "easeOutExpo",
                                offset: '-=600'
                            }).add({
                                targets: '.ml8 .letters-left',
                                scale: [0, 1],
                                duration: 1200,
                                offset: '-=550'
                            }).add({
                                targets: '.ml8 .bang',
                                scale: [0, 1],
                                rotateZ: [45, 15],
                                duration: 1200,
                                offset: '-=1000'
                            }).add({
                                targets: '.ml8',
                                opacity: 0,
                                duration: 1000,
                                easing: "easeOutExpo",
                                delay: 1400
                            });

                        anime({
                            targets: '.ml8 .circle-dark-dashed',
                            rotateZ: 360,
                            duration: 8000,
                            easing: "linear",
                            loop: true
                        });
                    }}>텍스트 애니메이션 8 전체화면 전환 필요</button>
                    {/* <h1 className="ml8">
                        <span className="letters-container">
                            <span className="letters letters-left">Hi</span>
                            <span className="letters bang">!</span>
                        </span>
                        <span className="circle circle-white"></span>
                        <span className="circle circle-dark"></span>
                        <span className="circle circle-container"><span className="circle circle-dark-dashed"></span></span>
                    </h1> */}
                </div>

                {/* 텍스트 애니메이션 9 */}
                <div style={{ background: 'black' }}>
                    <button onClick={() => {
                        var textWrapper = document.querySelector('.ml9 .letters');
                        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
                        
                        anime.timeline({loop: true})
                          .add({
                            targets: '.ml9 .letter',
                            scale: [0, 1],
                            duration: 1500,
                            elasticity: 600,
                            delay: (el, i) => 45 * (i+1)
                          }).add({
                            targets: '.ml9',
                            opacity: 0,
                            duration: 1000,
                            easing: "easeOutExpo",
                            delay: 1000
                          });
                    }}>텍스트 애니메이션 9</button>
                    <h1 className="ml9">
                        <span className="text-wrapper">
                            <span className="letters">Coffee mornings</span>
                        </span>
                    </h1>
                </div>

                {/* 텍스트 애니메이션 10 */}
                <div style={{ background: 'black' }}>
                    <button onClick={() => {
                        var textWrapper = document.querySelector('.ml10 .letters');
                        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                        anime.timeline({ loop: true })
                            .add({
                                targets: '.ml10 .letter',
                                rotateY: [-90, 0],
                                duration: 1300,
                                delay: (el, i) => 45 * i
                            }).add({
                                targets: '.ml10',
                                opacity: 0,
                                duration: 1000,
                                easing: "easeOutExpo",
                                delay: 1000
                            });
                    }}>텍스트 애니메이션 10</button>
                    <h1 className="ml10">
                        <span className="text-wrapper">
                            <span className="letters">Domino Dreams</span>
                        </span>
                    </h1>
                </div>

                {/* 텍스트 애니메이션 11 */}
                <div style={{ background: 'black' }}>
                    <button onClick={() => {
                        var textWrapper = document.querySelector('.ml11 .letters');
                        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

                        anime.timeline({ loop: true })
                            .add({
                                targets: '.ml11 .line',
                                scaleY: [0, 1],
                                opacity: [0.5, 1],
                                easing: "easeOutExpo",
                                duration: 700
                            })
                            .add({
                                targets: '.ml11 .line',
                                translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
                                easing: "easeOutExpo",
                                duration: 700,
                                delay: 100
                            }).add({
                                targets: '.ml11 .line',
                                opacity: 0,
                                duration: 1000,
                                easing: "easeOutExpo",
                                delay: 1000
                            });

                        anime.timeline({ loop: true }).add({
                                targets: '.ml11 .letter',
                                opacity: [0, 1],
                                easing: "easeOutExpo",
                                duration: 600,
                                offset: '-=775',
                                delay: (el, i) => {
                                    return 700 + 34 * (i + 1);
                                }
                            }).add({
                                targets: '.ml11 .letter',
                                opacity: 0,
                                duration: 1000,
                                easing: "easeOutExpo",
                                delay: 1000
                            });
                    }}>텍스트 애니메이션 11</button>
                    <h1 className="ml11">
                        <span className="text-wrapper">
                            <span className="line line1"></span>
                            <span className="letters">Hello Goodbye</span>
                        </span>
                    </h1>
                </div>

                {/* 텍스트 애니메이션 12 */}
                <div style={{ background: 'black' }}>
                    <button onClick={() => {
                        var textWrapper = document.querySelector('.ml12');
                        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                        anime.timeline({ loop: true })
                            .add({
                                targets: '.ml12 .letter',
                                translateX: [40, 0],
                                translateZ: 0,
                                opacity: [0, 1],
                                easing: "easeOutExpo",
                                duration: 1200,
                                delay: (el, i) => 500 + 30 * i
                            }).add({
                                targets: '.ml12 .letter',
                                translateX: [0, -30],
                                opacity: [1, 0],
                                easing: "easeInExpo",
                                duration: 1100,
                                delay: (el, i) => 100 + 30 * i
                            });
                    }}>텍스트 애니메이션 12</button>
                    <h1 className="ml12">A new production</h1>
                </div>

                {/* 텍스트 애니메이션 13 */}
                <div style={{ background: 'black' }}>
                    <button onClick={() => {
                        var textWrapper = document.querySelector('.ml13');
                        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                        anime.timeline({ loop: true })
                            .add({
                                targets: '.ml13 .letter',
                                translateY: [100, 0],
                                translateZ: 0,
                                opacity: [0, 1],
                                easing: "easeOutExpo",
                                duration: 1400,
                                delay: (el, i) => 300 + 30 * i
                            }).add({
                                targets: '.ml13 .letter',
                                translateY: [0, -100],
                                opacity: [1, 0],
                                easing: "easeInExpo",
                                duration: 1200,
                                delay: (el, i) => 100 + 30 * i
                            });
                    }}>텍스트 애니메이션 13</button>
                    <h1 className="ml13">Rising Strong</h1>
                </div>

                {/* 텍스트 애니메이션 14 */}
                <div style={{ background: 'black' }}>
                    <button onClick={() => {
                        var textWrapper = document.querySelector('.ml14 .letters');
                        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                        anime.timeline({ loop: true })
                            .add({
                                targets: '.ml14 .line',
                                scaleX: [0, 1],
                                opacity: [0.5, 1],
                                easing: "easeInOutExpo",
                                duration: 900
                            }).add({
                                targets: '.ml14 .letter',
                                opacity: [0, 1],
                                translateX: [40, 0],
                                translateZ: 0,
                                scaleX: [0.3, 1],
                                easing: "easeOutExpo",
                                duration: 800,
                                offset: '-=600',
                                delay: (el, i) => 150 + 25 * i
                            }).add({
                                targets: '.ml14',
                                opacity: 0,
                                duration: 1000,
                                easing: "easeOutExpo",
                                delay: 1000
                            });
                    }}>텍스트 애니메이션 14 속도 문제 해결 필요</button>
                    <h1 className="ml14">
                        <span className="text-wrapper">
                            <span className="letters">Find Your Element</span>
                            <span className="line"></span>
                        </span>
                    </h1>
                </div>

                {/* 텍스트 애니메이션 15 */}
                <div style={{ border: 'solid black 1px' }}>
                    <button onClick={() => {
                        anime.timeline({ loop: true })
                            .add({
                                targets: '.ml15 .word',
                                scale: [14, 1],
                                opacity: [0, 1],
                                easing: "easeOutCirc",
                                duration: 800,
                                delay: (el, i) => 800 * i
                            }).add({
                                targets: '.ml15',
                                opacity: 0,
                                duration: 1000,
                                easing: "easeOutExpo",
                                delay: 1000
                            });
                    }}>텍스트 애니메이션 15</button>
                    <h1 className="ml15">
                        <span className="word">Out</span>
                        <span className="word">now</span>
                    </h1>
                </div>

                {/* 텍스트 애니메이션 16 */}
                <div style={{ background: 'black' }}>
                    <button onClick={() => {
                        var textWrapper = document.querySelector('.ml16');
                        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

                        anime.timeline({ loop: true })
                            .add({
                                targets: '.ml16 .letter',
                                translateY: [-100, 0],
                                easing: "easeOutExpo",
                                duration: 1400,
                                delay: (el, i) => 30 * i
                            }).add({
                                targets: '.ml16',
                                opacity: 0,
                                duration: 1000,
                                easing: "easeOutExpo",
                                delay: 1000
                            });
                    }}>텍스트 애니메이션 16</button>
                    <h1 className="ml16">Made with love</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
