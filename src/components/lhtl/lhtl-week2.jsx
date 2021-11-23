import lhtlWeek2 from "../static/lhtlWeek2.png";
const myStyle = {
  display: "inline-block",
  width: "1em",
  height: "1em",
  strokeWidth: "0",
  stroke: "currentColor",
  fill: "currentColor",
};
const LhtlWeek2 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="rounded-3xl border-purple-500 border-4 object-cover object-center h-full w-full"
            src={lhtlWeek2}
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
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                What are the elements of Inquiry Based Learning?{" "}
              </h2>
              <p className="leading-relaxed text-base">
                There are 5 elements as follows:<br></br>
                1. QUESTION <br></br>
                2. INVESTIGATE <br></br>
                3. USE EVIDENCE <br></br>
                4. EVALUATE<br></br>
                5. RESPONSE
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col mb-10 lg:items-start items-center">
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
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
  </div>
          </div>*/}
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
                Let's observe the image now
              </h2>
              <p className="leading-relaxed text-base">
                But, if you are still confused, you might observe the image and
                tell what you can see.
              </p>
              <svg id="icon-arrow-left" viewBox="0 0 32 32" style={myStyle}>
                <path d="M1 16l15 15v-9h16v-12h-16v-9z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LhtlWeek2;
