import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import MapsFrame from "./MapsFrame";


const Layout = ({ children, locale, locales, title, description }) => (
  <>
    <Head title="Dikardi" description="Pole Dance"/>
      <Header locale={locale} locales={locales} />  
    {children}   
      <Footer locale={locale} locales={locales} />
    <MapsFrame/>
  </>
);

export default Layout;
