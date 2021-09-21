import info from "../static/Information.jpg";

const Picture = () => {
  return (
    <section className=" text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="intro-picture"
            className=" rounded-3xl border-purple-500 border-4 object-cover object-center h-full w-full"
            src={info}
          ></img>
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                About me
              </h2>
              <p className="leading-relaxed text-base">
                Hey, I am Anmol, B.Tech CSE undergrad, studying at the prestigious college of UPES. You can connect with me on my socials (Links given in the Navbar.)
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z"
                  fill="#E0E7FF"
                />
                <path
                  d="M5.4375 24.9375H20.0625"
                  stroke="#6366F1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.71917 17.2562L8.54761 20.8454C9.05769 21.3236 9.70839 21.6246 10.4031 21.7036C11.0978 21.7826 11.7995 21.6355 12.4039 21.2841L27.7813 12.3438L25.8882 10.03C25.3971 9.42977 24.7075 9.02494 23.944 8.88863C23.1806 8.75233 22.3935 8.89354 21.725 9.28676L17.2188 11.9375L11.125 9.90625L9.44933 10.6244C9.32396 10.6781 9.21414 10.7626 9.12998 10.8699C9.04583 10.9772 8.99005 11.104 8.96778 11.2386C8.94552 11.3731 8.95749 11.5112 9.00259 11.6399C9.04769 11.7686 9.12447 11.8839 9.22585 11.9751L12.3438 14.7813L9.50001 16.4063L6.65626 15.1875L4.95481 15.9167C4.83073 15.9699 4.72186 16.0531 4.63803 16.1589C4.55419 16.2647 4.49805 16.3898 4.47466 16.5227C4.45127 16.6557 4.46138 16.7924 4.50407 16.9204C4.54676 17.0485 4.62069 17.1639 4.71917 17.2562V17.2562Z"
                  stroke="#6366F1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Travelling
              </h2>
              <p className="leading-relaxed text-base ">
                I love travelling, I have been to many places and I have a
                few in my bucket list. If you ask me about my favourite place? It would be a <span className="font-semibold">Beach. </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z"
                  fill="#E0E7FF"
                />
                <path
                  d="M23.0002 10.5834C24.4577 10.5834 25.6391 9.40188 25.6391 7.94448C25.6391 6.48706 24.4577 5.30559 23.0002 5.30559C21.5428 5.30559 20.3614 6.48706 20.3614 7.94448C20.3614 9.40188 21.5428 10.5834 23.0002 10.5834Z"
                  stroke="#6366F1"
                  stroke-width="1.5"
                />
                <path
                  d="M10.3333 11.517L14.5572 10.0544L20.3611 12.8245L14.5572 17.151L20.3611 20.9717L16.6711 25.8878"
                  stroke="#6366F1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.6405 14.0896L24.0558 14.8593L27.2216 11.8848"
                  stroke="#6366F1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.8923 19.3156L11.3249 21.3802L6.11292 24.3037"
                  stroke="#6366F1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Sports
              </h2>
              <p className="leading-relaxed text-base">
                I am a sports lover, and player. I play games like Badminton, Basketball, Cricket among others to keep myself fit and healthy.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Picture;
