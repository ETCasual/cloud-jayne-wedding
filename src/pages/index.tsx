/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @next/next/no-img-element */
import LoveSVG from "@/components/graphics/Love";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { IoHeart } from "react-icons/io5";

import { IoTriangleSharp } from "react-icons/io5";
import { ScheduleTag } from "@/components/scheduleTag";
import { env } from "@/env";
import { Hearts } from "@/components/Hearts";
import { FormikForm } from "@/components/Form";
import Sound from "react-sound";
import ReactFullpage from "@fullpage/react-fullpage";
import { FaWaze } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import { Color } from "@/components/Color";
import { Carousel } from "@/components/Carousel";
import dynamic from "next/dynamic";
import { UnevenCarousel } from "@/components/graphics/UnevenCarousel";

const FlipClock = dynamic(() => import("@/components/FlipClock"), {
  ssr: false,
});

export default function Home() {
  const [audio, setAudio] = useState(false);
  const [showCollapse, setShowCollapse] = useState(false);

  useEffect(() => {
    if (!showCollapse) return;
    setTimeout(() => {
      setShowCollapse(false);
    }, 7500);
  }, [showCollapse]);

  return (
    <>
      <Head>
        <title>Cloud & Jayne | Holy Matrimony</title>
        <meta name="description" content="The wedding of Cloud and Jayne." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex min-h-screen w-full flex-col items-center bg-[#fff]">
        {env.NEXT_PUBLIC_IS_STAGING === "0" ? (
          <div className="relative flex h-full min-h-screen w-full max-w-screen-md flex-col items-center justify-center px-7 py-3">
            <LoveSVG
              width={120}
              height={120}
              className="heart-1 absolute -left-5 -top-0 scale-0 transform fill-[#b07751] font-[monospace] opacity-65"
            />

            <LoveSVG
              width={175}
              height={175}
              className="heart-1 absolute -right-12 top-[150px] -translate-y-1/2 fill-[#b07751] font-[monospace] text-[5rem] opacity-45"
            />

            <LoveSVG
              width={225}
              height={225}
              className="heart-3 absolute bottom-0 right-1/2 fill-[#b07751] font-[monospace] text-[7rem] opacity-50"
            />

            <LoveSVG
              width={120}
              height={120}
              className="heart-1 absolute -left-16 top-[350px] fill-[#b07751] font-[monospace] text-[4rem] opacity-35"
            />

            <LoveSVG
              width={120}
              height={120}
              className="heart-2 absolute bottom-[125px] right-3 fill-[#b07751] font-[monospace] text-[5.3rem] opacity-55"
            />
            <div className="relative z-20 flex h-full w-full flex-col items-center justify-center">
              <img
                alt="Flower Circle"
                src="/assets/images/flower-circle.webp"
                className="absolute right-[calc(50%+6px)] top-0 w-[260px] translate-x-1/2 opacity-60"
              />
              <img
                src="assets/images/endless.webp"
                className="h-[250px] w-[250px] rounded-full object-cover"
                alt="Endless"
              />
            </div>
            <p className="mt-10 w-full animate-pulse text-center font-pingfang text-3xl font-bold text-[#b07751]">
              润毅与碧华的婚礼 ❤
            </p>
            <p className="mt-3 w-full text-center font-pingfang text-xl text-[#b07751]">
              敬请期待
            </p>
          </div>
        ) : (
          <>
            <div
              onClick={() => {
                setShowCollapse((prev) => !prev);
              }}
              className="fixed left-3 top-3 z-10 ml-auto flex flex-row-reverse items-center overflow-hidden rounded-full bg-[rgba(184,136,103,0.5)] p-1 transition-all duration-150 ease-in-out"
            >
              {showCollapse && (
                <div className="flex flex-row-reverse items-center gap-2 pl-3">
                  <img
                    src="/assets/images/main_img_2.webp"
                    alt="album"
                    className="h-[30px] w-[30px] rounded-full object-cover"
                  />
                  <p className={`font-lora uppercase text-white`}>
                    Run To You | 赵贝尔
                  </p>
                </div>
              )}
              <button
                className="flex h-[30px] w-[30px] flex-col items-center justify-center rounded-full bg-[rgba(184,136,103,0.5)] p-1"
                onClick={() => {
                  setAudio((prev) => !prev);
                  // setAudio((prev) => !prev);
                }}
              >
                <span className={audio ? "animate-spin-slow" : ""}>
                  {audio ? (
                    <MdMusicNote color="white" size={30} />
                  ) : (
                    <MdMusicOff size={30} color="white" />
                  )}
                </span>
              </button>
              <Sound
                url="/assets/audio/RunToYou.mp3"
                playStatus={audio ? "PLAYING" : "STOPPED"}
                loop
              />
            </div>

            <ReactFullpage
              credits={{
                enabled: false,
              }}
              render={({ fullpageApi }) => (
                <ReactFullpage.Wrapper>
                  <div className="section relative flex h-full min-h-screen w-full max-w-screen-md flex-col">
                    {/* <p className="font-pingfang text-xl font-bold tracking-tight">
                      润毅与碧华的婚礼邀请函 ❤
                    </p>
                    <div className="flex w-[320px] flex-row items-center justify-between pl-1 pt-3 opacity-60">
                      <p className="font-caiti text-2xl font-thin tracking-wide">
                        2024.05.05
                      </p>
                      <p className="font-caiti text-2xl font-thin tracking-wide">
                        5.00pm
                      </p>
                    </div> */}
                    {/* <p className="pb-3 pt-5 font-roboto text-base uppercase">
                      Welcome to our wedding!
                    </p> */}
                    <Carousel />

                    {/* <img
                      className="h-72 w-full object-cover object-center xl:h-80"
                      src="/assets/images/main_img.webp"
                      alt="Main Image"
                    /> */}
                    <div className="flex flex-col items-center justify-center px-7">
                      <div className="justify-right mb-2 flex flex-col gap-0.5 border-b border-b-[rgba(184,136,103,0.75)] pb-2 pt-3 font-lora">
                        <p className="w-full text-center text-sm font-bold tracking-[0.3rem]">
                          人生其实只要有两次幸运就好
                        </p>
                        <p className="text-center text-sm font-bold tracking-[0.3rem]">
                          一次是遇见你 一次是走到底
                        </p>
                      </div>
                      {/* <div className="flex w-full flex-row items-center justify-between bg-[rgba(184,136,103,0.24)] p-3">
                      <div className="flex flex-row justify-start gap-3">
                        <img
                          src="assets/images/note.webp"
                          alt="Music Note"
                          className="h-9 w-9"
                        />
                        <div className="flex flex-col justify-start gap-2">
                          <p className="truncate font-roboto text-xl font-thin italic">
                            Run To You
                          </p>
                          <p className="font-roboto text-base font-thin italic">
                            Zhao Bei Er 赵贝尔
                          </p>
                        </div>
                      </div>
                      <div className="flex h-full flex-row items-end gap-2">
                        <img
                          src="/assets/images/wave.gif"
                          alt="Waves"
                          className="h-4 w-5"
                        />
                        <img
                          className="aspect-square h-20 object-cover object-center"
                          src="/assets/images/square.webp"
                          alt="Square"
                        />
                      </div>
                    </div> */}
                      {/* <p className="w-full pb-7 pt-3 text-center text-sm tracking-[0.25rem]">
                      (请点击右上角音符播放音乐~)
                    </p> */}
                      <p className="pt-3 text-center font-lora text-base font-bold">
                        这是一封心意满满的婚礼邀请函
                      </p>
                      <p className="text-center font-lora text-2xl font-bold">
                        /
                      </p>
                      <p className="pt-1 text-center font-lora text-base font-bold">
                        收到这封邀请函的你们
                      </p>
                      <p className="pt-1 text-center font-lora text-base font-bold">
                        都是我们人生中最重要的部分
                      </p>
                      <div className="mt-4 w-full px-7">
                        <button
                          onClick={() => fullpageApi.moveTo(3)}
                          className="flex w-full flex-row items-center justify-center gap-4 rounded-full bg-[#b88867] py-2"
                        >
                          <p className="font-bold uppercase tracking-wide text-white">
                            RSVP
                          </p>
                        </button>
                      </div>
                      <div className="mt-5 flex w-full flex-row items-center justify-center gap-4">
                        <div className="h-6 w-6 rounded-full bg-[#b07751] p-1">
                          <IoHeart className="h-full w-full text-white" />
                        </div>
                        <div className="h-6 w-6 rounded-full bg-[#b07751] p-1">
                          <IoHeart className="h-full w-full text-white" />
                        </div>
                        <div className="h-6 w-6 rounded-full bg-[#b07751] p-1">
                          <IoHeart className="h-full w-full text-white" />
                        </div>
                      </div>
                      <div className="mt-7 animate-bounce">
                        <IoTriangleSharp
                          size={25}
                          className="mx-auto rotate-180 animate-bounce text-[rgb(184,136,103)]"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <img
          src="/assets/images/rings.webp"
          alt="Rings"
          className="mx-auto mt-7 h-14 w-14 object-cover"
        />
        <p className="pt-2 text-center font-lora text-lg font-semibold">
          - Holy Matrimony -
        </p>
        <p className="pt-1 text-center font-lora text-lg">
          Date: 5 May 2024
        </p>
        <p className="pt-1 text-center font-lora text-lg">
          Time: 05.00 PM
        </p>
        <p className="pt-1 text-center font-lora text-lg">
          Venue: Wisma FGA, Level 5
        </p> */}
                  {/* <div
                    className="section section-2 min-h-screen max-w-screen-md overflow-visible px-7"
                    style={{ justifyContent: "unset" }}
                  >
                    <div className="mx-auto flex w-full scale-[.875] flex-col items-center border border-[rgb(153,153,153)] px-1">
                      <div className="h-full w-full origin-center rotate-[4deg] border border-[rgb(153,153,153)] px-4 pb-4 pt-10">
                        <div className="flex w-full -rotate-[4deg] flex-col items-center justify-center">
                          <div className="w-[270px] bg-[#b07751] px-5 py-2 text-white">
                            <p className="text-center font-pingfang text-xl font-thin">
                              何润毅 & 陈碧华
                            </p>
                          </div>
                          <p className="pt-4 text-center font-caiti text-xl">
                            携同我们的父母
                          </p>
                          <p className="pt-4 text-center font-caiti text-xl">
                            邀请您出戏我们的婚礼仪式
                          </p>
                          <p className="pt-4 text-center font-caiti text-xl">
                            见证和分享我们的幸福时刻
                          </p>
                          <img
                            src="/assets/images/welcome.webp"
                            alt="Welcome"
                            className="mx-auto mt-5 w-5/6 object-cover object-center"
                          />
                         <p className=" pb-3 pt-5 text-center font-roboto text-base uppercase">
                            Welcome to our wedding!
                            </p> 
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 grid w-full grid-cols-3 gap-3">
                      <img
                        src="/assets/images/grid-2.webp"
                        alt="grid_1"
                        className="mt-4 h-60 w-full object-cover"
                      />
                      <img
                        src="/assets/images/grid-3.webp"
                        alt="grid_1"
                        className="mt-10 h-60 w-full object-cover"
                      />
                      <img
                        src="/assets/images/grid-1.webp"
                        alt="grid_1"
                        className="h-60 w-full object-cover"
                      />
                    </div>
                    <div className="mt-6 flex w-full flex-col items-end gap-3 font-lora uppercase">
                      <p>The sun won&apos;t run to you,</p>
                      <p>The moon won&apos;t,</p>
                      <p>The stars won&apos;t,</p>
                      <p>But I Shall.</p>
                    </div>
                    <div className="mb-12 mt-10">
                      <Hearts pulsate />
                    </div>
                  </div> */}
                  {/* <div className="mt-10 flex w-full flex-row items-center justify-end gap-4">
<div className="h-6 w-6 animate-pulsate rounded-full bg-[#b07751] p-1">
  <IoHeart className="h-full w-full text-white" />
</div>
<div className="h-6 w-6 animate-pulsate rounded-full bg-[#b07751] p-1">
  <IoHeart className="h-full w-full text-white" />
</div>
<div className="h-6 w-6 animate-pulsate rounded-full bg-[#b07751] p-1">
  <IoHeart className="h-full w-full text-white" />
</div>
</div> */}
                  <div className="section section-3 relative min-h-screen w-full max-w-screen-md overflow-hidden">
                    <img
                      src="/assets/images/line.png"
                      className="absolute top-24 scale-[1.2] overflow-hidden opacity-75 mix-blend-overlay"
                      alt="Line"
                    />
                    {/* <LoveSVG
                      width={60}
                      height={60}
                      className="heart-1 absolute left-12 top-16 transform fill-[#b07751] font-[monospace] opacity-65"
                    /> */}

                    <LoveSVG
                      width={40}
                      height={40}
                      className="heart-1 absolute right-12 top-[100px] -translate-y-1/2 fill-[#F8C8DC] font-[monospace] text-[5rem] opacity-45"
                    />

                    {/* <LoveSVG
                      width={60}
                      height={60}
                      className="heart-3 absolute bottom-0 right-1/2 fill-[#b07751] font-[monospace] text-[7rem] opacity-50"
                    /> */}

                    <LoveSVG
                      width={47}
                      height={47}
                      className="heart-1 absolute left-40 top-[225px] fill-[#F8C8DC] font-[monospace] text-[4rem] opacity-35"
                    />

                    <LoveSVG
                      width={60}
                      height={60}
                      className="heart-2 absolute left-12 top-[420px] fill-[#F8C8DC] font-[monospace] text-[5.3rem] opacity-55"
                    />
                    <div className="relative mt-5 flex w-full flex-col overflow-y-hidden px-12 sm:px-[7rem]">
                      <div className="mb-12 mt-2 flex w-full flex-col items-center justify-center">
                        <p className="font-lora text-sm uppercase">
                          约翰一书 1 john 4:19
                        </p>
                        <p className="text-center font-lora text-xs uppercase">
                          我们爱，因神先爱我们
                          <br />
                          We love because he first loved us.
                        </p>
                      </div>
                      <img
                        src="/assets/images/scribble.webp"
                        alt="Scribble"
                        className="absolute left-1/2 top-24 h-[425px] w-[100px] -translate-x-1/2 object-fill opacity-50"
                      />
                      <ScheduleTag
                        pic="location"
                        time="5.00 pm"
                        title="guest's arrival"
                        start
                      />
                      <ScheduleTag
                        pic="rings"
                        time="5.15 pm"
                        title="Holy Matrimony"
                      />
                      <ScheduleTag
                        pic="camera"
                        time="6.00 pm"
                        title="photo session"
                        start
                      />
                      <ScheduleTag
                        pic="food"
                        time="7.00 pm"
                        title="Wedding dinner"
                      />
                    </div>

                    <div className="relative mt-4 flex rotate-[7deg] flex-col items-center">
                      <div className="border-2 border-[##837363]">
                        <div className="flex -rotate-[7deg] flex-col items-center gap-2 border-2 border-[##837363] px-3 py-4">
                          <p className="font-lora text-base uppercase">
                            Dresscode
                          </p>
                          <div className="flex w-full flex-row items-center justify-center gap-2">
                            <Color hex="#AD7956" />
                            <Color hex="#fff" bordered />
                            <Color hex="#000080" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex w-full flex-row items-center justify-center gap-3">
                      <button
                        onClick={() =>
                          window.open("https://waze.com/ul/hw2839dwsy")
                        }
                        className="flex flex-row items-center justify-center gap-2 rounded-full bg-[#22e5f7] px-3 py-1.5"
                      >
                        <FaWaze className="text-white" size={24} />
                        <p className="text-[12px] font-bold uppercase tracking-wide text-white md:text-base">
                          Waze
                        </p>
                      </button>
                      <button
                        onClick={() =>
                          window.open(
                            "https://maps.app.goo.gl/vSRv3FGG1TLjuuCRA",
                          )
                        }
                        className="flex flex-row items-center justify-center gap-2 rounded-full bg-[#34a853] px-3 py-1.5"
                      >
                        <FaLocationDot className="text-white" size={24} />
                        <p className="text-[12px] font-bold uppercase tracking-wide text-white md:text-base">
                          Google Maps
                        </p>
                      </button>
                    </div>
                    {/* <div className="mb-12 w-full bg-[#b88867] py-1.5 text-center font-roboto text-xl uppercase tracking-wider text-white">
                      Wedding Schedule
                    </div>
                    <div className="relative flex w-full flex-col px-5 sm:px-[7rem]">
                      <img
                        src="/assets/images/scribble.webp"
                        alt="Scribble"
                        className="absolute left-1/2 top-0 w-[150px] -translate-x-1/2 object-cover"
                      />
                      <ScheduleTag
                        pic="rings_2"
                        time="10.00 am"
                        title="we do"
                        start
                      />
                      <ScheduleTag pic="cam" time="12.00 pm" title="wefie" />
                      <ScheduleTag
                        pic="champagne"
                        time="6.30 pm"
                        title="we drink"
                        start
                      />
                      <ScheduleTag
                        pic="shot_glass"
                        time="7.00 pm"
                        title="we eat"
                      />
                    </div> */}
                  </div>
                  <div className="section section-4 relative min-h-screen w-full max-w-screen-md px-7">
                    <div className="ites-center mt-5 flex flex-row justify-center">
                      <FlipClock />
                    </div>
                    <div className="flex flex-row items-center gap-6">
                      {/* <img
                        className="aspect-[10/16] w-1/2 object-cover"
                        src="/assets/images/intimate.webp"
                        alt="intimate"
                      /> */}

                      <div className="mt-4 grid w-full">
                        {/* <img
                          src="/assets/images/grid-2.webp"
                          alt="grid_1"
                          className="mt-4 h-60 w-full object-cover"
                        />
                        <img
                          src="/assets/images/grid-3.webp"
                          alt="grid_1"
                          className="mt-10 h-60 w-full object-cover"
                        />
                        <img
                          src="/assets/images/grid-1.webp"
                          alt="grid_1"
                          className="h-60 w-full object-cover"
                        /> */}
                        <UnevenCarousel />
                      </div>
                      {/*<div className="jutify-end flex w-full flex-col items-end self-end">
                     <div className="mb-6">
                          <Hearts />
                        </div> 
                      <div className="mb-10 flex flex-col gap-2 font-pingfang tracking-[0.2rem]">
                          <p className="text-right">始于初见</p>
                          <p className="text-right">止于终老</p>
                          {/* <p className="text-right">我温柔的模样</p>
                          <p className="text-right">你宠溺的眼神</p> 
                        </div>
                        <p className="text-right font-lora text-sm font-thin uppercase tracking-[0.15rem]">
                          My Heart
                        </p>
                        <p className="mb-4 pt-2 text-right font-lora text-sm font-thin uppercase tracking-[0.15rem]">
                          Is With You
                        </p> 
                    </div>*/}
                    </div>
                    <div className="mt-7 w-full px-5">
                      <FormikForm />
                    </div>
                    <div className="my-4 flex w-full scale-90 flex-col items-center justify-center">
                      <Hearts pulsate />
                    </div>
                  </div>
                  {/* <div className="relative mt-20 flex h-full w-full flex-col items-center justify-center border-[0.5px] border-[#00000055] px-4 pb-8 pt-12">
                    <div className="absolute -top-[18px] min-w-[70%] bg-[rgb(184,136,103)] px-8 py-2 text-center text-lg tracking-[0.125rem] text-white lg:text-xl">
                      Our love is endless...
                    </div>
                    <img
                      src="assets/images/endless.webp"
                      className="aspect-[10/14] object-cover px-5"
                      alt="Endless"
                    />
                  </div> */}
                  {/* <p className="pt-4 text-center font-roboto text-sm font-thin uppercase tracking-widest">
                    No words are necessary
                  </p>
                  <p className="pt-1.5 text-center font-roboto text-sm font-thin uppercase tracking-widest">
                    Between two loving hearts
                  </p>
                  <p className="pt-3 text-center font-pingfang text-sm tracking-[0.227rem]">
                    从相遇到相爱 一路走来酸甜苦辣
                  </p>
                  <p className="pt-2 text-center font-pingfang text-sm tracking-[0.227rem]">
                    组成属于我们的爱情故事
                  </p>
                  <p className="pt-2 text-center font-pingfang text-sm tracking-[0.227rem]">
                    就在这天，我们决定
                  </p>
                  <p className="pt-2 text-center font-pingfang text-sm tracking-[0.227rem]">
                    让爱以夫妻之名 延续到永恒
                  </p> */}

                  {/* <div className="flex w-full flex-row items-end justify-center pt-20">
                    <div className="border-[.5px] border-r-0 border-[rgb(153,153,153)] p-3">
                      <img
                        src="/assets/images/end-2.webp"
                        alt=""
                        className="h-full w-[117px] object-cover md:w-[220px]"
                      />
                    </div>
                    <img
                      src="/assets/images/end-1.webp"
                      alt=""
                      className="w-[180px] object-cover md:w-[300px]"
                    />
                  </div> */}
                  {/* <div className="flex flex-col items-center justify-center gap-4 pt-6">
                    <p className="font-caiti text-2xl font-bold uppercase text-[rgb(184,136,103)]">
                      &quot;Yes, I Do&quot;
                    </p>
                    <div className="flex w-full flex-col justify-center gap-4 text-center font-roboto text-xs font-thin uppercase tracking-widest text-[rgba(184,136,103,.75)]">
                      <p>For years I had been searching</p>
                      <p>For that perfect fantasy</p>
                      <p>But I find it in my arms, right now</p>
                      <p>You are all to me.</p>
                    </div>
                  </div> */}

                  {/* <div className="relative mt-20 flex h-full w-full flex-col items-center justify-center border-[0.5px] border-[#00000055] px-4 pb-8 pt-12">
                    <div className="absolute -top-[18px] min-w-[70%] bg-[rgb(184,136,103)] px-8 py-2 text-center text-lg tracking-[0.125rem] text-white lg:text-xl">
                      RSVP
                    </div>
                    <img
                      src="assets/images/endless.webp"
                      className="aspect-[10/14] object-cover px-5"
                      alt="Endless"
                    />

                    <div className="flex w-full animate-pulse flex-col justify-center gap-1 pt-4">
                      <p className="text-center font-lora text-sm font-bold uppercase">
                        Please click the icon for RSVP
                      </p>
                      <p className="text-center font-pingfang text-base font-bold">
                        请点击图标填写宾客出席表
                      </p>
                    </div>
                  </div> */}
                  {/* <div className="relative mt-24 w-full origin-right scale-110">
                    <Hearts
                      vertical
                      className="absolute -top-8 right-0 z-10 md:right-10"
                    />
                  </div> */}
                  {/* <div className="max-w-screen-md px-0 md:px-7">
                    <img
                      src="/assets/images/ending.webp"
                      alt=""
                      className="w-full"
                    />
                  </div> */}
                  {/* <div className="relative flex w-full max-w-screen-md flex-col items-center gap-3 px-7 py-3 font-pingfang text-sm font-thin uppercase">
                    <p className="text-2xl">/</p>
                    <p>Thank you for sharing</p>
                    <p>And witnessing</p>
                    <p>this wonderful moment with us</p>
                    <p>Your heartfelt blessings</p>
                    <p>And endless support will guide us</p>
                    <p>to the new chapter of life</p>
                    <div className="mt-5 w-1/2 max-w-[350px] animate-opacity">
                      <img
                        src="/assets/images/save-the-date.webp"
                        alt="Save The Date"
                      />
                    </div>
                    <div className="mb-20 mt-3 origin-top scale-110">
                      <Hearts />
                    </div>
                  </div> */}
                </ReactFullpage.Wrapper>
              )}
            />
          </>
        )}
      </main>
    </>
  );
}
