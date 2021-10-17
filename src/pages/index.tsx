import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { PageHeading, SectionHeading } from "../components/Typography"
import PageSection from "../components/Sections/PageSection"
import { TitleCard } from "../components/Cards"
import { BoxIconTag } from "../components/Tags"
import {
  cssLogo,
  dockerLogo,
  gitLogo,
  houseOfMathLogo,
  htmlLogo,
  legalRoomLogo,
  liftMarketingLogo,
  nextLogo,
  reactLogo,
  reduxLogo,
  resulternaLogo,
  romaniaLogo,
  rttLogo,
  sassLogo,
  serviceNodeLogo,
  styledLogo,
  tailwindLogo,
  taxriseLogo,
  typescriptLogo,
} from "../images"
import Slider from "react-slick"
import { Helmet } from "react-helmet"

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const IndexPage = () => (
  <Layout>
    <Seo title="Welcome" />

    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Helmet>

    <PageSection>
      <PageHeading>About Myself</PageHeading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dolore
        temporibus culpa qui obcaecati porro dolorum ut voluptatum error? Illum
        magni, debitis, blanditiis deserunt molestias cupiditate assumenda
        quidem totam voluptas, quam amet.
      </p>
    </PageSection>

    <PageSection>
      <SectionHeading>What I do</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TitleCard
          title="Web Design"
          icon={<i className="flaticon-html"></i>}
        />
        <TitleCard
          title="Web Development"
          icon={<i className="flaticon-js"></i>}
        />
        <TitleCard
          title="Custom Solution"
          icon={<i className="flaticon-idea"></i>}
        />
        <TitleCard
          title="Mobile App Development"
          icon={<i className="flaticon-smartphone"></i>}
        />
      </div>
    </PageSection>

    <PageSection>
      <SectionHeading>Technologies & Tools</SectionHeading>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <BoxIconTag icon={htmlLogo} title="HTML" className="w-full" />
        <BoxIconTag icon={cssLogo} title="CSS" className="w-full" />
        <BoxIconTag
          icon={typescriptLogo}
          title="TypeScript"
          className="w-full"
        />
        <BoxIconTag icon={reactLogo} title="React" className="w-full" />
        <BoxIconTag icon={reduxLogo} title="Redux" className="w-full" />
        <BoxIconTag icon={nextLogo} title="Next" className="w-full" />
        <BoxIconTag icon={styledLogo} title="Styled" className="w-full" />
        <BoxIconTag icon={sassLogo} title="Sass" className="w-full" />
        <BoxIconTag icon={tailwindLogo} title="Tailwind" className="w-full" />
        <BoxIconTag icon={rttLogo} title="Testing" className="w-full" />
        <BoxIconTag icon={dockerLogo} title="Docker" className="w-full" />
        <BoxIconTag icon={gitLogo} title="Git" className="w-full" />
      </div>
    </PageSection>

    {/* <PageSection>
      <SectionHeading>Projects</SectionHeading>
      <div style={{ width: "100%" }} className="projects-slider">
        <Slider {...settings}>
          <img
            src={houseOfMathLogo}
            alt=""
            className="px-5 mx-auto max-h-16 slide"
          />
          <img
            src={liftMarketingLogo}
            alt=""
            className="px-5 mx-auto max-h-16 slide"
          />
          <img
            src={serviceNodeLogo}
            alt=""
            className="px-5 mx-auto max-h-16 slide"
          />
          <img
            src={taxriseLogo}
            alt=""
            className="px-5 mx-auto max-h-16 slide"
          />
          <img
            src={legalRoomLogo}
            alt=""
            className="px-5 mx-auto max-h-16 slide"
          />
          <img
            src={resulternaLogo}
            alt=""
            className="px-5 mx-auto max-h-16 slide"
          />
          <img
            src={romaniaLogo}
            alt=""
            className="px-5 mx-auto max-h-16 slide"
          />
        </Slider>
      </div>
    </PageSection> */}
  </Layout>
)

export default IndexPage
