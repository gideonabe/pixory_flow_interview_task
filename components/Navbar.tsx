'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

interface MenuItem {
  name: string
  href: string
}

const menus: MenuItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Community', href: '/community' },
  { name: 'About', href: '/about' },
  { name: 'Airdrop', href: '/airdrop' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <>
      <header className="w-full bg-primary backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-400 items-center justify-between px-5 md:px-10">

          {/* LOGO */}
          <Link href="/" className="relative z-50 flex items-center">
            <Image
              src="/logo.svg"
              alt="Pixory Flow Logo"
              width={35}
              height={35}
              className="w-7 md:w-8.75"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-10 lg:flex">
            {menus.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  relative font-mono text-sm uppercase tracking-[-0.56px]
                  text-white transition-all duration-300
                  hover:text-white
                  after:absolute after:left-0 after:-bottom-1
                  after:h-px after:w-0 after:bg-white
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Link
              href="/sign-in"
              className="
                flex h-14 w-50 items-center justify-center
                rounded-full bg-white text-accent
                transition-all duration-300 ease-out
                hover:-translate-y-0.5
                hover:bg-white/90
                hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
                active:scale-95
              "
            >
              <span className="font-light tracking-[-0.48px]">
                Sign in
              </span>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="relative z-50 lg:hidden"
          >
            <Menu className="text-white" size={30} />
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/70 backdrop-blur-2xl
          transition-all duration-500 lg:hidden
          ${
            open
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
      >
        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-5 top-6"
        >
          <X className="text-white" size={32} />
        </button>

        {/* CONTENT */}
        <div className="flex h-full flex-col items-center justify-center gap-10">

          {menus.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`
                font-mono text-3xl uppercase text-white
                transition-all duration-500
                hover:text-white/60
                ${
                  open
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }
              `}
              style={{
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {item.name}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/sign-in"
            className="
              mt-6 flex h-14 w-56 items-center justify-center
              rounded-full bg-white text-black
              transition-all duration-300
              hover:scale-105
            "
          >
            Sign in
          </Link>
        </div>
      </div>
    </>
  )
}