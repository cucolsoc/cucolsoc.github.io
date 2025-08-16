import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-sans text-lg font-semibold mb-4">CUCOL</h3>
            <p className="font-serif text-secondary-foreground/80 leading-relaxed">
              Cambridge University Colombian Society - Connecting Colombian students and celebrating our heritage.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-serif text-secondary-foreground/80">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:text-primary transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 font-serif text-secondary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Student Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Academic Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cultural Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Alumni Network
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 font-serif text-secondary-foreground/80">
              <li>cucol@cam.ac.uk</li>
              <li>Cambridge University</li>
              <li>Cambridge, UK</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-serif text-secondary-foreground/80">
            © 2024 Cambridge University Colombian Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
