import Typewriter from "@/components/Typewriter";

export function Presentation() {
    return (
        <article className="bg-background-gray h-[90vh] w-full flex justify-center items-start">
            <div className="font-raleway flex flex-col w-full justify-center pt-[10rem] px-[22rem]">
            <p className="font-light self-start text-2xl">Hello there!</p>
            <div className="font-semibold self-center text-8xl w-full">
            <h1 className="whitespace-nowrap pl-20">
            I&apos;m <span>Ludmila</span>, a</h1>
            <Typewriter className="pl-40 text-aqua-green whitespace-nowrap"
            texts={["Front-End Developer", "Back-End Developer", "Software Developer"]}
            delay={200} 
            stopTime={2000}
            />
            </div>
            <p className="font-light self-end text-2xl">Nice to meet you!</p>
            </div>
        </article>
    )
}