import SignInForm from "@/components/LoginForm/SignInForm";
import dynamic from "next/dynamic";
import Image from "next/image";
import LandingLogo from "/public/blue_logo.svg";

const GoogleSignInButton = dynamic(
  () => import("@/components/LoginForm/GoogleSignInButton"),
  { ssr: false },
);

export default function Home() {
  return (
    <main className="flex">
      <div
        id="index-landing"
        className="hidden sm:flex sm:items-center sm:w-4/6 h-screen"
      >
        <div
          id="logo-container"
          className="mx-auto aspect-square w-2/6"
        >
          <Image src={LandingLogo} alt="Logo" className="sm:mt-4 xl:mt-12 sm:scale-[2.5] xl:scale-[3]"/>
        </div>
      </div>
      <div
        id="form-container"
        className="flex flex-col justify-center w-screen sm:w-2/6 h-screen drop-shadow-lg bg-[#fff]"
      >
        <div
          id="logo-container"
          className="sm:hidden mx-auto aspect-square w-4/6"
        >
          <Image src={LandingLogo} alt="Logo" className="sm:mt-4 xl:mt-12 scale-[1.5]"/>
        </div>
        <h1 className="mx-auto mb-8 sm:mb-12 xl:mb-14 text-3xl sm:text-3xl xl:text-5xl font-semibold text-[#0B4D8F] drop-shadow-xl">
          Management Portal
        </h1>
        <SignInForm />
        <div className="flex items-center separator-container mx-auto w-2/4 mb-4 mt-8">
          <hr className="flex-auto border-black border-1.5" />
          <span className="flex-none mx-2 font-semibold text-xl">or</span>
          <hr className="flex-auto border-black border-1.5" />
        </div>
        <GoogleSignInButton />
      </div>
    </main>
  );
}
