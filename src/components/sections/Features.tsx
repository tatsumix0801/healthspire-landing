import { Activity, Users, ThumbsUp, Clock } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "最新の治療技術",
    description: "常に最新の治療技術を取り入れ、効果的な施術を提供します。",
  },
  {
    icon: Users,
    title: "経験豊富なスタッフ",
    description: "専門的な知識と経験を持つスタッフが丁寧に対応いたします。",
  },
  {
    icon: ThumbsUp,
    title: "高い満足度",
    description: "98%以上の患者様から満足のお声をいただいております。",
  },
  {
    icon: Clock,
    title: "柔軟な予約対応",
    description: "お客様のご都合に合わせて、柔軟に予約を承ります。",
  },
];

const Features = () => {
  return (
    <section id="features" className="section bg-secondary">
      <div className="container">
        <h2 className="heading">特徴</h2>
        <p className="subheading">
          私たちが選ばれる理由をご紹介します
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
            <div className="text-gray-600">治療実績</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-primary mb-2">92%</div>
            <div className="text-gray-600">リピート率</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">患者様満足度</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;