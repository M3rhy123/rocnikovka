import './App.css';

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

let Blc = 100000;
let pin;

/** pages body */

const Lang = () => {
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
}

const Pin_page = () => {
    return (
        <header className='page'>
            <div className='page_msg'>Please enter pin</div>
            <div className='atm_btn' id='pin_insert'>{pin}</div>
        </header>
    );
}

const Menu = () => {
    return (
        <div className='menu'>
            <div id='left'>
                <div className='atm_btn'>Account balance</div>
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

}

const Balance = () => {
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
}

const Withdraw = () => {
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
    )
}

const Deposit = () => {
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
    )
}
const Change_pin = () => {
    return (
        <div/>
    )
}

const Payment = () => {
    return (
        <div/>
    )
}

/** pages logic */

let page = 2;
let btn_value;

const bnt1_click = () => {
    btn_value = 1;
}
btn1.onclick = bnt1_click;

const bnt2_click = () => {
    btn_value = 2;
}
btn2.onclick = bnt2_click;

const bnt3_click = () => {
    btn_value = 3;
}
btn3.onclick = bnt3_click;

const bnt4_click = () => {
    btn_value = 4;
}
btn4.onclick = bnt4_click;

const bnt5_click = () => {
    btn_value = 5;
}
btn5.onclick = bnt5_click;

const bnt6_click = () => {
    btn_value = 6;
}
btn6.onclick = bnt6_click;

const bnt7_click = () => {
    btn_value = 7;
}
btn7.onclick = bnt7_click;

const bnt8_click = () => {
    btn_value = 8;
}
btn8.onclick = bnt8_click;


switch (page) {
    /** lang */
    case 0:
    /** pin */
    case 1:
    /** menu */
    case 2:
        switch (btn_value) {
            case 1:
                page = 3;
                break;
            case 2:
                page = 4;
                break;
            case 3:
                page = 5;
                break;
            case 4:
                break;
            case 5:
                page = 6;
                break;
            case 6:
                page = 7;
                break;
        }
    /** bal */
    case 3:
    /** wid */
    case 4:
    /** dep */
    case 5:
    /** chp */
    case 6:
    /** pay */
    case 7:
    /** done */
    case 8:
}

/** pages render */
const page_choose = () => {
    switch (page) {
        case 0:
            return (Lang)
        case 1:
            return (Pin_page)
        case 2:
            return (Menu)
        case 3:
            return (Balance)
        case 4:
            return (Withdraw)
        case 5:
            return (Deposit)
        case 6:
            return (Change_pin)
        case 7:
            return (Payment)
        case 8:
            return (0)
    }
}

export default page_choose();

