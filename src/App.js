import './App.css';
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let Blc = 2;


const App = () => {
    return(
        <div></div>
    )
}

const Pin_page = () => {
  return (
    <header className='page'>
            <a>Please Enter PIN:</a>
            <input type='number'/>
    </header>
  );
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

export default Menu;
