export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">Men's Wear</h2>
          <p className="mt-2 text-sm text-gray-400">
            Premium fashion collection for modern gentlemen.
          </p>
        </div>

        {/* Shop Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Watches</a></li>
            <li><a href="#" className="hover:text-white">Polo Shirts</a></li>
            <li><a href="#" className="hover:text-white">Official Shirts</a></li>
            <li><a href="#" className="hover:text-white">Jeans</a></li>
            <li><a href="#" className="hover:text-white">Sneakers</a></li>
            <li><a href="#" className="hover:text-white">Event Wearings</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Care</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white">Order Tracking</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Connected</h3>
          <p className="text-sm">📍 Karachi, Pakistan</p>
          <p className="text-sm">📧 support@menswear.com</p>
          <p className="text-sm">📞 +92 300 1234567</p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Men's Wear. All rights reserved.
      </div>
    </footer>
  );
}
