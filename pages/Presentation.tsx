import TextArraysAnimation from "../components/TextArraysAnimation";

export function Presentation() {

      return (
        <section className="bg-background-gray h-[90vh] w-full flex justify-center items-start">
            <div className="font-raleway grid w-full justify-center pt-[10rem] xsm:text-center lg:text-start">
            <p className="font-light self-start text-2xl">Hello there!</p>
            <div className="font-semibold lg:text-8xl text-7xl w-full">
            <h1 className="whitespace-nowrap lg:pl-20">
            I&apos;m <span className="text-lily">Ludmila</span>, a</h1>
              <TextArraysAnimation delay={2000} 
              texts={['Software Developer','Back-End Developer','Front-End Developer']}
              className="lg:pl-40 text-aqua-green whitespace-nowrap lg:text-8xl text-7xl"/>
            </div>
            <p className="font-light lg:justify-self-end text-2xl">Nice to meet you!</p>
            </div>
        </section>
    )
}