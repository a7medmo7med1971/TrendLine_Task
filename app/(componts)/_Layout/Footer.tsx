import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  Send,
} from "lucide-react";
export default function Footer() {
  const backgroundImage = "/assets/Footer.jpg";

  const helpLinks = [
    { href: "/account", label: "My Account" },
    { href: "/faqs", label: "FAQs" },
    { href: "/categories", label: "Categories" },
    { href: "/products", label: "All Products" },
  ];

  const policyLinks = [
    { href: "/refund-policy", label: "Refund Policy" },
    { href: "/about", label: "About Us" },
    { href: "/cancellation-policy", label: "Cancellation Policy" },
    { href: "/terms", label: "Terms and Conditions" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ];

  const socialLinks = [
    { href: "#", icon: Facebook },
    { href: "#", icon: Twitter },
    { href: "#", icon: Instagram },
    { href: "#", icon: Linkedin },
    { href: "#", icon: MessageCircle },
    { href: "#", icon: Send },
  ];

  return (
    <footer className="relative text-white overflow-hidden w-full">
      {/* Background */}
      <Image
        src={backgroundImage}
        alt="Footer background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pt-16 pb-14">
        <div className="flex flex-col xl:flex-row justify-center gap-10 ">
          {/* Logo + Description */}
          <div className="max-w-sm">
            <Image
              src="/assets/footer-logo.svg"
              alt="TinyTales"
              width={80}
              height={60}
            />
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae
              ipsam in eos qui consequatur ab. Soluta dolor quae.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-20">
            {/* Help */}
            <div>
              <h4 className="text-lg font-semibold mb-5">Let Us Help</h4>
              <ul className="space-y-3 text-sm text-white/80">
                {helpLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h4 className="text-lg font-semibold mb-5">Policies</h4>
              <ul className="space-y-3 text-sm text-white/80">
                {policyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Email + Social */}
          <div className=" max-w-[369px] ">
            <h4 className="text-lg font-semibold mb-5">Send Email</h4>

            {/* Email */}
            <div className="flex gap-2 mb-6  bg-white border border-black/10 rounded-lg p-1.5">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-1 text-sm text-gray-800 bg-transparent focus:outline-none "
              />
              <button className="  shrink-0
                px-4 sm:px-6
                h-10 sm:h-11
                bg-[#C4A39A]
                hover:bg-[#b79288]
                rounded-lg
                text-white
                text-sm
                font-medium
                transition
                flex items-center justify-center
                whitespace-nowrap">
                Send
              </button>
            </div>

            {/* Social */}
            <div>
              <p className="mb-4 font-medium">Follow Us</p>
              <div className="flex gap-5">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      className="hover:text-[#C4A39A] transition"
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
