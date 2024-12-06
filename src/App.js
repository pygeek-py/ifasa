import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="w-[100%] h-[40vh] lg:h-[120vh] bg-image flex flex-col justify-center items-center relative">
        {/* Gradient for opacity */}
        <div className="absolute bottom-0 left-0 w-full h-[320px] bg-gradient-to-t from-black/80 to-transparent"></div>

        <h1 className="text-[28px] sm:text-[38px] lg:text-[58.36px] text-center font-bold text-white">
          IFASA 2023/2024 EXECUTIVES
        </h1>
        <p className="text-[12px] sm:text-[18px] lg:text-[25.01px] font-normal text-center text-white pt-2 lg:pt-0">
          OBAFEMI AWOLOWO UNIVERSITY, ILE-IFE
        </p>
        <div className="w-[92%] h-[6vh] sm:h-[10vh] lg:h-[14.6vh] bg-white mx-auto bottom-0 absolute"></div>
      </div>

      <div className="w-[100%] pb-16 lg:pb-16 bg-images">
        <section className="w-[92%] mx-auto pb-14 lg:pb-14 bg-white shadow-md lg:px-20">
          <div className="hidden lg:block">
            <div className="w-full flex justify-between items-center">
              <img src="/ifasa_logo.png" alt="" className="w-[113px] h-[120px]" />
              <h1 className="text-[38px] sm:text-[42px] lg:text-[46px] font-bold text-black text-center px-10">
                Meet our Team of{" "}
                <span className="text-green-400">Executives</span>, and{" "}
                <span className="text-green-400">world-class</span> problem solvers
              </h1>
              <img src="/bbg-2.png" alt="" className="w-[113px] h-[120px]" />
            </div>
          </div>

          <div className="block lg:hidden">
            <div className="w-[40%] justify-center mx-auto flex gap-3 items-center">
              <img src="/ifasa_logo.png" alt="" className="w-[35px] h-[37px]" />
              <img src="/bbg-2.png" alt="" className="w-[35px] h-[37px]" />
            </div>
            <h1 className="text-[22px] sm:text-[26px] pt-2 px-6 lg:text-[46px] font-bold text-black text-center ">
              Meet our Team of{" "}
              <span className="text-green-400">Executives</span>, and{" "}
              <span className="text-green-400">world-class</span> problem solvers
            </h1>
          </div>

          <div className="flex justify-between items-center flex-wrap pt-8 lg:pt-12 px-3 lg:px-0">
            {[
              { name: "Oyekan Favour", role: "President", img: "/oyekan.png" },
              { name: "Yusuf Teslim", role: "Vice-President", img: "/yusuf.png" },
              { name: "Oyekan Favour", role: "General Secretary", img: "/oyekan-2.png" },
              { name: "Osulana Ezekiel", role: "Public Relations Officer", img: "/osunlana.png" },
              { name: "Akinniyi Sekinat", role: "Financial Secretary", img: "/akinniyi.png" },
              { name: "Adeleke Marvelous", role: "Director of Socials", img: "/adeleke.png" },
              { name: "Adele Praise", role: "Welfare Director", img: "/adele.png" },
              { name: "Idowu Mololuwa", role: "Treasurer", img: "/idowu.png" },
              { name: "Atere Paul", role: "Director of Sports", img: "/atere.png" },
              { name: "Oyekan Favour", role: "Assistant General Secretary", img: "/oyekan-3.png" },
            ].map((exec, index) => (
              <article
                key={index}
                className={`w-[32%] sm:w-[32%] mt-5 ${index < 3 ? "mt-0" : ""}`}
              >
                <img src={exec.img} alt="" className="w-full h-[108px] sm:h-[240px] lg:h-[353px]" />
                <div className="pt-3">
                  <h1 className="text-black text-[10px] sm:text-[18px] lg:text-[24px] font-bold">
                    {exec.name}
                  </h1>
                  <h1 className="text-black text-[6.5px] sm:text-[12px] lg:text-[15px] font-normal">
                    {exec.role}
                  </h1>
                </div>
              </article>
            ))}

            <img
              src="/ifasa_logo.png"
              alt=""
              className="w-[74px] h-[78px] sm:w-[128px] sm:h-[130px] lg:w-[238px] lg:h-[252px]"
            />
            <img
              src="/bbg-2.png"
              alt=""
              className="mr-[10%] lg:mr-[12%] w-[74px] h-[78px] sm:w-[128px] sm:h-[130px] lg:w-[238px] lg:h-[252px]"
            />
          </div>
        </section>
      </div>

      <div className="w-[100%] h-[]">
        <div className="w-[90%] mx-auto pt-12 pb-12">
          <h1 className="text-[14px] md:text-[22px] opacity-80 font-normal text-center ">
            The Executives of the Ife Architecture Students' Association,
            Obafemi Awolowo University (IFASA O.A.U) 2023/24 Session, are
            committed to taking ambitious strides, pushing boundaries and
            exploring new opportunities for the growth and development of our
            members.
          </h1>

          <h1 className="text-[13px] md:text-[19px] pt-8 opacity-80 font-normal text-center ">
            Our goal is to lead IFASA to new heights of success, setting higher
            standards and inspiring future generations.
          </h1>

          <h1 className="text-[14px] md:text-[19px] pt-8 font-bold text-center">
            Kindly support our vision; <br />
            <p className="font-normal opacity-80 pt-1">
              <span className="text-red-400 ">2020813378</span> | IFASA O.A.U |
              FIRST BANK
            </p>
          </h1>
        </div>
      </div>

      <div className="w-full h-[15vh] md:h-[23vh] bg-img flex flex-col justify-center items-center relative">
        <h1 className="font-normal text-[11px] md:text-[20px] text-white text-center">Follow us</h1>
        <div className="w-[60%] flex justify-between items-center flex-wrap">
        <h1 className="font-normal text-[13px] md:text-[24px] text-white flex gap-2 items-center"><img src="/instagram-logo.png" alt="" className=" w-[11.73px] h-[11.73px] md:w-[21px] md:h-[21px]" /> architecture_oau</h1>
        <h1 className="font-normal text-[13px] md:text-[24px] text-white flex gap-2 items-center"><img src="/linkedin-logo.png" alt="" className=" w-[11.73px] h-[11.73px] md:w-[21px] md:h-[21px]" /> Ifasa OAU</h1>
        <h1 className="font-normal text-[13px] md:text-[24px] text-white flex gap-2 items-center"><img src="/tiktok.png" alt="" className=" w-[11.73px] h-[11.73px] md:w-[21px] md:h-[21px]" /> ifearchitectureschool</h1>
        <h1 className="font-normal text-[13px] md:text-[24px] text-white flex gap-2 items-center"><img src="/x.png" alt="" className=" w-[11.73px] h-[11.73px] md:w-[21px] md:h-[21px]" /> archi_oau</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
