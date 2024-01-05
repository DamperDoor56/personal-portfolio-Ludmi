'use client'

import { useEffect, useState } from "react";

export function Presentation() {
    const first_text = "Front-End Developer";
  
    const [text1, setText1] = useState("");

    const textState = ["istyping", "isdeleting"];
    const [typing, setTyping] = useState(textState[0]);

    function sleep(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
          setText1(first_text.slice(0, text1.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      }, [text1]);
     

      useEffect(() => {
        const timeout = setTimeout(() => {
          if (typing === "istyping" && text1 !== first_text) {
            setText1(first_text.slice(0, text1.length + 1));
          }
          else if (text1 === first_text && typing === "istyping"){
            sleep(2000).then(()=>{
            setTyping(textState[1])
            })
          }
          else if ( (text1 === first_text && typing==="isdeleting") || typing === "isdeleting" ) {
            setText1(first_text.slice(0, text1.length - 1));
            if(text1.length<=2){
                setTyping(textState[0])
            }
          }
        }, 100);
      return () => clearTimeout(timeout);
    }, [text1, textState, typing]);

      return (
        <article className="bg-background-gray h-[90vh] w-full flex justify-center items-start">
            <div className="font-raleway flex flex-col w-full justify-center pt-[10rem] px-[22rem]">
            <p className="font-light self-start text-2xl">Hello there!</p>
            <div className="font-semibold self-center text-8xl w-full">
            <h1 className="whitespace-nowrap pl-20">
            I&apos;m <span className="text-lily">Ludmila</span>, a</h1>
                <span className="pl-40 text-aqua-green whitespace-nowrap
                 text-8xl after:content-['|'] after:animate-blink">{text1}</span>
            </div>
            <p className="font-light self-end text-2xl">Nice to meet you!</p>
            </div>
        </article>
    )
}