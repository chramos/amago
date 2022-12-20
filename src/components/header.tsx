import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LogoFull from "src/assets/svg/logo-full.svg";
import Logo from "src/assets/svg/logo.svg";
import Button from "./button";
import Container from "./container";

const menu = [
  { name: "Home", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Serviço", path: "/servicos" },
  { name: "Contato", path: "/contato" },
  { name: "Blog", path: "/blog" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

type HeaderProps = {};
const Header = ({}: HeaderProps) => {
  const router = useRouter();
  const [active, setActive] = React.useState(false);

  const handleScroll = (event: any) => {
    const y = window.pageYOffset;
    if (y > 50) {
      setActive(true);
      return;
    }
    setActive(false);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Disclosure
      as="header"
      className={`bg-white font-museo sticky top-0 z-50 transition-all duration-300 ${
        active ? "shadow-md" : ""
      }`}
    >
      {({ open }) => (
        <React.Fragment>
          <div className="h-20">
            <Container className="flex items-center justify-between h-full">
              <Link href={"/"}>
                <Logo className="block lg:hidden" width="42px" height="42px" />
              </Link>
              <Link href={"/"}>
                <LogoFull
                  className="hidden lg:block hover:cursor-pointer"
                  width="159px"
                  height="72px"
                />
              </Link>
              <ul className="hidden space-x-12 items-center lg:flex">
                {menu.map((item) => {
                  const active = router.pathname === item.path;
                  return (
                    <li
                      className={`uppercase text-sm relative flex flex-col transition-all duration-200 items-center ${
                        active
                          ? "text-primary-500"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                      key={item.name}
                    >
                      <Link href={item.path}>{item.name}</Link>
                      {active ? (
                        <div className="absolute top-6">
                          <svg
                            width="24"
                            height="5"
                            viewBox="0 0 24 5"
                            fill="currentColor"
                          >
                            <path d="M0.696046 4.63306C0.391526 4.63306 0.174011 4.5243 0.0435029 4.30679C-0.0435029 4.08927 0 3.87176 0.174012 3.65424C1.13107 2.47966 2.10989 1.58785 3.11046 0.978814C4.15453 0.32627 5.2421 0 6.37317 0C7.37374 0 8.65707 0.304519 10.2232 0.913559L14.53 2.54492C15.139 2.76243 15.6828 2.93644 16.1613 3.06695C16.6834 3.19746 17.1836 3.26272 17.6622 3.26272C18.5322 3.26272 19.337 3.0452 20.0766 2.61018C20.8161 2.17515 21.6644 1.41384 22.6215 0.326271C22.839 0.108756 23.0565 0 23.274 0C23.5786 0 23.7961 0.108756 23.9266 0.326271C24.0571 0.543786 24.0136 0.7613 23.7961 0.978814C22.839 2.15339 21.8384 3.06695 20.7944 3.7195C19.7938 4.32854 18.728 4.63306 17.5969 4.63306C16.5964 4.63306 15.313 4.32854 13.7469 3.7195L9.44013 2.08814C8.87459 1.87062 8.3308 1.69661 7.80877 1.56611C7.28673 1.4356 6.78645 1.37034 6.30792 1.37034C5.48136 1.37034 4.67656 1.58785 3.89351 2.02288C3.15396 2.45791 2.30565 3.21921 1.34859 4.30679C1.13108 4.5243 0.913561 4.63306 0.696046 4.63306Z" />
                          </svg>
                        </div>
                      ) : null}
                    </li>
                  );
                })}
                <li>
                  <Button
                    onClick={() => {
                      router.push("/contato");
                    }}
                  >
                    Solicite um orçamento
                  </Button>
                </li>
              </ul>
              <Disclosure.Button className="inline-flex lg:hidden  items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-200">
                {open ? (
                  <XIcon width="24px" height="24px" />
                ) : (
                  <MenuIcon width="24px" height="24px" />
                )}
              </Disclosure.Button>
            </Container>
          </div>
          <Transition
            enter="transition duration-300 ease"
            enterFrom="transform -translate-y-2 opacity-0"
            enterTo="transform translate-y-0 opacity-100"
            leave="transition duration-300 ease"
            leaveFrom="transform translate-y-0 opacity-100"
            leaveTo="transform -translate-y-2 opacity-0"
          >
            <Disclosure.Panel className="lg:hidden absolute bg-white left-0 right-0">
              <div className="pt-2 pb-4 space-y-1 border-b font-museo">
                <Container>
                  {menu.map((item) => {
                    const active = router.pathname === item.path;
                    return (
                      <Disclosure.Button
                        key={item.name}
                        onClick={() => {
                          router.push(item.path);
                        }}
                        className={`flex pl-3 pr-4 py-2 text-sm uppercase hover:translate-x-4 text-gray-400 items-center transition-all duration-200 ${
                          active ? "text-primary-500" : "border-transparent"
                        }`}
                      >
                        {item.name}&nbsp; &nbsp; &nbsp;
                        {active ? (
                          <svg
                            width="24"
                            height="5"
                            viewBox="0 0 24 5"
                            fill="currentColor"
                          >
                            <path d="M0.696046 4.63306C0.391526 4.63306 0.174011 4.5243 0.0435029 4.30679C-0.0435029 4.08927 0 3.87176 0.174012 3.65424C1.13107 2.47966 2.10989 1.58785 3.11046 0.978814C4.15453 0.32627 5.2421 0 6.37317 0C7.37374 0 8.65707 0.304519 10.2232 0.913559L14.53 2.54492C15.139 2.76243 15.6828 2.93644 16.1613 3.06695C16.6834 3.19746 17.1836 3.26272 17.6622 3.26272C18.5322 3.26272 19.337 3.0452 20.0766 2.61018C20.8161 2.17515 21.6644 1.41384 22.6215 0.326271C22.839 0.108756 23.0565 0 23.274 0C23.5786 0 23.7961 0.108756 23.9266 0.326271C24.0571 0.543786 24.0136 0.7613 23.7961 0.978814C22.839 2.15339 21.8384 3.06695 20.7944 3.7195C19.7938 4.32854 18.728 4.63306 17.5969 4.63306C16.5964 4.63306 15.313 4.32854 13.7469 3.7195L9.44013 2.08814C8.87459 1.87062 8.3308 1.69661 7.80877 1.56611C7.28673 1.4356 6.78645 1.37034 6.30792 1.37034C5.48136 1.37034 4.67656 1.58785 3.89351 2.02288C3.15396 2.45791 2.30565 3.21921 1.34859 4.30679C1.13108 4.5243 0.913561 4.63306 0.696046 4.63306Z" />
                          </svg>
                        ) : null}
                      </Disclosure.Button>
                    );
                  })}

                  <Disclosure.Button
                    className={`block pl-3 pr-4 py-2 rounded-md text-sm uppercase text-gray-400 hover:translate-x-4 transition-all duration-200`}
                    onClick={() => {
                      router.push("/contato");
                    }}
                  >
                    Solicite um orçamento
                  </Disclosure.Button>
                </Container>
              </div>
            </Disclosure.Panel>
          </Transition>
        </React.Fragment>
      )}
    </Disclosure>
  );
};

export default Header;
