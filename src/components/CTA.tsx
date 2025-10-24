import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";

const CTA = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    console.log("Заявка:", { name, phone });
  };

  return (
    <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Готовы начать зарабатывать?
            </h2>
            <p className="text-xl text-secondary-foreground/70">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-border animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6">Заполните заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input 
                    type="text"
                    placeholder="Иван"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full py-6 text-lg border-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Номер телефона
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full py-6 text-lg border-2"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg shadow-glow transition-all hover:scale-105"
                >
                  Отправить заявку
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>

            {/* Contact Info & Features */}
            <div className="space-y-6 animate-slide-in-right">
              <Card className="p-8 bg-primary/10 border-2 border-primary/30 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">📞 Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Телефон</p>
                      <p className="font-semibold">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold">info@taxipark.ru</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-border">
                <h3 className="text-xl font-bold mb-4">✨ Что вы получите</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Консультацию по выбору направления</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Помощь в подключении и регистрации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Инструкции по работе с приложениями</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Поддержку на всех этапах</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-diagonal text-primary-foreground border-none shadow-glow">
                <p className="text-center font-bold text-lg">
                  🚀 Начните зарабатывать уже сегодня!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
