import Head from "next/head";
import Image from "next/image";

const technologies = [
	{
		image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
		name: "React",
	},
	{
		image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
		name: "TypeScript",
	},
	{
		image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
		name: "Node.js",
	},
	{
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
		name: "C++",
	},
	{
		image: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
		name: "C",
	},
	{
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/106px-Rust_programming_language_black_logo.svg.png?20220508043311",
		name: "Rust",
	},
	{
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png",
		name: "Java",
	},
	{
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png",
		name: "Blender",
	},
	{
		name: "Unreal Engine",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Unreal_Engine_Logo.svg/1971px-Unreal_Engine_Logo.svg.png",
	},
	{
		name: "Figma",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png",
	},
	{
		name: "Python",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
	},
	{
		name: "C#",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png",
	},
	{
		name: "Qt",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Qt_logo_2016.svg/1200px-Qt_logo_2016.svg.png",
	},
	{
		name: "PyTorch",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/1200px-PyTorch_logo_icon.svg.png",
	},
	{
		name: "Git",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png",
	},
	{
		name: "PostgreSQL",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
	},
	{
		name: "Linux",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/150px-Tux.svg.png",
	},
	{
		name: "Nginx",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nginx_logo.svg/120px-Nginx_logo.svg.png",
	},
	{
		name: "NextJS",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png",
	},
	{
		name: "Arduino",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/1024px-Arduino_Logo.svg.png",
	},
];

export default function Home() {
	return (
		<>
			<Head>
				<title>Animesh Dhakal</title>
				<meta name="description" content="Animesh Dhakal's Portfolio" />
				<link rel="icon" href="/icon.png" />

				<meta property="og:title" content="Animesh Dhakal" />
				<meta
					property="og:description"
					content="Animesh Dhakal's Portfolio"
				/>
			</Head>

			<div className="text-gray-800 flex justify-center items-center flex-col bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
				<div className="flex flex-col items-center my-4">
					<Image
						src="animesh.jpg"
						alt="Animesh"
						className="rounded-full h-32 w-32 shadow-gray-500 shadow-lg hover:scale-110 transition duration-500 ease-in-out"
					/>
				</div>

				<h1 className="text-2xl font-poppins font-semibold">
					Hi I am Animesh Dhakal
				</h1>

				<div className="flex flex-col items-center m-4">
					<h3 className="text-lg font-poppins font-semibold">
						I am a
					</h3>
					<h3 className="text-md font-poppins font-semibold">
						Full Stack Developer
					</h3>
					<h3 className="text-md font-poppins font-semibold">
						Embedded Systems Developer
					</h3>
					<h3 className="text-md font-poppins font-semibold">
						AI / ML / Deep Learning Enthusiast
					</h3>
					<h3 className="text-md font-poppins font-semibold">
						3D Artist
					</h3>
					<h3 className="text-md font-poppins font-semibold text-center">
						Who Loves Open Source
					</h3>
				</div>

				<div className="tech-stack mt-5 flex flex-col items-center">
					<h1 className="text-xl font-poppins font-semibold">
						Technologies I use
					</h1>
					<div className="grid grid-cols-5 gap-4 mt-4">
						{technologies.map((tech) => (
							<div
								className="m-2 hover:scale-125 transition duration-200 ease-in-out"
								key={tech.name}
							>
								<Image
									src={tech.image}
									alt={tech.name}
									className="h-16 w-16 object-contain mx-auto"
								/>
								<h3 className="text-sm font-poppins font-semibold text-center mt-1">
									{tech.name}
								</h3>
							</div>
						))}
					</div>
				</div>

				{/* Contact */}
				<div className="contact my-5 flex flex-col items-center">
					<h1 className="text-xl font-poppins font-semibold">
						Contact Me
					</h1>
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
							href="mailto:hello@animeshdhakal.com.np"
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

					<div className="flex flex-col items-center">
						<h1 className="text-md font-poppins font-semibold">
							Built with Next.js ❤️
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}
