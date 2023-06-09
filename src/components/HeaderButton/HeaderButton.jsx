import React from 'react'

const HeaderButton = ({ classNameBtn, classNameValue, classNameText, TextBtn, id }) => {
  return (
    <>
      <button className={classNameBtn} id={id}>
        <span className={classNameValue} ></span>
        <span className={classNameText} >{TextBtn}</span>
      </button>
    </>

  )
}

export default HeaderButton;