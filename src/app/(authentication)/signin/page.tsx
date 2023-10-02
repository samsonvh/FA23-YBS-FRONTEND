import Image from "next/image";
import landing from "/public/landing-bg.png";
import SignInForm from "@/components/SignInComponent";
function page() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-4/6 h-full">
        <Image
          src={landing}
          alt="Landing Img"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-2/6 justify-center">
        <SignInForm />
      </div>
    </div>
  );
}

export default page;
