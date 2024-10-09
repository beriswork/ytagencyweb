import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4 neon-glow">AdScalers</h2>
            <p className="text-muted-foreground">
              Helping Coaches, Consultants, and Course Providers scale their business with YouTube ads.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 neon-glow-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="#calculator" className="hover:text-primary transition-colors">ROI Calculator</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 neon-glow-secondary">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-muted-foreground">
          <p>&copy; 2023 AdScalers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer