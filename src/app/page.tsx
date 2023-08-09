import Container from "@/components/container";
import Hero from "@/components/hero";
import HomeNav from "@/components/home-nav";
import { NovelTable, Novel } from "../components/hero";

const Home = () => {
  return (
    <div>
      <header>
        <HomeNav />
        <Container>
          <Hero />
          <NovelTable />
          <Novel />
          <Novel />
          <Novel />
          <Novel />
        </Container>
      </header>
    </div>
  );
};

export default Home;
