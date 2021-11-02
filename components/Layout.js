import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import MapsFrame from "./MapsFrame";


const Layout = ({ children, locale, locales, title, description }) => (
  <>
    <Head title="Dikardi" description="Pole Dance"/>
    <div className="color-nav">
      <Header locale={locale} locales={locales}  />     
    </div>
    <div className="max-size">{children}</div>    
    <div className="color-foot">
      <Footer locale={locale} locales={locales} />
    </div>
    <MapsFrame/>
  </>
);

export default Layout;
