import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className='mx-16 mb-10 mt-20 px-40'>
      <div className='flex gap-4 mb-5'>
        <Facebook size={28} />
        <Youtube size={28} />
        <Twitter size={28} />
        <Instagram size={28} />
      </div>
      <ul className="grid grid-cols-4 ">
        <li className="mb-2 text-stone-500 text-xs hover:underline hover:underline-offset-1 cursor-pointer">Audio Description</li>
        <li className="mb-2 text-stone-500 text-xs hover:underline hover:underline-offset-1 cursor-pointer">Help Centre</li>
        <li className="mb-2 text-stone-500 text-xs hover:underline hover:underline-offset-1 cursor-pointer">Gift Cards</li>
        <li className="mb-2 text-stone-500 text-xs hover:underline hover:underline-offset-1 cursor-pointer">Media Centre</li>
        <li className="mb-2 text-stone-500 text-xs hover:underline hover:underline-offset-1 cursor-pointer">Investor Relations</li>
        <li className="mb-2 text-stone-500 text-xs hover:underline hover:underline-offset-1 cursor-pointer">Jobs</li>
        <li className="mb-2 text-stone-500 text-xs hover:underline hover:underline-offset-1 cursor-pointer">Terms of Use</li>
        <li className="mb-2 text-stone-500 text-xs hover:underline hover:underline-offset-1 cursor-pointer">Privacy</li>
        <li className="mb-2 text-stone-500 text-xs hover:underline hover:underline-offset-1 cursor-pointer">Legal Notices</li>
        <li className="mb-2 text-stone-500 text-xs hover:underline hover:underline-offset-1 cursor-pointer">Cookie Preferences</li>
        <li className="mb-2 text-stone-500 text-xs hover:underline hover:underline-offset-1 cursor-pointer">Corporate Information</li>
        <li className="mb-2 text-stone-500 text-xs hover:underline hover:underline-offset-1 cursor-pointer">Contact Us</li>
      </ul>
      <button className="my-5 border-2 border-stone-500 text-stone-500 text-sm px-2 py-1 hover:text-white">Service Code</button>
      <p className="text-xs text-stone-500">© 1997-2024 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;