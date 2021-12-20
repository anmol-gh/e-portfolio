const LivConWeek6 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          {/* 720x600 */}
          <iframe
            height="720"
            width="600"
            className="object-cover object-center rounded"
            alt="hero"
            src="https://www.youtube.com/embed/F3etr7CIMKk"
          ></iframe>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="mx-6 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Avalon Advertisement
          </h1>
          <p className="mb-8 mx-6 leading-relaxed">
            I loved the movie and my favourite scene in the movie was when
            decided to send a letter each day for 3 years to get funds to build
            a library in the Jail. The scene showed us that if you constantly do
            something then you will surely succeed in it sooner or later.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LivConWeek6;
