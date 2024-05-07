import React from "react";
import "./page.css";

const page = () => {
  return (
    <>
      <div className="Event-main">
        <div className="heading">
          <img
            alt="settings"
            loading="lazy"
            width="40"
            height="40"
            decoding="async"
            data-nimg="1"
            class="h-[50px] "
            src="/images/img_user.svg"
          ></img>

          <img
            width="200px"
            src="/_next/image?url=%2Fimages%2Fimg_header_logo.png&w=384&q=75"
          />
        </div>
        <div className="Event-img">
          <img
            height="630px"
            width="302"
            src="/_next/image?url=%2Fimages%2Fimg_image_12_1.png&w=828&q=75"
          />
          <img
            height="630px"
            width="302"
            src="/_next/image?url=%2Fimages%2Fimg_image_13_630x412.png&w=828&q=75"
          />
          <img
            height="630px"
            width="302"
            src="/_next/image?url=%2Fimages%2Fimg_image_14_630x296.png&w=828&q=75"
          />
          <img
            height="630px"
            width="302"
            src="/_next/image?url=%2Fimages%2Fimg_image_12.png&w=828&q=75"
          />
        </div>

        <div className="purple">
          <div className="purple-text">
            Event : Oasis Bus tour , JLN Stadium , Delhi Collection Live : Meta
            Lives , live on astrix Event : Oasis Bus tour , JLN Stadium , Delhi
            Collection Live : Meta Lives , live on astrix
          </div>
        </div>
        <div className="Second">
          <h2>Explore Youre First Event</h2>
          <h1>Event Name</h1>
          <div className="time">
            <img height="30px" width="30" src="/images/img_linkedin.svg" />
            <h2>Venue</h2>
            <img
              class=" ml-10"
              height="30px"
              width="30"
              src="/images/img_clock.svg"
            />
            <h2>04/3/2024 @19:00</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et
            sed ipsum. Pellentesque mattis condimentum ut nulla.
          </p>
          <h2>Artist Lineup</h2>
          <div className="second-image">
            <img
              height="113"
              width="150"
              src="/_next/image?url=%2Fimages%2Fimg_image_157.png&w=384&q=75"
            />
            <img
              height="162"
              width="198"
              src="/_next/image?url=%2Fimages%2Fimg_image_159.png&w=384&q=75"
            />
            <img
              height="113"
              width="150"
              src="_next/image?url=%2Fimages%2Fimg_image_158.png&w=384&q=75"
            />
          </div>

          <div className="button">
            <button class="min-w-[194px] self-end flex flex-row items-center justify-center text-center cursor-pointer font-bold rounded-[26px] rounded-[26px] h-[52px] px-5 text-2xl bg-yellow-400 text-black mt-6 mb-5 mr-7 ">
              Join Waitlist
            </button>
            <img
              height="90"
              width="90"
              src="/_next/image?url=%2Fimages%2Fimg_image_131_105x105.png&w=256&q=75"
            />
          </div>
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {" "}
              Collections
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default page;
