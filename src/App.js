import { Helmet } from "react-helmet-async";

import BestSeller from "./components/bestseller.component";
import Catagories from "./components/catagories.component";
import Footer from "./components/footer.component";
import NavBar from "./components/navbar.components";
import SearchHero from "./components/search.component";
import MBestSeller from "./components/m.bestseller.component";

function App() {
  return (
    <div className="flex flex-col font-poppins">
      <Helmet>
        <title>Blisskart - Your Ultimate Gifting Destination</title>
        <meta
          name="description"
          content="Find the perfect gift for your loved ones at Blisskart. Explore a wide range of unique and personalized gifts for every occasion."
        />
        <meta
          name="keywords"
          content="gifts, gifting, personalized gifts, unique gifts, occasion gifts, gifts for her, gifts for him, birthday gifts, anniversary gifts, wedding gifts, customized gifts, handmade gifts, gift ideas, special occasion gifts, holiday gifts, christmas gifts, valentine's day gifts, mother's day gifts, father's day gifts, graduation gifts, baby shower gifts, retirement gifts, home decor gifts, fashion accessories gifts, tech gadgets gifts, wellness and spa gifts, jewelry gifts, stationery and desk accessories gifts, sports and fitness gifts, travel and adventure gifts, pet lovers gifts, food and beverage gifts"
        />

        <link rel="canonical" href="https://www.blisskart.in" />
        <meta
          property="og:title"
          content="Blisskart - Your Ultimate Gifting Destination"
        />
        <meta
          property="og:description"
          content="Find the perfect gift for your loved ones at Blisskart. Explore a wide range of unique and personalized gifts for every occasion."
        />
        <meta
          property="og:image"
          content="https://www.blisskart.in/images/og-image.jpg"
        />
        <meta property="og:url" content="https://www.blisskart.in" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blisskart - Your Ultimate Gifting Destination"
        />
        <meta
          name="twitter:description"
          content="Find the perfect gift for your loved ones at Blisskart. Explore a wide range of unique and personalized gifts for every occasion."
        />
        <meta
          name="twitter:image"
          content="https://www.blisskart.in/images/og-image.jpg"
        />
      </Helmet>

      <NavBar />
      <SearchHero />
      <Catagories />
      <MBestSeller />
      <BestSeller />
      <Footer />
    </div>
  );
}

export default App;
