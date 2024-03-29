import React from "react";
import Carousel from "nuka-carousel/lib/carousel";
import "../Style/card.css";


const ProjectCard = ({ arr }) => {
  let defaultControlsConfig = {
    nextButtonText: "nextf",
    prevButtonText: "d",
    pagingDotsContainerClassName: "con",
    nextButtonClassName: "next",
    prevButtonClassName: "next",
    pagingDotsClassName: "con",
    speed: 20,
  };

 

  return (
    <>
      {arr.map((el) => (
        <div id="card">
          <Carousel
            defaultControlsConfig={defaultControlsConfig}
            autoplay={true}
            id="carousel"
            slidesToShow={1}
            wrapAround={true}
          >
            {el.imgarr.map((el) => (
              <div id="webimg">
              
                <img style={{ borderRadius: "1rem" }} src={el.img} alt="" />
              </div>
            ))}
          </Carousel>
          <div>
            <h1 id="title">
              {el.title}{" "}
              <span style={{ color: "var(--color-bg)", fontSize: "18px" }}>
                {/* [Clone]  */}
              </span>{" "}
              <span style={{ color: "tomato", fontSize: "18px" }}>
              {el.projectType}
              </span>{" "}
              
            </h1>
            <div id="des">
              <h3>{el.des}</h3>
            </div>
            <div id="techstack">
              <h2>
                {/* {" "}
                <span style={{ color: "var(--color-bg)" }}>
                  Tech Stack{" ->"}
                </span>{" "}
                {el.techstack} */}
                <div id="tsres">
                  {el.techstack.map((el) => (
                    <div>
                      <img width={50} src={el.src} alt="" />
                  <p id="para">{el.name}</p>
                    </div>
                  ))}
                </div>
              </h2>
            </div>

            <div id="deployed">
              <a target="blank" href={el.github}>
                <button>
                  <i class="fa-brands fa-github"></i>
                </button>
              </a>
              <a target="blank" href={el.live}>
                <button>
                  {""}
                  <i class="fa-solid fa-eye"></i>
                  {"   "}
                </button>
              </a>
              <a target={"blank"} href={el.dplink}><button>
                <i class="fa-solid fa-video"></i>
              </button></a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
