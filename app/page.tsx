import Image from "next/image";
import Link from "next/link";
import { getTechnologies } from "@/lib/data";

interface Technology {
  image: string;
  name: string;
  href: string;
}

export default async function Home() {
  const technologies = getTechnologies();

  return (
    <>
      <div className="flex justify-center items-center flex-col bg-gradient-to-r bg-white">
        <div className="flex flex-col items-center my-4">
          <Image
            width={512}
            height={512}
            src="/animesh.jpeg"
            alt="Animesh"
            className="rounded-full h-32 w-32 shadow-gray-500 shadow-lg hover:scale-110 transition duration-500 ease-in-out"
          />
        </div>

        <h1 className="text-xl leading-2 font-semibold uppercase text-gray-600">
          Hi I am
        </h1>
        <h1 className="text-4xl font-bold tracking-wider uppercase text-gray-600">
          Animesh Dhakal
        </h1>

        <div className="flex flex-col items-center m-4">
          <h3 className="text-lg font-semibold uppercase text-gray-700">
            I am a
          </h3>
          <h3 className="text-md text-gray-700">Full Stack Developer</h3>
          <h3 className="text-md text-gray-700">Embedded Systems Developer</h3>
          <h3 className="text-md text-gray-700">
            AI / ML / Deep Learning Enthusiast
          </h3>
          <h3 className="text-md text-gray-700">3D Artist</h3>
          <h3 className="text-md text-gray-700">Who Loves Open Source</h3>
        </div>

        <div className="tech-stack mt-5 flex flex-col items-center text-gray-600">
          <h1 className="text-xl  font-semibold">Technologies I use</h1>
          <div className="grid grid-cols-3 gap-4 mt-4 md:grid-cols-5">
            {technologies.map((tech) => (
              <Link
                href={tech.href}
                target="_blank"
                className="m-2 hover:scale-125 transition duration-200 ease-in-out border-2 border-gray-100 rounded-lg py-3 px-4"
                key={tech.name}
              >
                <Image
                  width={128}
                  height={128}
                  src={tech.image}
                  alt={tech.name}
                  className="h-16 w-16 object-contain mx-auto"
                />
                <h3 className="text-sm  font-semibold text-center mt-1">
                  {tech.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="contact my-5 flex flex-col items-center text-gray-600">
          <h1 className="text-xl  font-semibold">Contact Me</h1>
          <div className="flex items-center m-4 flex-row space-x-4">
            <a
              href="https://github.com/animeshdhakal"
              className="hover:scale-125 transform transition duration-500 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/animesh.dhakal.1/"
              className="hover:scale-125 transform transition duration-500 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a
              href="mailto:hi@animeshdhakal.com.np"
              className="hover:scale-125 transform transition duration-500 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
