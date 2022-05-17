import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';

function MasterLayout({ children, isNavBackgroundTransparent }) {
  return (
    <>
      <Nav isNavBackgroundTransparent={isNavBackgroundTransparent}></Nav>
      {children}
      <Footer></Footer>
    </>
  );
}

export default MasterLayout;
