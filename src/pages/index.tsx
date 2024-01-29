import Head from "next/head";
import { useState } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

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
          <p className="font-caiti text-3xl tracking-tight">
            润毅与碧华的婚礼邀请函
          </p>
          <div className="flex w-[320px] flex-row items-center justify-between pl-1 pt-3 opacity-60">
            <p className="font-caiti text-2xl font-thin tracking-wide">
              2024.05.05
            </p>
            <p className="font-caiti text-2xl font-thin tracking-wide">
              5.00pm
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
