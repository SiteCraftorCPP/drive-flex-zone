import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Bike, Car, Truck } from "lucide-react";

const CTA = () => {
  const scrollToForm = (service: string) => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
      console.log(`Выбрана услуга: ${service}`);
    }
  };

  const services = [
    {
      icon: Bike,
      title: "Курьер пеший/вело",
      income: "120-180k ₽",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Car,
      title: "Курьер на авто",
      income: "180-220k ₽",
      gradient: "from-primary/30 to-primary/10"
    },
    {
      icon: Truck,
      title: "Водитель грузового",
      income: "210-420k ₽",
      gradient: "from-primary/25 to-primary/8"
    }
  ];

  return (
    <>
      {/* CTA Section with Buttons */}
      <section className="py-24 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                Готовы начать <span className="text-primary">зарабатывать?</span>
              </h2>
              <p className="text-2xl text-secondary-foreground/80 font-medium">
                Выберите направление и начните работу уже сегодня
              </p>
            </div>

            {/* Service Selection Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group relative p-8 bg-card/90 backdrop-blur-xl border-2 border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-glow animate-scale-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-glow mx-auto">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black mb-3 text-center">{service.title}</h3>
                    
                    {/* Income */}
                    <div className="text-3xl font-black text-primary mb-6 text-center">
                      {service.income}
                    </div>

                    {/* Button */}
                    <Button
                      onClick={() => scrollToForm(service.title)}
                      className="w-full bg-gradient-diagonal hover:opacity-90 text-primary-foreground font-black py-6 text-lg shadow-glow transition-all duration-300 hover:scale-105 group-hover:shadow-glow"
                    >
                      Подключиться
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section id="contact-form" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <span className="inline-block text-primary font-black text-lg mb-4 px-6 py-2 bg-primary/10 rounded-full border-2 border-primary/30">
                КОНТАКТЫ
              </span>
              <h2 className="text-5xl lg:text-6xl font-black mt-4 mb-6 leading-tight">
                Свяжитесь с <span className="text-primary">нами</span>
              </h2>
              <p className="text-2xl text-muted-foreground font-medium">
                Мы ответим на все ваши вопросы и поможем с подключением
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Cards */}
              <Card className="group p-10 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-xl border-2 border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow animate-slide-in-left">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-glow">
                    <Phone className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3">Телефон</h3>
                    <a href="tel:+79991234567" className="text-3xl font-black text-primary hover:underline">
                      +7 (999) 123-45-67
                    </a>
                    <p className="text-muted-foreground mt-2">Звоните с 9:00 до 21:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-glow">
                    <Mail className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3">Email</h3>
                    <a href="mailto:info@taxipark.ru" className="text-2xl font-black text-primary hover:underline break-all">
                      info@taxipark.ru
                    </a>
                    <p className="text-muted-foreground mt-2">Ответим в течение часа</p>
                  </div>
                </div>
              </Card>

              {/* Info Card */}
              <Card className="group p-10 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow animate-slide-in-right">
                <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
                  <span className="text-4xl">⚡</span>
                  Быстрый старт
                </h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-black text-lg mb-1">Регистрация за 10 минут</div>
                      <div className="text-muted-foreground">Заполните форму онлайн</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-black text-lg mb-1">Работа по всему городу</div>
                      <div className="text-muted-foreground">Выбирайте удобные районы</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-black text-lg mb-1">Поддержка 24/7</div>
                      <div className="text-muted-foreground">Всегда на связи</div>
                    </div>
                  </li>
                </ul>

                <div className="mt-10 p-6 bg-gradient-diagonal text-primary-foreground rounded-2xl shadow-glow">
                  <p className="text-center font-black text-xl">
                    🚀 Начните зарабатывать уже сегодня!
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
