import Front from "../home/Front";
import Stats from "../home/Stats";
import Services from "../home/Services";
import Discover from "../home/Discover";
import HowItWorks from "../home/HowItWorks";
import Trusted from "../home/Trusted";
import Trending from "../home/Trending";
import Improvment from "../home/Imporvment";
import Orders from "../Orders";
import AllServices from "../AllServices";

const Home = () => {
  return (
    <main>
      <Front />
      <Stats />
      <Services />
      <Discover />
      <Trending/>
      <Improvment/>
      <HowItWorks />
    </main>
  );
};

export default Home;
