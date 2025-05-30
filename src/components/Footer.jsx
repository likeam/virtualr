
import {resourcesLinks, platformLinks, communityLinks} from "../constants";


const Footer = () => {
  return (
   <footer className="mt-20 border-t py-10 border-x-neutral-700">
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <div>
      <h3 className="text-md font-semibold mb-4">Resources</h3>
      <ul className=" space-y-2">
        {resourcesLinks.map((res, index) => (
          <li key={index}>
            <a href={res.href} className=" text-neutral-300 hover:text-orange-400">{res.text}</a>
          </li>
        ))}
      </ul>
      </div>
      <div>
      <h3 className="text-md font-semibold mb-4">Platform</h3>
      <ul className=" space-y-2">
        {platformLinks.map((res, index) => (
          <li key={index}>
            <a href={res.href} className=" text-neutral-300 hover:text-orange-400">{res.text}</a>
          </li>
        ))}
      </ul>
      </div>
      <div>
      <h3 className="text-md font-semibold mb-4">Community</h3>
      <ul className=" space-y-2">
        {communityLinks.map((res, index) => (
          <li key={index}>
            <a href={res.href} className=" text-neutral-300 hover:text-orange-400">{res.text}</a>
          </li>
        ))}
      </ul>
      </div>
    </div>
   </footer>
  )
}
export default Footer