'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './imageSlider.css';
import HeroCard from './HeroCard';
import { useStore } from '../../app/store';
import { getRandomIndex } from '../../lib/getRandomIndex';

export default function ImageSlider({ games, coverArr, screenshotArr }) {
  const theme = useStore((store) => store.theme);

  var settings = {
    infinte: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,
    pauseOnHover: true,
    autoplaySpeed: 8000,
    dots: true,
  };

  return (
    <div
      className={`relative rounded-[2px] mt-[24px] shadow-search ${
        theme === 'dark' ? 'shadow-black/50' : 'shadow-black/25'
      }`}
    >
      <Slider {...settings}>
        {games.map((game) => {
          let screenshots = null;
          let cover = null;

          if (typeof game !== 'undefined') {
            screenshots = screenshotArr.filter((screen) =>
              game.screenshots.includes(screen.id)
            );
            cover = coverArr.find((cover) => cover.id === game.cover).image_id;
          }

          const randomScreenShot = getRandomIndex(screenshots);
          return (
            <HeroCard
              screenshot={screenshots[randomScreenShot]}
              cover={cover}
              name={game.name}
              rating={game.total_rating}
              slug={game.slug}
              key={game.id}
            />
          );
        })}
      </Slider>
    </div>
  );
}