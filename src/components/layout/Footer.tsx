import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">健康整骨院</h3>
            <p className="text-gray-400">
              最新の技術と確かな技術で、
              あなたの健康をサポートします。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">クイックリンク</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">特徴</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">サービス</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white">お客様の声</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">アクセス</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">営業時間</h4>
            <ul className="space-y-2 text-gray-400">
              <li>平日: 9:00 - 20:00</li>
              <li>土曜: 9:00 - 18:00</li>
              <li>日祝: 10:00 - 16:00</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-gray-400">
              <li>電話: 03-XXXX-XXXX</li>
              <li>メール: info@example.com</li>
              <li>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="hover:text-primary"><Facebook size={20} /></a>
                  <a href="#" className="hover:text-primary"><Instagram size={20} /></a>
                  <a href="#" className="hover:text-primary"><Twitter size={20} /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 健康整骨院. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;