import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 ">
      <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      VirtualR Build
        <span className=" bg-gradient-to-r from-orange-400 to-red-800 text-transparent bg-clip-text"> for Develpers</span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Empower your own crativity and bring your own app idea to life with our instiution develped tools. Get started today and turn your imagation into imense reality! </p>
      <div className="flex justify-center my-10 ">
        <a href="#" className=" bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:text-orange-300">Start for free</a>
        <a href="" className=" text-sm py-3 px-4 mx-3 rounded-md border hover:text-orange-300">Documentation</a>
      </div>
      <div className="flex mt10 justify-center">
        <video 
          autoPlay
          loop
          muted  className="rounded-md w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"> <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.</video>
          <video 
          autoPlay
          loop
          muted  className="rounded-md w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"> <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.</video>
      </div>
    </div>
  )
}
export default HeroSection