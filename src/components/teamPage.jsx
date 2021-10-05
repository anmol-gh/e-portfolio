import anmol from "./static/anmol.png";
import khushi from "./static/khushi.png";
import ananya from "./static/ananya.png";
import arnav from "./static/arnav.png";
import saransh from "./static/saransh.png";
import harsh from "./static/harish.png";
const TeamMembers = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={khushi}
                  alt="khushi's image"
                ></img>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    TEAM LEADER
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Khushi Srivastava
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Khushi hails from Lucknow, she did her schooling from City
                    Montessori School, Lucknow.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={saransh}
                  alt="saransh's image"
                ></img>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    TEAM MEMBER
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Saransh Rajesh Chawla
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Saransh hails from Mumbai, he did his schooling from Leaders
                    Private School, Dubai.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={anmol}
                  alt="anmol's image"
                ></img>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    TEAM MEMBER
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Anmol Ghai
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Anmol hails from Dehradun, and I did my schooling from
                    Pinewood School.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={harsh}
                  alt="harsh's image"
                ></img>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    TEAM MEMBER
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Harsh Shivhare
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Harsh hails from Mumbai
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={ananya}
                  alt="ananya's image"
                ></img>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    TEAM MEMBER
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Ananya Mathur
                  </h1>
                  <p className="leading-relaxed mb-3">Ananya hails from NCR</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={arnav}
                  alt="arnav's image"
                ></img>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    TEAM MEMBER
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Arnav William
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Arnav hails from Dehradun. He completed his high school from St. Joseph Academy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMembers;
