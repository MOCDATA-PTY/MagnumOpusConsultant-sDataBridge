import { BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/50">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">DataFlow</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Transform your marketing data into actionable insights with powerful analytics and reporting.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Integrations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">API Reference</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 DataFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
