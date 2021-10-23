import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          id="10"
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-
1.2.1&w=1000&q=80"
          location="Chennai"
          name="Amygdala Homes"
          description="A place with a serene ambiance and peaceful surroundings."
          price="Rs. 35,00,000"
        />

        <Card
          id="11"
          src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-
1.2.1&w=1000&q=80"
          location="Pondicherry"
          name="Fairbanks Ltd"
          description="The home that makes you feel cozy!"
          price="Rs. 50,00,000"
        />
        <Card
          id="12"
          src="https://i.pinimg.com/736x/2f/82/39/2f823993ba069d0aa966144e6f20d459.jpg"
          location="Trichy"
          name="Dale Homes"
          description="Comfortable private places with room for friends or family."
          price="Rs. 24,00,000"
        />
      </div>
      <div className="home__section">
        <Card
          id="13"
          src="https://media.gettyimages.com/photos/idyllic-home-with-covered-porchpicture-
id479767332?s=612x612"
          location="Madurai"
          name="Triptico Properties"
          description="A trip to the past will be joyful here!"
          price="Rs. 40,00,000"
        />
        <Card
          id="14"
          src="https://images.livemint.com/img/2019/04/16/600x338/Kerala_1555430371601.jpg"
          location="Kanyakumari"
          name="MC Homes"
          description="A new and well-maintained home with gardens and play-areas"
          price="Rs. 60,00,000"
        />
      </div>
    </div>
  );
}

export default Home;
