import header_pic from "./static/header photo.png";
import college_cover from "./static/college-cover-pic.png"
const AboutMe = () => {
  return (
    <div>
      <img src={header_pic} className=""></img>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hey 🙋‍♂️! I am Anmol Ghai
              {/* <div className="hidden lg:inline-block"> </div> */}
            </h1>
            <p className="mb-8 leading-relaxed">
              I am a first year CSE student, studying at UPES. I like quite a
              lot of things which include Food, Travelling, Music, Debates,
              Discussions, Cultures and so on. This website is my E-portfolio
              for <span className="font-semibold">'Living Conversation'</span>{" "}
              and{" "}
              <span className="font-semibold">'Learning how to Learn'.</span>
            </p>
            <div className="flex justify-center">
              <a
                className="transform hover:scale-105 motion-reduce:transform-none inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                href="/living-conversation"
              >
                Living Conversation
              </a>
              <a
                className="transform hover:scale-105 motion-reduce:transform-none ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                href="/lhtl"
              >
                Learning How to Learn
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="rounded-md object-cover object-center rounded"
              alt="hero"
              src={college_cover}
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
