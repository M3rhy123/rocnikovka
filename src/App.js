import './App.css';
import Print from './index.js'

let pin1 = "2756";
let pin2 = "6969";
let usedCard = 1;
let card = document.getElementById('card')
let card2 = document.getElementById('card2')
let led = document.getElementById('led')
let led2 = document.getElementById('led2')
let led3 = document.getElementById('led3')
let led4 = document.getElementById('led4')
let money_door = document.getElementById('money_door')
let money_stack = document.getElementById('money_stack')

let lastNum = 0;
let Blc = 100;
let Blc2 = 258;
//let pin;
let page = 0;

/** sound declaraion & function*/
let sound1 = document.getElementById('sound1')
let sound2 = document.getElementById('sound2')
let sound3 = document.getElementById('sound3')
let sound4 = document.getElementById('sound4')

const beep_sound = () => {
    setTimeout(() => {
        sound1.play();
    }, 1);
}

const AcessX = () => {
    setTimeout(() => {
        sound3.play();
    }, 1);
}

const AcessOK = () => {
    setTimeout(() => {
        sound4.play();
    }, 1);
}

/** display buttons declaration */
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')

/** numpad buttons declaration */
let num_btn0 = document.getElementById('num_btn0')
let num_btn1 = document.getElementById('num_btn1')
let num_btn2 = document.getElementById('num_btn2')
let num_btn3 = document.getElementById('num_btn3')
let num_btn4 = document.getElementById('num_btn4')
let num_btn5 = document.getElementById('num_btn5')
let num_btn6 = document.getElementById('num_btn6')
let num_btn7 = document.getElementById('num_btn7')
let num_btn8 = document.getElementById('num_btn8')
let num_btn9 = document.getElementById('num_btn9')
let num_btn_esc = document.getElementById('num_btn_esc')
let num_btn_backspace = document.getElementById('num_btn_backspace')
let num_btn_enter = document.getElementById('num_btn_enter')

/** card load logic */
const cardClick = () => {
    console.log("Pin1: " + pin1 + " Pin2: " + pin2)
    usedCard = 1;
    if (page === 0) {
        card.style.transform = "translateY(-170px) translateX(50px) scale(0.75)"
        setTimeout(() => {
            led.style.backgroundColor = "#00bf16";
            sound2.play();
        }, 1000);

        setTimeout(() => {
            led2.style.backgroundColor = "#00bf16";
        }, 1100);

        setTimeout(() => {
            led3.style.backgroundColor = "#00bf16";
        }, 1200);

        setTimeout(() => {
            led4.style.backgroundColor = "#00bf16";
        }, 1300);

        setTimeout(() => {
            led.style.backgroundColor = "#004708";
            led2.style.backgroundColor = "#004708";
            led3.style.backgroundColor = "#004708";
            led4.style.backgroundColor = "#004708";
            sound2.play();
            card.style.transform = "none"
        }, 1600);

        setTimeout(() => {
            page = 10;
            Print();
        }, 2000);

        setTimeout(() => {
            page = 2;
            Print();
        }, 3000);
    }
}
card.onclick = cardClick;

const card2Click = () => {
    console.log("Pin1: " + pin1 + " Pin2: " + pin2)
    usedCard = 2;
    if (page === 0) {
        card2.style.transform = "translateY(-320px) translateX(50px) scale(0.75)"
        setTimeout(() => {
            led.style.backgroundColor = "#00bf16";
            sound2.play();
        }, 1000);

        setTimeout(() => {
            led2.style.backgroundColor = "#00bf16";
        }, 1100);

        setTimeout(() => {
            led3.style.backgroundColor = "#00bf16";
        }, 1200);

        setTimeout(() => {
            led4.style.backgroundColor = "#00bf16";
        }, 1300);

        setTimeout(() => {
            led.style.backgroundColor = "#004708";
            led2.style.backgroundColor = "#004708";
            led3.style.backgroundColor = "#004708";
            led4.style.backgroundColor = "#004708";
            sound2.play();
            card2.style.transform = "none"
        }, 1600);

        setTimeout(() => {
            page = 10;
            Print();
        }, 2000);

        setTimeout(() => {
            page = 2;
            Print();
        }, 3000);
    }
}
card2.onclick = card2Click;

/** buttons logic */
const bnt1_click = () => {
    beep_sound();
    switch (page) {
        case 3:

            setTimeout(() => {
                page = 4;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 6:
            Blc = Blc + 1;
            setTimeout(() => {
                page = 3;
                Print();
            }, 1000);
            setTimeout(() => {
                page = 11;
                Print();
            }, 500);
            page = 10;
            Print();
            break;
    }
}
btn1.onclick = bnt1_click;

const bnt2_click = () => {
    beep_sound();
    switch (page) {
        case 3:
            setTimeout(() => {
                page = 5;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 6:
            Blc = Blc + 2;
            setTimeout(() => {
                page = 3;
                Print();
            }, 1000);
            setTimeout(() => {
                page = 11;
                Print();
            }, 500);
            page = 10;
            Print();
            break;
    }
}
btn2.onclick = bnt2_click;

const bnt3_click = () => {
    beep_sound();
    switch (page) {
        case 3:
            setTimeout(() => {
                page = 6;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 6:
            Blc = Blc + 5;
            setTimeout(() => {
                page = 3;
                Print();
            }, 1000);
            setTimeout(() => {
                page = 11;
                Print();
            }, 500);
            page = 10;
            Print();
            break;
    }
}
btn3.onclick = bnt3_click;

const bnt4_click = () => {
    beep_sound();
    switch (page) {
        case 1:
            //lang = "eng"
            setTimeout(() => {
                page = 2;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 6:
            Blc = Blc + 10;
            setTimeout(() => {
                page = 3;
                Print();
            }, 1000);
            setTimeout(() => {
                page = 11;
                Print();
            }, 500);
            page = 10;
            Print();
            break;
    }
}
btn4.onclick = bnt4_click;

const bnt5_click = () => {
    beep_sound();
    switch (page) {
        case 3:
            setTimeout(() => {
                page = 8;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 6:
            Blc = Blc + 20;
            setTimeout(() => {
                page = 3;
                Print();
            }, 1000);
            setTimeout(() => {
                page = 11;
                Print();
            }, 500);
            page = 10;
            Print();
            break;
    }
}
btn5.onclick = bnt5_click;

const bnt6_click = () => {
    beep_sound();
    switch (page) {
        case 6:
            Blc = Blc + 50;
            setTimeout(() => {
                page = 3;
                Print();
            }, 1000);
            setTimeout(() => {
                page = 11;
                Print();
            }, 500);
            page = 10;
            Print();
    }
}
btn6.onclick = bnt6_click;

const bnt7_click = () => {
    beep_sound();
    switch (page) {
        case 6:
            Blc = Blc + 1000;
            setTimeout(() => {
                page = 3;
                Print();
            }, 1000);
            setTimeout(() => {
                page = 11;
                Print();
            }, 500);
            page = 10;
            Print();
            break;
    }
}
btn7.onclick = bnt7_click;

const bnt8_click = () => {
    beep_sound();
    switch (page) {
        case 1:
            //lang = "cs";
            setTimeout(() => {
                page = 2;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 2:
            setTimeout(() => {
                page = 3;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 4:
            setTimeout(() => {
                page = 3;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 5:
            setTimeout(() => {
                page = 3;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 6:
            setTimeout(() => {
                page = 3;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 7:
            setTimeout(() => {
                page = 3;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 8:
            setTimeout(() => {
                page = 3;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 9:
            setTimeout(() => {
                page = 3;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
    }
}
btn8.onclick = bnt8_click;


/** numpad logic */
const num1 = () => {
    beep_sound();
    lastNum = 1;
    let pin = document.getElementById('pin');
    let pin_num = document.getElementById('pin_value');
    let withdraw = document.getElementById('withdraw');
    let new_pin = document.getElementById('new_pin');

    switch (page) {
        case 2:
            pin.innerText = pin.innerText + '*';
            pin_num.value = pin_num.value + '1';
            break;
        case 5:
            withdraw.value = withdraw.value + '1';
            break;
        case 8:
            new_pin.innerText = new_pin.innerText + '1';
            break;

    }
}

num_btn1.onclick = num1;

const num2 = () => {
    beep_sound();
    lastNum = 2;
    let pin = document.getElementById('pin');
    let pin_num = document.getElementById('pin_value');
    let withdraw = document.getElementById('withdraw');
    let new_pin = document.getElementById('new_pin');
    switch (page) {
        case 2:
            pin.innerText = pin.innerText + '*';
            pin_num.value = pin_num.value + '2';
            break;
        case 5:
            withdraw.value = withdraw.value + '2';
            break;
        case 8:
            new_pin.innerText = new_pin.innerText + '2';
            break;
    }
}

num_btn2.onclick = num2;

const num3 = () => {
    beep_sound();
    lastNum = 3;
    let pin = document.getElementById('pin');
    let pin_num = document.getElementById('pin_value');
    let withdraw = document.getElementById('withdraw');
    let new_pin = document.getElementById('new_pin');
    switch (page) {
        case 2:
            pin.innerText = pin.innerText + '*';
            pin_num.value = pin_num.value + '3';
            break;
        case 5:
            withdraw.value = withdraw.value + '3';
            break;
        case 8:
            new_pin.innerText = new_pin.innerText + '3';
            break;
    }
}

num_btn3.onclick = num3;

const num4 = () => {
    beep_sound();
    lastNum = 4;
    let pin = document.getElementById('pin');
    let pin_num = document.getElementById('pin_value');
    let withdraw = document.getElementById('withdraw');
    let new_pin = document.getElementById('new_pin');
    switch (page) {
        case 2:
            pin.innerText = pin.innerText + '*';
            pin_num.value = pin_num.value + '4';
            break;
        case 5:
            withdraw.value = withdraw.value + '4';
            break;
        case 8:
            new_pin.innerText = new_pin.innerText + '4';
            break;
    }
}

num_btn4.onclick = num4;

const num5 = () => {
    beep_sound();
    lastNum = 5;
    let pin = document.getElementById('pin');
    let pin_num = document.getElementById('pin_value');
    let withdraw = document.getElementById('withdraw');
    let new_pin = document.getElementById('new_pin');
    switch (page) {
        case 2:
            pin.innerText = pin.innerText + '*';
            pin_num.value = pin_num.value + '5';
            break;
        case 5:
            withdraw.value = withdraw.value + '5';
            break;
        case 8:
            new_pin.innerText = new_pin.innerText + '5';
            break;
    }
}

num_btn5.onclick = num5;

const num6 = () => {
    beep_sound();
    lastNum = 6;
    let pin = document.getElementById('pin');
    let pin_num = document.getElementById('pin_value');
    let withdraw = document.getElementById('withdraw');
    let new_pin = document.getElementById('new_pin');
    switch (page) {
        case 2:
            pin.innerText = pin.innerText + '*';
            pin_num.value = pin_num.value + '6';
            break;
        case 5:
            withdraw.value = withdraw.value + '6';
            break;
        case 8:
            new_pin.innerText = new_pin.innerText + '6';
            break;
    }
}

num_btn6.onclick = num6;

const num7 = () => {
    beep_sound();
    lastNum = 7;
    let pin = document.getElementById('pin');
    let pin_num = document.getElementById('pin_value');
    let withdraw = document.getElementById('withdraw');
    let new_pin = document.getElementById('new_pin');
    switch (page) {
        case 2:
            pin.innerText = pin.innerText + '*';
            pin_num.value = pin_num.value + '7';
            break;
        case 5:
            withdraw.value = withdraw.value + '7';
            break;
        case 8:
            new_pin.innerText = new_pin.innerText + '7';
            break;
    }
}

num_btn7.onclick = num7;

const num8 = () => {
    beep_sound();
    lastNum = 8;
    let pin = document.getElementById('pin');
    let pin_num = document.getElementById('pin_value');
    let withdraw = document.getElementById('withdraw');
    let new_pin = document.getElementById('new_pin');
    switch (page) {
        case 2:
            pin.innerText = pin.innerText + '*';
            pin_num.value = pin_num.value + '8';
            break;
        case 5:
            withdraw.value = withdraw.value + '8';
            break;
        case 8:
            new_pin.innerText = new_pin.innerText + '8';
            break;
    }
}

num_btn8.onclick = num8;

const num9 = () => {
    beep_sound();
    lastNum = 9;
    let pin = document.getElementById('pin');
    let pin_num = document.getElementById('pin_value');
    let withdraw = document.getElementById('withdraw');
    let new_pin = document.getElementById('new_pin');
    switch (page) {
        case 2:
            pin.innerText = pin.innerText + '*';
            pin_num.value = pin_num.value + '9';
            break;
        case 5:
            withdraw.value = withdraw.value + '9';
            break;
        case 8:
            new_pin.innerText = new_pin.innerText + '9';
            break;
    }
}

num_btn9.onclick = num9;

const num0 = () => {
    beep_sound();
    lastNum = 0;
    let pin = document.getElementById('pin');
    let pin_num = document.getElementById('pin_value');
    let withdraw = document.getElementById('withdraw');
    let new_pin = document.getElementById('new_pin');
    switch (page) {
        case 2:
            pin.innerText = pin.innerText + '*';
            pin_num.value = pin_num.value + '0';
            break;
        case 5:
            withdraw.value = withdraw.value + '0';
            break;
        case 8:
            new_pin.innerText = new_pin.innerText + '0';
            break;
    }
}

num_btn0.onclick = num0;

const btnEnterClick = () => {
    beep_sound();
    let pin = document.getElementById('pin');
    let pin_num = document.getElementById('pin_value');
    let new_pin = document.getElementById('new_pin');
    let withdraw = document.getElementById('withdraw');
    let wrong = document.getElementById('wrong');
    let smallMoney = document.getElementById('smallMoney');
    switch (page) {
        case 2:
            if (usedCard === 1) {
                if (pin_num.value === pin1) {
                    pin.innerHTML = '';
                    pin_num.value = '';
                    AcessOK();
                    setTimeout(() => {
                        page = 10;
                        Print();
                    }, 100);
                    setTimeout(() => {
                        page = 3;
                        Print();
                    }, 1000);
                } else {

                    pin.innerHTML = "";
                    pin_num.value = '';
                    wrong.style.display = "block";
                    AcessX();
                    setTimeout(() => {
                        wrong.style.display = "none";
                    }, 2500);
                }
            } else {
                if (pin_num.value === pin2) {
                    pin.innerHTML = "";
                    pin_num.value = '';
                    AcessOK();
                    setTimeout(() => {
                        page = 10;
                        Print();
                    }, 100);
                    setTimeout(() => {
                        page = 3;
                        Print();
                    }, 1000);
                } else {
                    pin.innerHTML = "";
                    pin_num.value = '';
                    wrong.style.display = "block";
                    AcessX();
                    setTimeout(() => {
                        wrong.style.display = "none";
                    }, 2500);
                }

            }
            break;
        case 5:
            switch (usedCard) {
                case 1:
                    if (Blc >= withdraw.value) {
                        Blc = Blc - withdraw.value;
                        setTimeout(() => {
                            money_door.style.animation.repeat(1);
                            money_door.style.animation = "open 6s"
                        }, 1);
                        setTimeout(() => {
                            money_stack.style.display = "none"
                        }, 3000);
                        setTimeout(() => {
                            page = 11;
                            Print();
                        }, 3500);
                        setTimeout(() => {
                            page = 3;
                            Print();
                        }, 5000);
                    } else {
                        smallMoney.style.display = "block";
                        withdraw.style.display = "none";
                        setTimeout(() => {
                            page = 3;
                            Print();
                        }, 2000);
                    }
                    break;
                case 2:
                    if (Blc2 >= withdraw.value) {
                        Blc2 = Blc2 - withdraw.value;
                        setTimeout(() => {
                            money_door.style.animation.repeat(1);
                            money_door.style.animation = "open 6s"
                        }, 1);
                        setTimeout(() => {
                            money_stack.style.display = "none"
                        }, 3000);
                        setTimeout(() => {
                            page = 11;
                            Print();
                        }, 3500);
                        setTimeout(() => {
                            page = 3;
                            Print();
                        }, 5000);
                    } else {
                        smallMoney.style.display = "block";
                        withdraw.style.display = "none";
                        setTimeout(() => {
                            page = 3;
                            Print();
                        }, 2000);
                    }
            }
            break;
        case 8:
            switch (usedCard) {
                case 1:
                    pin1 = new_pin.innerText;
                    setTimeout(() => {
                        page = 10;
                        Print();
                    }, 100);
                    setTimeout(() => {
                        page = 9;
                        Print();
                    }, 1000);
                    new_pin.value = '';
                    break;
                case 2:
                    pin2 = new_pin.innerText;
                    setTimeout(() => {
                        page = 10;
                        Print();
                    }, 100);
                    setTimeout(() => {
                        page = 11;
                        Print();
                    }, 500);
                    setTimeout(() => {
                        page = 10;
                        Print();
                    }, 1000);
                    setTimeout(() => {
                        page = 3;
                        Print();
                    }, 1500);
                    new_pin.value = '';
                    break;
            }
            break;
    }
}

num_btn_enter.onclick = btnEnterClick;

const bntBackClick = () => {
    beep_sound();
    let pin = document.getElementById('pin');
    let pin_num = document.getElementById('pin_value');
    let withdraw = document.getElementById('withdraw');
    switch (page) {
        case 2:
            pin.innerText = pin.innerText.slice(0, -1);
            pin_num.value = (pin_num.value - lastNum) / 10
            break;
        case 8:
            withdraw.value = (withdraw.value - lastNum) / 10
    }
}

num_btn_backspace.onclick = bntBackClick;


const btnEscClick = () => {
    beep_sound();
    if (page !== 0) {
        page = 10;
        Print();
        setTimeout(() => {
            page = 12;
            Print();
        }, 500);
        setTimeout(() => {
            page = 0;
            Print();
        }, 3000);
    }
}

num_btn_esc.onclick = btnEscClick;

/** atm pages functions*/
const App = () => {
    switch (page) {
        case 0:
            /** ad */
            return (
                <div/>
            );
        case 1:
            /** Langue choose */
            return (
                <div className='menu'>
                    <div id='left'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn'>ENG</div>
                    </div>
                    <div className='page_msg'>Choose langue/<br/>Zvolte jazyk:</div>
                    <div id='right'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn'>CZE</div>
                    </div>
                </div>
            );
        case 2:
            /** Pin page */
            return (
                <div className='menu'>
                    <div className='page_msg long'>Enter a pin:</div>
                    <div className='pin' id='pin'/>
                    <div id='wrong' className='wrong'>Acess denied!<br/>Wrong pin</div>
                    <input className='pin_value' id='pin_value'/>
                </div>
            );
        case 3:
            /** Menu */
            return (
                <div className='menu'>
                    <div id='left'>
                        <div className='atm_btn' id='bal'>Balance</div>
                        <div className='atm_btn'>Withdraw</div>
                        <div className='atm_btn'>Deposit</div>
                        <div className='atm_btn'/>
                    </div>
                    <div id='right'>
                        <div className='atm_btn'>Change pin</div>
                        <div className='atm_btn'/>
                        <div className='atm_btn'/>
                        <div className='atm_btn'/>
                    </div>
                </div>
            );
        case 4:
            /** Balance */
            return (
                <div className='menu'>
                    <div id='left'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                    </div>
                    <div className='page_msg'>Your account balance is:<br/> $ {Blc}</div>
                    <div id='right'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn'>Menu</div>
                    </div>
                </div>
            );
        case 5:
            /** Withdraw */
            return (
                <div className='menu'>
                    <div className='page_msg long'>Enter withdraw value:</div>
                    <input className='pin' id='withdraw'/>
                    <div id='smallMoney' className='wrong'>Insufficient account<br/>balance.</div>
                    <div id='right'>
                        <div className='atm_btn_i_s'/>
                        <div className='atm_btn_i_s'/>
                        <div className='atm_btn_i_s'/>
                        <div className='atm_btn_short'>Menu</div>
                    </div>
                </div>
            );
        case 6:
            /** Deposit */
            return (
                <div className='menu'>
                        <div id='left'>
                            <div className='atm_btn_short'>1$</div>
                            <div className='atm_btn_short'>2$</div>
                            <div className='atm_btn_short'>5$</div>
                            <div className='atm_btn_short'>10$</div>
                        </div>
                        <div className='page_msg'>How much do you<br/> want to Deposit?</div>
                        <div id='right'>
                            <div className='atm_btn_short'>20$</div>
                            <div className='atm_btn_short'>50$</div>
                            <div className='atm_btn_short'>1 000$</div>
                            <div className='atm_btn_short'>Menu</div>
                        </div>
                </div>
            );
        case 8:
            /** Change pin */
            return (
                <div className='menu'>
                    <div className='page_msg long'>Enter a new pin:</div>
                    <div className='pin' id='new_pin'/>
                    <div id='ch_success' className='wrong'>Change was <br/>success.</div>
                    <div id='right'>
                        <div className='atm_btn_i_s'/>
                        <div className='atm_btn_i_s'/>
                        <div className='atm_btn_i_s'/>
                        <div className='atm_btn_short'>Menu</div>
                    </div>
                </div>
            );
        case 9:
            /** Payment */
            return (
                <div className='menu'>
                    <div id='left'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                    </div>
                    <div className='page_msg'>Change success</div>
                    <div id='right'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn'>Menu</div>
                    </div>
                </div>
            );
        case 10:
            /** Loading */
            return (
                <div className='menu'>
                    <div id='left'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                    </div>
                    <div className='page_msg'>Loading...</div>
                    <div id='right'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                    </div>
                </div>
            );
        case 11:
            /** Transaction Complete */
            return (
                <div className='menu'>
                    <div id='left'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                    </div>
                    <div className='page_msg'>Transaction complete</div>
                    <div id='right'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                    </div>
                </div>
            );
        case 12:
            /** Thanks */
            return (
                <div className='menu'>
                    <div id='left'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                    </div>
                    <div className='page_msg'>THANKS FOR YOUR VISIT<br/><a className='sucess_msg'>**SYSTEM FAILED
                        SUCESFULLY**</a></div>
                    <div id='right'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                    </div>
                </div>
            );
    }
}

export default App;