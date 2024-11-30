import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-primary">
            健康整骨院
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary">
              特徴
            </a>
            <a href="#services" className="text-gray-600 hover:text-primary">
              サービス
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary">
              お客様の声
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary">
              アクセス
            </a>
            <Button className="bg-primary hover:bg-primary/90">
              予約する
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-4 space-y-4">
            <a href="#features" className="block text-gray-600">
              特徴
            </a>
            <a href="#services" className="block text-gray-600">
              サービス
            </a>
            <a href="#testimonials" className="block text-gray-600">
              お客様の声
            </a>
            <a href="#contact" className="block text-gray-600">
              アクセス
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90">
              予約する
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;