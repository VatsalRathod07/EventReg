import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {

  const renderEmptyArrow = () => null;

  return (
    <div className="relative container mx-auto" id='home'>
     <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        swipeable={true}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={renderEmptyArrow}
        renderArrowNext={renderEmptyArrow}
      >
        <div>
          <div
            className="h-[650px] w-full relative"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.inventiva.co.in/wp-content/uploads/2023/05/eventshub_evergreen_opengraph_1200x630_2x.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        <div>
          <div
            className="h-[650px] w-full relative"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.prismic.io/desplaines-rushstreetgaming/4f61cba4-4e18-4381-900e-d69e974f737c_3181_MWG_Rivers_Concert__Post_00000+%281%29.jpg?auto=compress,format&rect=99,0,1200,692&w=1200&h=692)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        <div>
          <div
            className="h-[650px] w-full relative"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.abstractelementsevents.com/wp-content/uploads/2020/10/samuel-pereira-uf2nnANWa8Q-unsplash-scaled.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </Carousel>

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center flex flex-col justify-center items-center gap-2">
          <h3 className="text-4xl font-extrabold text-white max-w-lg tracking-wider">
            Create and Manage Your Own Events with Ease
          </h3>
          <p className="text-white tracking-wider">Register, Create, Engage, and Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
