/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @next/next/no-img-element */
import LoveSVG from "@/components/graphics/Love";
import Head from "next/head";
import { useState } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { IoHeart } from "react-icons/io5";

import { IoTriangleSharp } from "react-icons/io5";
import { ScheduleTag } from "@/components/scheduleTag";
import { env } from "@/env";
import { Hearts } from "@/components/Hearts";
import { FormikForm } from "@/components/Form";

export default function Home() {
  const [audio, setAudio] = useState(false);

  return (
    <>
      <Head>
        <title>Cloud & Jayne | Holy Matrimony</title>
        <meta name="description" content="The wedding of Cloud and Jayne." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-[#fff]">
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
            <button
              className="sticky right-5 top-3 z-10 ml-auto flex h-[35px] w-[35px] flex-col items-center justify-center rounded-full bg-[rgba(184,136,103,0.5)] p-1"
              onClick={() => setAudio((prev) => !prev)}
            >
              <span className={audio ? "animate-spin-slow" : ""}>
                {audio ? (
                  <MdMusicNote color="white" size={30} />
                ) : (
                  <MdMusicOff size={30} color="white" />
                )}
              </span>
            </button>
            <div className="relative flex h-full min-h-screen w-full max-w-screen-md flex-col px-7 py-3">
              <p className="font-pingfang text-xl font-bold tracking-tight">
                润毅与碧华的婚礼邀请函 ❤
              </p>
              <div className="flex w-[320px] flex-row items-center justify-between pl-1 pt-3 opacity-60">
                <p className="font-caiti text-2xl font-thin tracking-wide">
                  2024.05.05
                </p>
                <p className="font-caiti text-2xl font-thin tracking-wide">
                  5.00pm
                </p>
              </div>

              <p className="pb-3 pt-5 font-roboto text-base uppercase">
                Welcome to our wedding!
              </p>
              <img
                className="h-64 w-full object-cover object-center xl:h-80"
                src="/assets/images/main_img.webp"
                alt="Main Image"
              />
              <div className="justify-right flex flex-col gap-0.5 pb-6 pt-3">
                <p className="text-right text-lg">生命中最好的时光是</p>
                <p className="text-right text-lg">
                  把我和你变成了{" "}
                  <span className="text-xl underline decoration-amber-400 underline-offset-8">
                    我们
                  </span>
                </p>
              </div>
              <div className="flex w-full flex-row items-center justify-between bg-[rgba(184,136,103,0.24)] p-3">
                <div className="flex flex-row justify-start gap-3">
                  <img
                    src="assets/images/note.webp"
                    alt="Music Note"
                    className="h-9 w-9"
                  />
                  <div className="flex flex-col justify-start gap-2">
                    <p className="truncate font-roboto text-2xl font-thin italic">
                      Until I found you
                    </p>
                    <p className="font-roboto text-lg font-thin italic">
                      Stephen Sanchez
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
              </div>
              <p className="w-full pb-7 pt-3 text-center text-sm tracking-[0.25rem]">
                (请点击右上角音符播放音乐~)
              </p>
              <IoTriangleSharp
                size={25}
                className="mx-auto rotate-180 text-[rgb(184,136,103)]"
              />
              <p className="pt-7 text-center font-lora text-lg">
                Hello, this is a heartfelt invitation
              </p>
              <p className="py-3 text-center font-lora text-2xl">/</p>
              <p className="pt-2 text-center font-lora text-lg">
                We fell in love on 20th May 2018
              </p>
              <p className="pt-2 text-center font-lora text-lg">
                and we are overjoyed to invite you to our wedding
              </p>
              <p className="pt-2 text-center font-lora text-lg">
                on 20th May 2023.
              </p>
              <img
                src="/assets/images/rings.webp"
                alt="Rings"
                className="mx-auto mt-7 h-14 w-14 object-cover"
              />
              <p className="pt-2 text-center font-lora text-lg font-semibold">
                - Holy Matrimony -
              </p>
              <p className="pt-1 text-center font-lora text-lg">
                Time: 10.00 AM
              </p>
              <p className="pt-1 text-center font-lora text-lg">
                Venue: Wisma FGA, Level 5
              </p>
              <img
                src="/assets/images/plates.webp"
                alt="Rings"
                className="mx-auto mt-7 h-14 w-14 object-cover"
              />
              <p className="pt-2 text-center font-lora text-lg font-semibold">
                - Wedding Dinner -
              </p>
              <p className="pt-1 text-center font-lora text-lg">
                Time: 7.00 PM
              </p>
              <p className="pt-1 text-center font-lora text-lg">
                Venue: Grand Imperial, Pavilion KL
              </p>
              <div className="mt-20 flex w-full flex-row items-center justify-start gap-4">
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
              <div className="mx-auto mt-16 flex w-11/12 flex-col items-center border border-[rgb(153,153,153)] px-1">
                <div className="h-full w-full origin-center rotate-[4deg] border border-[rgb(153,153,153)] px-4 pb-4 pt-10">
                  <div className="w-full -rotate-[4deg]">
                    <p className="text-center font-pingfang text-xl font-thin">
                      欢迎莅临我们的婚礼
                    </p>
                    <p className=" pt-2 text-center font-roboto font-thin">
                      Marriage is love another starting point.
                    </p>
                    <img
                      src="/assets/images/welcome.webp"
                      alt="Welcome"
                      className="mx-auto mt-5 w-5/6  object-cover object-center"
                    />
                    <p className=" pb-3 pt-5 text-center font-roboto text-base uppercase">
                      Welcome to our wedding!
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-28 grid h-full w-full grid-cols-3 gap-3">
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
              <div className="mt-10">
                <Hearts pulsate />
              </div>
              <div className="mb-12 mt-20 w-full bg-[#b88867] py-1.5 text-center font-roboto text-xl uppercase tracking-wider text-white">
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
                <ScheduleTag pic="shot_glass" time="7.00 pm" title="we eat" />
              </div>

              <p className="pt-16 text-center font-roboto text-xl uppercase tracking-[0.2rem]">
                Welcome
              </p>
              <p className="pt-4 text-center font-pingfang text-lg tracking-[0.2rem]">
                诚邀您参加我们的婚礼
              </p>
              <div className="mt-20 flex flex-row items-center gap-6">
                <img
                  className="aspect-[10/16] w-1/2 object-cover"
                  src="/assets/images/intimate.webp"
                  alt="intimate"
                />
                <div className="jutify-end flex w-full flex-col items-end self-end">
                  <div className="mb-6">
                    <Hearts />
                  </div>
                  <div className="mb-10 flex flex-col gap-2 font-pingfang tracking-[0.2rem]">
                    <p className="text-right">我们，不期而遇</p>
                    <p className="text-right">一切都是刚刚好</p>
                    <p className="text-right">我温柔的模样</p>
                    <p className="text-right">你宠溺的眼神</p>
                  </div>
                  <p className="text-right font-lora text-sm font-thin uppercase tracking-[0.15rem]">
                    My Heart
                  </p>
                  <p className="mb-4 pt-2 text-right font-lora text-sm font-thin uppercase tracking-[0.15rem]">
                    Is With You
                  </p>
                </div>
              </div>

              <div className="relative mt-20 flex h-full w-full flex-col items-center justify-center border-[0.5px] border-[#00000055] px-4 pb-8 pt-12">
                <div className="absolute -top-[18px] min-w-[70%] bg-[rgb(184,136,103)] px-8 py-2 text-center text-lg tracking-[0.125rem] text-white lg:text-xl">
                  Our love is endless...
                </div>
                <img
                  src="assets/images/endless.webp"
                  className="aspect-[10/14] object-cover px-5"
                  alt="Endless"
                />
              </div>
              <p className="pt-4 text-center font-roboto text-sm font-thin uppercase tracking-widest">
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
              </p>

              <div className="flex w-full flex-row items-end justify-center pt-20">
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
              </div>
              <div className="flex flex-col items-center justify-center gap-4 pt-6">
                <p className="font-caiti text-2xl font-bold uppercase text-[rgb(184,136,103)]">
                  &quot;Yes, I Do&quot;
                </p>
                <div className="flex w-full flex-col justify-center gap-4 text-center font-roboto text-xs font-thin uppercase tracking-widest text-[rgba(184,136,103,.75)]">
                  <p>For years I had been searching</p>
                  <p>For that perfect fantasy</p>
                  <p>But I find it in my arms, right now</p>
                  <p>You are all to me.</p>
                </div>
              </div>
              <div className="mt-8 scale-75">
                <Hearts pulsate />
              </div>
              <div className="relative mt-20 flex h-full w-full flex-col items-center justify-center border-[0.5px] border-[#00000055] px-4 pb-8 pt-12">
                <div className="absolute -top-[18px] min-w-[70%] bg-[rgb(184,136,103)] px-8 py-2 text-center text-lg tracking-[0.125rem] text-white lg:text-xl">
                  RSVP
                </div>
                {/* <img
                  src="assets/images/endless.webp"
                  className="aspect-[10/14] object-cover px-5"
                  alt="Endless"
                /> */}

                <div className="w-full">
                  <FormikForm />
                </div>
                <div className="flex w-full animate-pulse flex-col justify-center gap-1 pt-4">
                  <p className="text-center font-lora text-sm font-bold uppercase">
                    Please click the icon for RSVP
                  </p>
                  <p className="text-center font-pingfang text-base font-bold">
                    请点击图标填写宾客出席表
                  </p>
                </div>
              </div>
              <div className="relative mt-24 w-full origin-right scale-110">
                <Hearts
                  vertical
                  className="absolute -top-8 right-0 z-10 md:right-10"
                />
              </div>
            </div>
            <div className="max-w-screen-md px-0 md:px-7">
              <img src="/assets/images/ending.webp" alt="" className="w-full" />
            </div>
            <div className="relative flex w-full max-w-screen-md flex-col items-center gap-3 px-7 py-3 font-pingfang text-sm font-thin uppercase">
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
            </div>
          </>
        )}
      </main>
    </>
  );
}
