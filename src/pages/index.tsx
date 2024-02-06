/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { IoHeart } from "react-icons/io5";

import { IoTriangleSharp } from "react-icons/io5";

export default function Home() {
  const [audio, setAudio] = useState(false);
  return (
    <>
      <Head>
        <title>Cloud & Jayne | Holy Matrimony</title>
        <meta name="description" content="The wedding of Cloud and Jayne." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full flex-col items-center bg-[#fff]">
        <div className="relative flex h-full min-h-screen w-full max-w-screen-md flex-col px-4 py-3">
          <button
            className="sticky top-3 ml-auto flex h-[35px] w-[35px] flex-col items-center justify-center rounded-full bg-[rgba(184,136,103,0.5)] p-1"
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
          <p className="font-lora pt-7 text-center text-lg">
            Hello, this is a heartfelt invitation
          </p>
          <p className="font-lora py-3 text-center text-2xl">/</p>
          <p className="font-lora pt-2 text-center text-lg">
            We fell in love on 20th May 2018
          </p>
          <p className="font-lora pt-2 text-center text-lg">
            and we are overjoyed to invite you to our wedding
          </p>
          <p className="font-lora pt-2 text-center text-lg">
            on 20th May 2023.
          </p>
          <img
            src="/assets/images/rings.webp"
            alt="Rings"
            className="mx-auto mt-7 h-14 w-14 object-cover"
          />
          <p className="font-lora pt-2 text-center text-lg font-semibold">
            - Holy Matrimony -
          </p>
          <p className="font-lora pt-1 text-center text-lg">Time: 10.00 AM</p>
          <p className="font-lora pt-1 text-center text-lg">
            Venue: Wisma FGA, Level 5
          </p>
          <img
            src="/assets/images/plates.webp"
            alt="Rings"
            className="mx-auto mt-7 h-14 w-14 object-cover"
          />
          <p className="font-lora pt-2 text-center text-lg font-semibold">
            - Wedding Dinner -
          </p>
          <p className="font-lora pt-1 text-center text-lg">Time: 7.00 PM</p>
          <p className="font-lora pt-1 text-center text-lg">
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
          <div className="mt-28 grid h-full w-full grid-cols-3 gap-5 px-3">
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
        </div>
      </main>
    </>
  );
}
