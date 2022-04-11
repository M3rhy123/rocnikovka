import './App.css';
import Print from './index.js'

/** sound funktions*/
const ATM_beep = () => {
    let sound = new Audio('./public/sound/ATM_Beep.wav');
    sound.play().catch();
}

const card_success = () => {
    let sound = new Audio('./public/sound/card_success.wav');
    sound.play().catch();
}

const led_on = () => {
    let sound = new Audio('./public/sound/led_on.wav');
    sound.play().catch();
}

let card = document.getElementById('card')
let card2 = document.getElementById('card2')
let led = document.getElementById('led')
let led2 = document.getElementById('led2')
let led3 = document.getElementById('led3')
let led4 = document.getElementById('led4')

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
let num_btn = document.getElementById('num_btn0')
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

let Blc = 100;
let pin;
let page = 0;

/** card load logic */
const cardClick = () => {
    console.log("smrdíš")
    if (page === 0) {
        card.style.transform = "translateY(-170px) translateX(50px) scale(0.75)"

        setTimeout(() => {
            led.style.backgroundColor = "#00bf16";
            led_on();
        }, 1000);

        setTimeout(() => {
            led2.style.backgroundColor = "#00bf16";
        }, 1250);

        setTimeout(() => {
            led3.style.backgroundColor = "#00bf16";
        }, 1500);

        setTimeout(() => {
            led4.style.backgroundColor = "#00bf16";
        }, 1750);

        setTimeout(() => {
            led.style.backgroundColor = "#004708";
            led2.style.backgroundColor = "#004708";
            led3.style.backgroundColor = "#004708";
            led4.style.backgroundColor = "#004708";
            card.style.transform = "none"
        }, 2500);

        setTimeout(() => {
            page = 10;
            Print();
        }, 3000);

        setTimeout(() => {
            page = 1;
            Print();
        }, 5000);
    }
}
card.onclick = cardClick;

const card2Click = () => {
    console.log("smrdíš")
    if (page === 0) {
        card2.style.transform = "translateY(-330px) translateX(50px) scale(0.75)"

        setTimeout(() => {
            led.style.backgroundColor = "#00bf16";
            led_on();
        }, 1000);

        setTimeout(() => {
            led2.style.backgroundColor = "#00bf16";
        }, 1250);

        setTimeout(() => {
            led3.style.backgroundColor = "#00bf16";
        }, 1500);

        setTimeout(() => {
            led4.style.backgroundColor = "#00bf16";
        }, 1750);

        setTimeout(() => {
            led.style.backgroundColor = "#004708";
            led2.style.backgroundColor = "#004708";
            led3.style.backgroundColor = "#004708";
            led4.style.backgroundColor = "#004708";
            card2.style.transform = "none"
        }, 2500);

        setTimeout(() => {
            page = 10;
            Print();
        }, 3000);

        setTimeout(() => {
            page = 1;
            Print();
        }, 5000);
    }
}
card2.onclick = card2Click;

/** pin logic*/
//const star = "*";

const Pin_function = () => {
    document.getElementById('pin');
}

num_btn.onclick = Pin_function;

/** pages body */

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
                    <div className='page_msg'>Enter a pin:</div>
                    <input type="number" id='pin'/>
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
                        <div className='atm_btn'>Payment</div>
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
            /** Widthraw */
            return (
                <div className='menu'>
                    <div id='left'>
                        <div className='atm_btn_short'>1$</div>
                        <div className='atm_btn_short'>2$</div>
                        <div className='atm_btn_short'>5$</div>
                        <div className='atm_btn_short'>10$</div>
                    </div>
                    <div className='page_msg'>How much do you<br/> want to Withdraw?</div>
                    <div id='right'>
                        <div className='atm_btn_short'>20$</div>
                        <div className='atm_btn_short'>50$</div>
                        <div className='atm_btn_short'>Other</div>
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
                        <div className='atm_btn_short'>Other</div>
                        <div className='atm_btn_short'>Menu</div>
                    </div>
                </div>
            );
        case 7:
            /** Choose Value*/
            return (
                <div className='menu'>
                    <div id='left'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                    </div>
                    <div id='right'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn'>Menu</div>
                    </div>
                </div>
            );
        case 8:
            /** Change pin */
            return (
                <div className='menu'>
                    <div id='left'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                    </div>
                    <div id='right'>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn_i'/>
                        <div className='atm_btn'>Menu</div>
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
                    <div className='page_msg'>THANKS FOR YOUR VISIT ❤️<br/><a className='sucess_msg'>**SYSTEM FAILED
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


/** buttons logic */
const bnt1_click = () => {
    switch (page) {
        case 3:
            setTimeout(() => {
                page = 4;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 5:
            Blc = Blc - 1;
            break;
        case 6:
            Blc = Blc + 1;
            break;
    }
}
btn1.onclick = bnt1_click;

const bnt2_click = () => {
    switch (page) {
        case 3:
            setTimeout(() => {
                page = 5;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 5:
            Blc = Blc - 2;
            break;
        case 6:
            Blc = Blc + 2;
            break;
    }
}
btn2.onclick = bnt2_click;

const bnt3_click = () => {
    switch (page) {
        case 3:
            setTimeout(() => {
                page = 6;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 5:
            Blc = Blc - 5;
            break;
        case 6:
            Blc = Blc + 5;
            break;
    }
}
btn3.onclick = bnt3_click;

const bnt4_click = () => {
    switch (page) {
        case 1:
            //lang = "eng"
            setTimeout(() => {
                page = 3;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 5:
            Blc = Blc - 10;
            break;
        case 6:
            Blc = Blc + 10;
            break;
    }
}
btn4.onclick = bnt4_click;

const bnt5_click = () => {
    switch (page) {
        case 3:
            setTimeout(() => {
                page = 8;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 5:
            Blc = Blc - 20;
            break;
        case 6:
            Blc = Blc + 20;
            break;
    }
}
btn5.onclick = bnt5_click;

const bnt6_click = () => {
    switch (page) {
        case 3:
            setTimeout(() => {
                page = 9;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 5:
            Blc = Blc - 50;
            break;
        case 6:
            Blc = Blc + 50;
            break;
    }
}
btn6.onclick = bnt6_click;

const bnt7_click = () => {
    switch (page) {
        case 5:
            setTimeout(() => {
                page = 7;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
        case 6:
            setTimeout(() => {
                page = 7;
                Print();
            }, 1000);
            page = 10;
            Print();
            break;
    }
}
btn7.onclick = bnt7_click;

const bnt8_click = () => {
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
const btnEscClick = () => {
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


export default App;


