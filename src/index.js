import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider, Helmet } from "react-helmet-async";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
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
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
