import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = {
  skeletal: [
    {
      title: "骨格矯正",
      description: "体の歪みを整え、本来の姿勢を取り戻します。",
      price: "¥6,000~",
    },
    {
      title: "姿勢改善",
      description: "日常生活での正しい姿勢を指導し、改善を図ります。",
      price: "¥5,000~",
    },
    {
      title: "骨盤矯正",
      description: "骨盤の歪みを整え、体の不調を改善します。",
      price: "¥6,000~",
    },
  ],
  muscle: [
    {
      title: "筋膜リリース",
      description: "筋膜の癒着を解消し、柔軟性を向上させます。",
      price: "¥5,500~",
    },
    {
      title: "ストレッチ",
      description: "筋肉の柔軟性を高め、可動域を広げます。",
      price: "¥4,500~",
    },
    {
      title: "マッサージ",
      description: "筋肉の緊張をほぐし、リラックスを促します。",
      price: "¥4,000~",
    },
  ],
  special: [
    {
      title: "美容矯正",
      description: "体の歪みを整え、見た目の改善も図ります。",
      price: "¥7,000~",
    },
    {
      title: "スポーツ整体",
      description: "アスリートのパフォーマンス向上をサポート。",
      price: "¥6,500~",
    },
    {
      title: "産後ケア",
      description: "出産後の体の回復をサポートします。",
      price: "¥6,000~",
    },
  ],
};

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="heading">サービス</h2>
        <p className="subheading">
          お客様一人ひとりに合わせた最適な治療プランをご提案いたします
        </p>

        <Tabs defaultValue="skeletal" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="skeletal">骨格矯正</TabsTrigger>
            <TabsTrigger value="muscle">筋肉治療</TabsTrigger>
            <TabsTrigger value="special">特殊治療</TabsTrigger>
          </TabsList>
          
          {Object.entries(services).map(([key, items]) => (
            <TabsContent key={key} value={key}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {items.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-primary font-semibold">{service.price}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;