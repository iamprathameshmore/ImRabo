import Link from "next/link";

export const Footer1 = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Platform",
      description: "Powering the future of smart business management.",
      items: [
        { title: "AI Insights", href: "/ai-insights" },
        { title: "Automation", href: "/automation" },
        { title: "Security", href: "/security" },
        { title: "Integrations", href: "/integrations" },
      ],
    },
    {
      title: "Company",
      description: "Get to know the team behind Imrabo.",
      items: [
        { title: "About Us", href: "/about" },
        { title: "Careers", href: "/careers" },
        { title: "Partners", href: "/partners" },
        { title: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <div className="w-full py-20 lg:py-40 bg-black text-white p-5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Section - Imrabo Info */}
          <div className="flex flex-col gap-8 items-start">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-5xl font-semibold">Imrabo</h2>
              <p className="text-lg max-w-lg leading-relaxed text-gray-300">
                Elevating business efficiency with AI-driven solutions.
              </p>
            </div>
            <div className="flex flex-row gap-20">
              <div className="flex flex-col text-sm text-gray-400">
                <p>123 Innovation Street</p>
                <p>San Francisco, CA</p>
                <p>USA</p>
              </div>
              <div className="flex flex-col text-sm text-gray-400">
                <Link href="/terms" className="hover:text-gray-200">Terms of Service</Link>
                <Link href="/privacy" className="hover:text-gray-200">Privacy Policy</Link>
              </div>
            </div>
          </div>

          {/* Right Section - Navigation */}
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <p className="text-xl font-medium">{item.title}</p>
                {item.items &&
                  item.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {subItem.title}
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        {/* <div className="flex justify-center gap-8 mt-10">
          <Link href="https://facebook.com" className="text-gray-400 hover:text-white transition">
            Facebook
          </Link>
          <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition">
            Twitter
          </Link>
          <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition">
            LinkedIn
          </Link>
          <Link href="https://instagram.com" className="text-gray-400 hover:text-white transition">
            Instagram
          </Link>
        </div> */}
      </div>
    </div>
  );
};
