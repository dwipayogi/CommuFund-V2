import NavigationBar from "./components/ui/Navbar";
import Section from "./components/ui/container/Section";
import Card from "./components/ui/card/Card";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <main className="m-[10%] max-w-7xl xl:m-auto">
        <section
          className="flex min-h-screen items-center justify-center -mt-20 pt-20"
          id="Beranda"
        >
          <p className="text-center text-[10vw] xl:text-[170px]">
            <span className="font-thin">SMALL</span> SUPPORT
            <br />
            <span className="font-extrabold">BIG</span> IMPACT
          </p>
        </section>
        <Section id="Donasi">
          <Card status="donasi" />
          <Card status="donasi" />
          <Card status="donasi" />
          <Card status="donasi" />
          <Card status="donasi" />
          <Card status="donasi" />
          <Card status="donasi" />
          <Card status="donasi" />
          <Card status="donasi" />
          <Card status="donasi" />
          <Card status="donasi" />
        </Section>
        <Section id="Volunteer">
          <Card status="volunteer" />
          <Card status="volunteer" />
          <Card status="volunteer" />
          <Card status="volunteer" />
          <Card status="volunteer" />
          <Card status="volunteer" />
          <Card status="volunteer" />
          <Card status="volunteer" />
        </Section>
        <Section id="Donasi & Volunteer">
          <Card status="two" />
          <Card status="two" />
          <Card status="two" />
          <Card status="two" />
          <Card status="two" />
          <Card status="two" />
          <Card status="two" />
          <Card status="two" />
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
