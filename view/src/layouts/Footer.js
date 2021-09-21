function Footer(props) {
  return (
    <div className="chapayom__footer--fixed-bottom">
      <div className="menu__buttom">
        <div
          className="menu__buttom--home"
         
        >
          <i className="fas fa-home menu__size--icon"></i>
          <div className="menu__size--text" href="#home">
            หน้าแรก
          </div>
        </div>
        <div
          className="menu__buttom--card"
         
        >
          <i className="far fa-credit-card menu__size--icon"></i>
          <div className="menu__size--text">บัตร</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;