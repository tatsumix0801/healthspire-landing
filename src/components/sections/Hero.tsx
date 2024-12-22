import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1604684768394-52a862c2955a?auto=format&fit=crop&w=1920",
    title: "あなたの健康を\n最優先に考える",
    subtitle: "最新の技術と確かな技術で、心地よい毎日をサポートします",
  },
  {
    image: "https://images.unsplash.com/photo-1591343395902-1adcb454c4e2?auto=format&fit=crop&w=1920",
    title: "痛みのない\n生活を目指して",
    subtitle: "一人ひとりに合わせた治療プランで根本的な改善を",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920",
    title: "プロフェッショナルな\n施術をお約束",
    subtitle: "経験豊富なスタッフが丁寧に対応いたします",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up whitespace-pre-line">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {slides[currentSlide].subtitle}
          </p>
          <div className="space-x-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold">
              無料カウンセリング予約
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white bg-white/10 hover:bg-white hover:text-black transition-colors text-white font-semibold"
            >
              詳しく見る
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 text-white rounded-full hover:bg-black/50"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 text-white rounded-full hover:bg-black/50"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default Hero;