import Layout from "../layout";
import HomeHero from "../sections/home/homehero";
import Features from "../sections/home/features";
import HomeIntro from "../sections/home/homeIntro";
import Validators from "../sections/home/validators";
import UltraFast from "../sections/home/ultraFast";
import Scalable from "../sections/home/scalable";
import Interoperable from "../sections/home/interoperable";
import Community from "../sections/home/community";
import Donate from "../sections/home/donate";
const Home = () => {
  return (
    <Layout>
      <HomeHero />
      <Features />
      <HomeIntro />
      <Validators />
      <UltraFast />
      <Scalable />
      <Interoperable />
      <Community />
      <Donate />
    </Layout>
  );
};

export default Home;
