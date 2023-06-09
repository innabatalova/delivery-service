import React from 'react'

const HeaderButton = ({ classNameBtn, classNameValue, classNameText, TextBtn, id, HeaderBtnIcon }) => {

  const style = { background: "url(" + HeaderBtnIcon + ") no-repeat 50% 50%" }

  return (
    <>
      <button className={classNameBtn} id={id}>
        <span className={classNameValue} style={style}></span>
        <span className={classNameText} >{TextBtn}</span>
      </button>
    </>

  )
}

export default HeaderButton;