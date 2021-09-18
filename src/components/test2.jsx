const dataTest = [
  {
    Week: "Week 1",
    Text: "This was our first Living Conversation Class, we were greeted by our teacher Dr. Mariyam Sidhiqui ma'am. We had an Introduction and a Briefing session by ma'am, and the students introduced themselves. It was a really fun session.",
    Topic: "Introduction",
  },
  {
    Week: "Week 2",
    Text: "lorem",
    Topic: "Project Briefing",
  },
];

const Test2 = (props) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start ">
            <span className="text-red-400 inline-block py-1 px-2 rounded bg-yellow-50  text-xs font-medium tracking-widest">
              Introduction
            </span>
            <h2 className="text-blue-400 sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              {props.week}
            </h2>
            <p className="text-pink-700 leading-relaxed mb-8">
              This was our first Living Conversation Class, we were greeted by
              our teacher Dr. Mariyam Sidhiqui ma'am. We had an Introduction and
              a Briefing session by ma'am, and the students introduced
              themselves. It was a really fun session.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-green-300 mt-auto w-full">
              <a className="text-yellow-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <a className="inline-flex items-center">
              {/* <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"> */}
            </a>
          </div>
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="text-red-400 inline-block py-1 px-2 rounded bg-yellow-50  text-xs font-medium tracking-widest">
              Assignment, Group Formation
            </span>
            <h2 className="text-blue-400 sm:text-3xl text-2xl title-font font-medium mt-4 mb-4">
              Week 2
            </h2>
            <p className="text-pink-700 leading-relaxed mb-8">
              Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
              portland. VHS man braid palo santo hoodie brunch trust fund.
              Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie
              chambray 90's, slow-carb etsy tumeric.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-green-300 mt-auto w-full">
              <a className="text-yellow-500 inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <a className="inline-flex items-center">
              {/* <img alt="blog" src="https://dummyimage.com/103x103" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test2;
