import Image from "next/image";
import Circle from "@/public/assets/Circle-light-blue.png";
import GrayCircle from "@/public/assets/gray-big-circle.png";

export function About() {
      return (
        <section id="#About" className="bg-background-gray h-[80vh] font-gothic w-full gap-14 flex flex-col items-center">
            <div className="grid gap-5 text-center z-10">
            <h1 className="text-7xl">ABOUT ME</h1>
            <hr className="w-80 h-1 bg-aqua-green border-aqua-green" />
            </div>
                <p className="text-2xl max-w-[45rem] self-center leading-10 z-10 xsm:p-3 lg:p-0">
                My name is Ludmila, and I&apos;m a Software Developer with a <span className="text-lily">diverse background in building innovative products and projects</span>. <br/>
                I&apos;ve contributed to both front-end and back-end development, collaborating with agile teams in various work environments, ranging from large to small teams.
                Additionally, I&apos;m comfortable working independently.  <br/>
                Throughout my development journey, I&apos;ve acquired skills <span className="text-lily">in design patterns</span>, used Git for version control, and managed projects with tools like Jira. 
                <span className="text-lily"> I have experience with content management systems (CMS) and a strong foundation in testing methodologies.</span>
                I have experience in a variety of technologies, including <span className="text-lily"> NextJS, Strapi, Firebase, MongoDB, ExpressJS, SQL, MySQL, Redux, React Native, SASS, Tailwind, Bootstrap, Laravel/PHP, and Node.js/ Nest.js.</span>
                </p>
            <aside className="absolute right-0 z-0 xsm:w-60 xsm:top-[45rem] lg:top-auto lg:w-auto">
                <Image src={Circle} alt={"circle-light-blue"} />
            </aside>
            <aside className="absolute left-0 z-0 xsm:w-[30rem] lg:w-auto">
                <Image src={GrayCircle} alt={"circle-light-blue"} />
            </aside>
        </section>
    )
}