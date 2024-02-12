import TextArraysAnimation from "../components/TextArraysAnimation";

export function Presentation() {

      return (
        <section className="bg-background-gray h-[90vh] w-full flex justify-center items-start">
            <div className="font-raleway grid w-full justify-center pt-[10rem] px-[22rem]">
            <p className="font-light self-start text-2xl">Hello there!</p>
            <div className="font-semibold self-center text-8xl w-full">
            <h1 className="whitespace-nowrap pl-20">
            I&apos;m <span className="text-lily">Ludmila</span>, a</h1>
              <TextArraysAnimation delay={2000} 
              texts={['Software Developer','Back-End Developer','Front-End Developer']}
              className="pl-40 text-aqua-green whitespace-nowrap text-8xl"/>
            </div>
            <p className="font-light justify-self-end text-2xl">Nice to meet you!</p>
            </div>
        </section>
    )
}