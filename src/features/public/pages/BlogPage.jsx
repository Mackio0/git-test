import React from "react";
import event1Img from "../../../assets/blog/events/event-1.png";
import event2Img from "../../../assets/blog/events/event-2.png";
import event3Img from "../../../assets/blog/events/event-3.png";
import LatestBlog1 from "../../../assets/blog/latestBlog/blog-1.png";
import LatestBlog2 from "../../../assets/blog/latestBlog/blog-2.png";
import LatestBlog3 from "../../../assets/blog/latestBlog/blog-3.png";
import LatestBlog4 from "../../../assets/blog/latestBlog/blog-4.png";
import LatestBlog5 from "../../../assets/blog/latestBlog/blog-5.png";
import LatestBlog6 from "../../../assets/blog/latestBlog/blog-6.png";
import ContainerComponent from "../../../components/ContainerComponent";
import { Link } from "react-router-dom";
import { useBlogStore } from "../../../store/useBlogStore";
import LandingSection from "../components/LandingSection";
import hero from "../../../assets/blog/heroSection.png";

const BlogPage = () => {
  const { blogs } = useBlogStore();
  return (
    <main className="flex flex-col gap-section-spacing mb-28">
      <LandingSection name="Blog" imgPath={hero} />

      <ContainerComponent className={"flex flex-col gap-section-spacing"}>
        <div className=" grid grid-cols-4 lg:grid-cols-12 sm:grid-cols-8 gap-x-5 gap-y-10  auto-rows-min ">
          <h2 className=" col-span-full font-semibold text-heading sm:text-4xl text-2xl justify-self-center self-center ">
            {" "}
            Events and announcements
          </h2>

          <Link
            to={`/blog/${blogs[0].slug}`}
            className=" cursor-pointer flex flex-col gap-5 pb-4 col-span-full  lg:col-span-4  shadow border border-borderBlog rounded "
          >
            <img className="" width="100%" src={event1Img} alt="eventPhoto1" />

            <div className=" px-4 space-y-4 flex flex-col justify-between flex-grow  ">
              <p className=" lg:text-xl font-semibold text-para4 ">
                10 entry-level Professional Certificates for the digital job
                market
              </p>
              <div>
                {" "}
                <p className=" font-hind leading-6 text-para1 xl:block hidden line-clamp-3  ">
                  We're excited to announce the expansion of our entry-level
                  Professional Certificate portfolio with 10 new programs from
                  industry partners. Pathway{" "}
                </p>
                <p className=" text-para4 ">Mar 23, 2024</p>
              </div>
            </div>
          </Link>

          <Link
            to={`/blog/${blogs[0].slug}`}
            className=" col-span-full lg:col-span-4 cursor-pointer flex flex-col gap-5 pb-4 shadow rounded border border-borderBlog items-start"
          >
            <img src={event2Img} width="100%" alt="eventPhoto2" />
            <div className="px-4 space-y-4 flex flex-col justify-between flex-grow  ">
              <p className=" lg:text-xl font-semibold text-para4 ">
                Introducing Pathway Academy’s 2024 Outstanding Enterprise
                Customer Achievement Award Winners
              </p>
              <div>
                <p className=" font-hind leading-6 text-para1 xl:block hidden line-clamp-3 ">
                  {" "}
                  Ready to dive into the world of development? Whether you're
                  aiming to build websites, mobile apps, or software, this guide
                  .......
                </p>

                <p className=" text-para4 ">Mar 23, 2024</p>
              </div>
            </div>
          </Link>
          <Link
            to={`/blog/${blogs[0].slug}`}
            className=" cursor-pointer col-span-full lg:col-span-4 flex flex-col  gap-5 pb-4 shadow rounded border border-borderBlog items-start"
          >
            <img src={event3Img} width="100%" alt="eventPhoto3" />
            <div className="px-4 space-y-4 flex flex-col justify-between flex-grow ">
              <p className=" font-semibold lg:text-xl text-para4 ">
                "AI Grading: Faster, Quality Feedback on Pathway Academy
              </p>
              <div>
                {" "}
                <p className=" font-hind leading-6z text-para1 xl:block hidden line-clamp-3 ">
                  Ready to dive into the world of development? Whether you're
                  aiming to build websites, mobile apps, or software, this guide
                  .......
                </p>
                <p className=" text-para4 ">July 1, 2024</p>
              </div>
            </div>
          </Link>
        </div>
        <div className=" space-y-10">
          <h1 className=" font-semibold text-2xl sm:text-4xl text-center text-heading">
            Our Latest Blogs
          </h1>
          <div className=" grid grid-cols-4  sm:grid-cols-8 lg:grid-cols-12 gap-y-10 gap-x-5">
            <Link
              to={`/blog/${blogs[0].slug}`}
              className=" col-span-full lg:col-span-4  flex flex-col rounded shadow gap-5 border  border-borderBlog"
            >
              <img
                className=""
                width="100%"
                src={LatestBlog1}
                alt="eventPhoto1"
              />

              <div className=" space-y-5 sm:px-1 px-2 flex flex-col flex-grow justify-center ">
                <p className=" text-xl text-para3   font-semibold">
                  Essential Skills to Kickstart Your Development Journey
                </p>
                <div className="flex-grow flex flex-col justify-end">
                  <p className=" font-hind text-para1 line-clamp-2 ">
                    Ready to dive into the world of development? Whether you're
                    aiming to build websites, mobile apps, or software, this
                    guide
                  </p>
                </div>

                <div className="flex justify-between border-t items-center border-para2 py-2">
                  <h3 className=" text-heading font-hind font-medium text-2xl">
                    Ms.Ella
                  </h3>
                  <p className=" text-para1 font-hind">Nov 13 2024</p>
                </div>
              </div>
            </Link>
            <Link
              to={`/blog/${blogs[0].slug}`}
              className=" col-span-full lg:col-span-4 flex flex-col rounded shadow gap-5 border border-borderBlog"
            >
              <img className="" src={LatestBlog2} alt="eventPhoto1" />

              <div className=" space-y-5 px-2 sm:px-1 ">
                <p className="  text-xl font-sans text-para3 font-semibold">
                  Revolutionizing the Business Landscape
                </p>
                <div className="flex-grow flex flex-col justify-end">
                  <p className=" font-hind text-para1 line-clamp-2 ">
                    Discover the latest trends shaping the business world and
                    learn how to adapt your strategy to stay ahead in 2024.
                  </p>
                </div>

                <div className="flex justify-between border-t items-center border-para2 py-2">
                  <h3 className=" text-heading font-hind font-medium text-2xl">
                    Ms. Sophia Martinez
                  </h3>
                  <p className=" text-para1 font-hind">Nov 13 2024</p>
                </div>
              </div>
            </Link>
            <Link
              to={`/blog/${blogs[0].slug}`}
              className="col-span-full lg:col-span-4 flex flex-col rounded shadow gap-5 border border-borderBlog"
            >
              <img className="" src={LatestBlog3} alt="eventPhoto1" />

              <div className=" space-y-5 sm:px-1 px-2 flex flex-col flex-grow justify-center">
                <p className=" text-xl text-para3  font-semibold">
                  Finding Work-Life Balance in Online Learning
                </p>
                <div className="flex-grow flex flex-col justify-end">
                  <p className=" font-hind text-para1 line-clamp-2 ">
                    Struggling to balance work, family, and learning? Discover
                    practical ways to stay productive and stress-free.
                  </p>
                </div>

                <div className="flex justify-between border-t items-center border-para2 py-2">
                  <h3 className=" text-heading font-hind font-medium text-2xl">
                    Mr. Alex
                  </h3>
                  <p className=" text-para1 font-hind">Nov 13 2024</p>
                </div>
              </div>
            </Link>
            <Link
              to={`/blog/${blogs[0].slug}`}
              className=" col-span-full lg:col-span-4 flex flex-col rounded shadow gap-5 border border-borderBlog"
            >
              <img className="" src={LatestBlog4} alt="eventPhoto1" />

              <div className=" space-y-5 px-1 ">
                <p className=" text-[1.4rem] text-para3  font-semibold">
                  Designing Your First Portfolio Website{" "}
                </p>
                <div className="flex-grow flex flex-col justify-end">
                  <p className=" font-hind text-para1 line-clamp-2 ">
                    Learn the essential steps to design a professional portfolio
                    that highlights your expertise and attracts opportunities.
                  </p>
                </div>
                <div className="flex justify-between border-t items-center border-para2 py-2">
                  <h3 className=" text-heading font-hind font-medium text-2xl">
                    Ms. Olivia Parker
                  </h3>
                  <p className=" text-para1 font-hind">Nov 13 2024</p>
                </div>
              </div>
            </Link>
            <Link
              to={`/blog/${blogs[0].slug}`}
              className=" col-span-full lg:col-span-4 flex flex-col rounded shadow gap-5 border border-borderBlog"
            >
              <img className="" src={LatestBlog5} alt="eventPhoto1" />

              <div className=" flex flex-col gap-5 flex-grow   px-1 ">
                <p className=" text-[1.4rem] font-sans text-para3  font-semibold">
                  Web Development Trends to Watch{" "}
                </p>
                <div className="flex-grow flex flex-col justify-end">
                  <p className="font-hind mt-auto text-para1 line-clamp-2 ">
                    Stay ahead in the fast-paced tech industry with this guide
                    to the top tools and frameworks for 2024.
                  </p>
                </div>

                <div className="flex justify-between  border-t border-para2 py-2">
                  <h3 className=" text-heading font-hind font-medium text-2xl">
                    Mr. Ethan
                  </h3>
                  <p className=" text-para1 font-hind">March 10 2024</p>
                </div>
              </div>
            </Link>
            <Link
              to={`/blog/${blogs[0].slug}`}
              className=" col-span-full lg:col-span-4 flex flex-col rounded shadow gap-5 border border-borderBlog"
            >
              <img className="" src={LatestBlog6} alt="eventPhoto1" />

              <div className=" space-y-5 px-1 ">
                <p className=" text-[1.4rem] text-para3  font-semibold">
                  Unlocking Creativity Through Photography{" "}
                </p>
                <div className="flex-grow flex flex-col justify-end">
                  <p className=" font-hind text-para1 line-clamp-2 ">
                    Master the art of photography with practical tips on
                    composition, lighting, and storytelling for breathtaking
                    images.
                  </p>
                </div>

                <div className="flex justify-between border-t items-center border-para2 py-2">
                  <h3 className=" text-heading font-hind font-medium text-2xl">
                    Ms. Sophia
                  </h3>
                  <p className=" text-para1 font-hind">Feb 13 2024</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </ContainerComponent>
    </main>
  );
};

export default BlogPage;
