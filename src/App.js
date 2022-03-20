import './App.css';
let Blc = 2;

function Pin_page() {
  return (
    <header className='page'>
            <a>Please Enter PIN:</a>
            <input type='number'/>
    </header>
  );
}

function Menu() {
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

function Balance() {
    return(
        <div className='menu'>
            <div className='page'>
                <div className='balance'>Your account balance is:<br/> $ {Blc}</div>
            </div>
            <div className='atm_btn' id='back_btn'>Menu</div>
        </div>

    );
}
export default Balance;
