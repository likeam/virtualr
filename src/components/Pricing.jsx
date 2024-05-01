import { CheckCircle2 } from "lucide-react"
import {pricingOptions} from "../constants"

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className=" text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider"> Pricing</h2>
      <div className="flex flex-wrap">{pricingOptions.map((option, index) => (
        <div key={index} className=" w-full lg:w-1/3 sm:w-1/2">
          <div className="p-10 border border-neutral-400 ml-4 mt-2 rounded-xl">
            <p className=" text-4xl mb-8">
              {option.title}
              {option.title === "Pro" && (
                <span className=" bg-gradient-to-r from-orange-800 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>
              )}
            </p>
            <p className="mb-10">
              <span className=" text-5xl mt-6 mr-2">{option.price}</span>
              <span className=" text-neutral-400 tracking-tight">/Month</span>
            </p>
           <ul>
           {option.features.map((featur, index) => (
            <li key={index} className=" mt-8 dlex items-center flex ">
              <CheckCircle2 />
              <span className="ml-2">{featur}</span>
            </li>
           ))}
           </ul>
           <a href="#" className="inline-flex justify-center items-center mt-10 w-full h-12 p-5 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg">Subscribe</a>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
export default Pricing