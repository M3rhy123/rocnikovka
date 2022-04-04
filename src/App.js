import './App.css';
import './lang.js';
// display buttons
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
//display button funkcions

let page =0;
let sw_num = 0;
let btn_value = 2;

const bnt1_click = () =>{
    btn_value=1;
}
btn1.onclick = bnt1_click();

const bnt2_click = () =>{
    btn_value=2;
}
btn2.onclick = bnt2_click();

const bnt3_click = () =>{
    btn_value=3;
}
btn3.onclick = bnt3_click();

const bnt4_click = () =>{
    btn_value=4;
}
btn4.onclick = bnt4_click();

const bnt5_click = () =>{
    btn_value=5;
}
btn5.onclick = bnt5_click();

const bnt6_click = () =>{
    btn_value=6;
}
btn6.onclick = bnt6_click();

const bnt7_click = () =>{
    btn_value=7;
}
btn7.onclick = bnt7_click();

const bnt8_click = () =>{
    btn_value=8;
}
btn8.onclick = bnt8_click();

//page logic


//numpad buttons
/*let num_btn = document.getElementById('num_btn0')
let num_btn = document.getElementById('num_btn1')
let num_btn = document.getElementById('num_btn2')
let num_btn = document.getElementById('num_btn1')
let num_btn = document.getElementById('num_btn1')
let num_btn = document.getElementById('num_btn1')
let num_btn = document.getElementById('num_btn1')
let num_btn = document.getElementById('num_btn1')
let num_btn = document.getElementById('num_btn1')
let num_btn = document.getElementById('num_btn9')*/
let Blc = 0;



const Pin_page = () => {
  return (
    <header className='page'>
        <div id="Content"></div>
        <div className='atm_btn' id='pin_insert'></div>
    </header>
  );

    const sw_balance = () =>{

    }

}

const Menu = () => {
    return(
      <div className='menu'>
        <div id='left'>
          <div className='atm_btn' id='balance'>Account balance</div>
          <div className='atm_btn' id='withdraw'>Withdraw</div>
          <div className='atm_btn' id='deposit'>Deposit</div>
          <div className='atm_btn'></div>
        </div>
        <div id='right'>
          <div className='atm_btn' id='pin_change'>Change pin</div>
          <div className='atm_btn' id='payment'>Payment</div>
          <div className='atm_btn' id=''></div>
          <div className='atm_btn' id=''></div>
        </div>
      </div>
  );

}

const Balance = () => {
    return(
        <div className='menu'>
            <div className='page'>
                <div className='balance'>Your account balance is:<br/> $ {Blc}</div>
            </div>
            <div className='atm_btn' id='back_btn'>Menu</div>
        </div>

    );
}

const Withdraw = () => {
    return(
        <div className='menu'>
            <div id='left'>
                <div className='atm_btn_short' id='balance'>1$</div>
                <div className='atm_btn_short' id='withdraw'>2$</div>
                <div className='atm_btn_short' id='deposit'>5$</div>
                <div className='atm_btn_short'>10$</div>
            </div>
            <div className='balance'>How much do you<br/> want to Withdraw?</div>
            <div id='right'>
                <div className='atm_btn_short' id='pin_change'>20$</div>
                <div className='atm_btn_short' id='payment'>50$</div>
                <div className='atm_btn_short' id=''>Other</div>
                <div className='atm_btn_short' id=''>Menu</div>
            </div>
        </div>
    )
}

const Deposit = () => {
    return(
        <div className='menu'>
            <div id='left'>
                <div className='atm_btn_short' id='balance'>1$</div>
                <div className='atm_btn_short' id='withdraw'>2$</div>
                <div className='atm_btn_short' id='deposit'>5$</div>
                <div className='atm_btn_short'>10$</div>
            </div>
            <div className='balance'>How much do you<br/> want to Deposit?</div>
            <div id='right'>
                <div className='atm_btn_short' id='pin_change'>20$</div>
                <div className='atm_btn_short' id='payment'>50$</div>
                <div className='atm_btn_short' id=''>Other</div>
                <div className='atm_btn_short' id=''>Menu</div>
            </div>
        </div>
    )
}
const Change_pin = () => {
    return(
        <div></div>
    )
}

const Payment = () => {
    return(
        <div></div>
    )
}

const page_choose = () => {
    switch (sw_num) {
        case 1:
            return(Balance)
            break;
        case 2:
            return(Withdraw)
            break;
        case 3:
            return(Deposit)
            break;
        case 4:
            return(0)
            break;
        case 5:
            return(Pin_page)
            break;
        case 6:
            return(Payment)
            break;
        case 7:
            return(0)
            break;
        case 8:
            return(0)
            break;
        default:
            return(Menu);
    }
}

export default page_choose();

