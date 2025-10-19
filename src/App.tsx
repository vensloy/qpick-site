import basket from './assets/img/header/basket.svg'
import arrow from './assets/img/header/arrow.svg'
import phone from './assets/img/header/phone.svg'
import heart from './assets/img/header/heart.svg'

import './css/header.css'

const App = () => {
  return (
    <>
      <header>
        <section className="header-left">
          <h1 className="logo">QPICK</h1>

          <div className="select-phone-model">
            <img src={ phone } alt="" />
            <p className='select-phone-model-text'>Выбрать модель телефона</p>
            <img src={ arrow } alt="" />
          </div>
        </section>
        
        <section className='header-right'>
          <nav>
            <img src={ heart } alt="" />
            <img src={ basket } alt="" />
          </nav>
        </section>
      </header>
    </>
  )
}

export default App