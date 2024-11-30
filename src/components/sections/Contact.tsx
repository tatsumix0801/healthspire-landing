import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "送信完了",
      description: "お問い合わせありがとうございます。担当者より連絡させていただきます。",
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="heading">アクセス・お問い合わせ</h2>
        <p className="subheading">
          お気軽にお問い合わせください
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-video rounded-lg overflow-hidden mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853398555!2d139.76454611555536!3d35.68124053757839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1644567543619!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">住所</h4>
                  <p className="text-gray-600">〒100-0001 東京都千代田区XXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">電話番号</h4>
                  <p className="text-gray-600">03-XXXX-XXXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">メールアドレス</h4>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">営業時間</h4>
                  <p className="text-gray-600">
                    平日: 9:00 - 20:00<br />
                    土曜: 9:00 - 18:00<br />
                    日祝: 10:00 - 16:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  お名前
                </label>
                <Input required placeholder="山田 太郎" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  メールアドレス
                </label>
                <Input required type="email" placeholder="example@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  お問い合わせ内容
                </label>
                <Textarea required placeholder="お問い合わせ内容をご記入ください" className="h-32" />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                送信する
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;