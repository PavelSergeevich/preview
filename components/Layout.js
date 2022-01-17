import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import MapsFrame from "./MapsFrame";
import Buttons from "./Buttons";

const Layout = ({ children, locale, locales, title, description }) => (
  <>
    <Head title="Dikardi" description="Pole Dance" />
    <Header locale={locale} locales={locales} />
    {children}
    <Buttons locale={locale} locales={locales} />
    <Footer locale={locale} locales={locales} />
    <MapsFrame />
  </>
);

export default Layout;
