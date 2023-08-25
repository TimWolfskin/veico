import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";
import { ContactForm } from "@/components";

const Footer = () => (
  <footer className="bg-[#151515] flex flex-col text-[#fff]  mt-5 border-t border-gray-100">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <ContactForm />
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold text-2xl">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link key={link.title} href={link.url} className="text-[#fff] text-lg">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <p>@2023 Veico. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
