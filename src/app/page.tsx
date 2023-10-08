import dynamic from 'next/dynamic'
const GoogleSignInButton = dynamic(() => import("@/components/LoginForm/GoogleSignInButton"), { ssr: false })

export default function Home() {
  return (
    <main className="flex flex-col">
      <div id="index-landing" className="invisible"></div>
      <div id="form-container" className="flex flex-col justify-center w-screen h-screen bg-[#0B4D8F]">
      
        <div className="flex items-center separator-container px-32 my-4">
          <hr className='flex-auto border-1.5' />
          <span className='flex-none mx-4 font-semibold text-white text-xl'>or</span>
          <hr className='flex-auto border-1.5' />
        </div>
        <GoogleSignInButton />
      </div>
    </main>
  );
}
