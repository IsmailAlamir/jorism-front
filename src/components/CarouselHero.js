import React, { Component } from "react";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


export default class CarouselHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
      focusOnSelect: true,
      dots: true,
      swipeToSlide: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 4000,
      pauseOnHover: true,

    };
    const dataBackground = [
      {
        image: "https://img.freepik.com/premium-photo/camels-transporting-tourists-around-lost-city-petra-camels-front-treasury-petra-ancient-city-al-khazneh-jordan_431724-2089.jpg?w=2060",
        title: "Petra",
        subTitle: "One of the seven Wonders of the World",
      },
      {
        image: "https://www.7iber.com/wp-content/uploads/2020/07/%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86-%D8%A7%D9%84%D8%B2%D9%84%D8%A7%D8%A8%D9%8A%D8%A9-%D9%85%D8%B9-%D8%A7%D9%94%D8%AD%D8%AF-%D8%A7%D9%84%D8%AC%D9%85%D8%A7%D9%84-%D8%A8%D8%B1%D9%85.jpg",

        title: "Wadi Rum",
        subTitle: "The Valley of the Moon",
      },
      {
        image: "https://youimg1.tripcdn.com/target/0100u120009evep5e8844.jpg?proc=source%2Ftrip",
        title: "Aqaba",
        subTitle: "The only coastal city in Jordan",
      },
      {
        image: "https://mrm-style.com/en/wp-content/uploads/2022/08/Letters-from-Jordan-Amman-and-Jerash-Jewels-of-the-Middle-East-you-will-love-Mr.M-by-Marko-Tadic-mrmbymarkotadic12.jpg",
        title: "Jerash",
        subTitle: "One of the world's best-preserved ancient Roman cities",
      },
      {
        image: "https://click2jordan.com/wp-content/uploads/2020/08/%D8%A7%D9%84%D8%A8%D8%AD%D8%B1-%D8%A7%D9%84%D9%85%D9%8A%D8%AA-%D8%A7%D9%84%D8%A7%D8%B1%D8%AF%D9%86.jpg",
        title: "Dead Sea",
        subTitle: "The lowest point on Earth accessible by road",
      },
      {
        image: "https://ucarecdn.com/2d222796-4d8f-4914-9af8-b6b413300d9f/",
        title: "Amman Citadel",
        subTitle: "It has been occupied since at least the Bronze Age",
      },
    ];

    const dataCard = [
      {
        image: "https://www.traveldine.com/wp-content/uploads/2021/12/spencer-davis-Ivwyqtw3PzU-unsplash-scaled.jpg",
        title: "Petra",
      },
      {
        image: "https://images.pexels.com/photos/13458331/pexels-photo-13458331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Wadi Rum",
      },
      {
        image: "https://www.mensjournal.com/wp-content/uploads/2019/05/AqabaBeach.jpg?w=1200&quality=86&strip=all",
        title: "Aqaba",
      },
      {
        image: "https://images.pexels.com/photos/3293854/pexels-photo-3293854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Jerash",
      },
      {
        image: "https://i.pinimg.com/564x/31/72/86/317286cb3b5d0b0af3aeb4ae95401dc7.jpg",
        title: "Dead Sea",
      },
      {
        image: "https://images.pexels.com/photos/5751531/pexels-photo-5751531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Amman Citadel",
      },
    ];


    return (

      <div id="CarouselHero">

        <div className="backgroundCarouselContainer">


          <div className="backgroundCarousel">

            <Slider
              className="sliderr1"
              arrows={false}
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
            >
              {dataBackground.map(imgCarouselHero => {
                return (
                  <div className="imgBackgroundCarousel">
                    <img src={imgCarouselHero.image} alt={imgCarouselHero.title} />
                    <div className="infoCard" >
                      <h1>{imgCarouselHero.title}</h1>
                      <h6>{imgCarouselHero.subTitle}</h6>
                      <Button variant="warning">Exolore</Button>
                    </div>

                  </div>
                );
              })}
            </Slider>

          </div>




          <div className="nestedCarousel">
            <Slider className="sliderr"
              {...settings}
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
            >
              {dataCard.map(imgCarouselHero => {
                return (
                  // <Card.Img variant="top" src={imgCarouselHero.image}  />
                  <div className="cardEle">
                    <p className="pTilte">{imgCarouselHero.title}</p>
                    <img className="imgNestedCarousel" src={imgCarouselHero.image} alt={imgCarouselHero.title} />
                  </div>
                );
              })}
            </Slider>
          </div>

        </div>

      </div>
    );
  }
}

