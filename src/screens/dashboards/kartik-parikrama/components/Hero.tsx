// import { Input } from "@/components/ui/input";
import { Input } from "@/components/ui/input";
import SadhuSanga from "../../../../assets/us-sadhu-sanga.jpg";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col w-3/3">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex font-bold items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          Kartik Parikrama 2023
        </div>
        <img src={SadhuSanga} className="rounded-lg shadow-sm" alt="" />
        <Input className="mt-5 mb-5" placeholder="Search..." name="search" />
        {/* <div className="mb-10">
          <ul className="flex flex-col flex-wrap">
            <li>(default by name/email/city)</li>
            <li>
              For Custom Query: eg:name:jayendran + status:confirmed + city:
              austin
            </li>
            <li>
              Available Field Names: name(either legal or
              spiritual)/license/building/room/parking/gender/city/registration/email/
              status(either regn or check-in
              status)/needs/state/comments/spdisciple
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="text-white py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
  <h1>Kartik Parikrama 2023</h1>
  {/* Hero Image */
}
// <img
// src={SadhuSanga}
// alt="Hero Image"
// className="mx-auto w-full max-w-lg mb-8 rounded-lg shadow-lg"
// />

{
  /* Search Bar */
}
// <div className="max-w-lg mx-auto mb-8">
//   <input
//     type="text"
//     placeholder="Search..."
//     className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//   />
// </div>

{
  /* Paragraph */
}
{
  /* <p className="text-center text-base sm:text-lg leading-relaxed"> */
}
{
  /* (default by name/email/city) or for custom query: eg:name:jayendran +
    status:confirmed + city: austin available field names: name(either
    legal or
    spiritual)/license/building/room/parking/gender/city/registration/email/
    status(either regn or check-in status)/needs/state/comments/spdisciple */
}
{
  /* </p> */
}
// </div>
// </div> */}
