import React from 'react'

export default function Menu() {
  return (
    <div className='menu'>
        <a className='option' href="balance">Bakiye Sorgulama</a>
        <a className='option' href="withdraw">Para Çekme</a>
        <a className='option' href="deposit">Para Yatırma</a>
    </div>
  )
}
