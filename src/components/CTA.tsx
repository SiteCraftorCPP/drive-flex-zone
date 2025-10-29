import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Bike, Car, Truck, Building2, User, FileText, Calendar, MessageCircle, Rocket } from "lucide-react";
import YandexLogo from "./YandexLogo";

const CTA = () => {
  const scrollToForm = (service: string) => {
    // Функционал будет реализован позже
    console.log(`Выбрана услуга: ${service}`);
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
      <section id="services-cta" className="py-24 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground overflow-hidden relative z-0">
        {/* Animated Vehicle Icons - Desktop Only */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
          <Bike className="absolute top-[10%] left-[4%] w-10 h-10 animate-float text-primary" style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <Car className="absolute top-[35%] left-[6%] w-10 h-10 animate-float text-primary" style={{ animationDelay: '1.2s', animationDuration: '4.5s' }} />
          <div className="absolute top-[65%] left-[3%] animate-float" style={{ animationDelay: '0.5s', animationDuration: '5s' }}>
            <div className="relative">
              <Truck className="w-12 h-12 text-primary" />
              <YandexLogo />
            </div>
          </div>
          <Car className="absolute top-[15%] right-[5%] w-10 h-10 animate-float text-primary" style={{ animationDelay: '0.8s', animationDuration: '4s' }} />
          <Bike className="absolute top-[55%] right-[7%] w-10 h-10 animate-float text-primary" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
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

                  <div className="relative">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-glow mx-auto animate-zoom-in-out-sync">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black mb-3 text-center">{service.title}</h3>

                    {/* Income */}
                    <div className="text-3xl font-black text-primary mb-6 text-center">
                      {service.income}
                    </div>

                    {/* Button */}
                    <Button asChild className="w-full bg-gradient-diagonal hover:opacity-90 text-primary-foreground font-black py-6 text-lg shadow-glow transition-all duration-300 hover:scale-105 group-hover:shadow-glow">
                      <a href="https://t.me/bez_tormozovbot" target="_blank" rel="noopener noreferrer">
                        Подключиться
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section id="contact-form" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative">
        {/* Animated Vehicle Icons - Desktop Only */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
          <Car className="absolute top-[8%] left-[3%] w-10 h-10 animate-float" style={{ color: '#000000', animationDelay: '0s', animationDuration: '4s' }} />
          <div className="absolute top-[38%] left-[5%] animate-float" style={{ animationDelay: '1.2s', animationDuration: '4.5s' }}>
            <div className="relative">
              <Truck className="w-12 h-12" style={{ color: '#000000' }} />
              <YandexLogo />
            </div>
          </div>
          <Bike className="absolute top-[68%] left-[4%] w-10 h-10 animate-float" style={{ color: '#000000', animationDelay: '0.5s', animationDuration: '5s' }} />
          <Bike className="absolute top-[12%] right-[4%] w-10 h-10 animate-float" style={{ color: '#000000', animationDelay: '0.8s', animationDuration: '4s' }} />
          <Car className="absolute top-[58%] right-[6%] w-10 h-10 animate-float" style={{ color: '#000000', animationDelay: '1.5s', animationDuration: '4.5s' }} />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20 animate-fade-in">
              <span className="inline-block text-primary font-black text-lg mb-4 px-6 py-2 bg-primary/10 rounded-full border-2 border-primary/30">
                КОНТАКТЫ
              </span>
              <h2 className="text-5xl lg:text-6xl font-black mt-4 mb-6 leading-tight">
                Свяжитесь с <span className="text-primary">нами</span>
              </h2>
              <p className="text-2xl text-muted-foreground font-medium max-w-4xl mx-auto">
                <span className="text-foreground">Парк</span> <span className="text-primary font-bold">БЕЗ ТОРМОЗОВ</span> - ваш надежный партнер в сфере доставки. Мы поможем вам начать зарабатывать уже сегодня!
              </p>
            </div>

            {/* Map Card */}
            <Card className="p-6 md:p-8 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-xl border-2 border-border shadow-glow mb-16 animate-scale-in">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-glow animate-zoom-in-out-sync">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-3">Адрес:</h3>
                  <p className="text-muted-foreground">Москва, Митино, ул. Митинская, д. 16, Помещение 23П</p>
                </div>
              </div>

              <div className="w-full rounded-xl border-2 border-border overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.373356,55.842438&amp;z=17&amp;l=map&amp;pt=37.373356,55.842438,comma"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </Card>

            {/* Park Info Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Park Details Card */}
              <Card className="group p-8 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-xl border-2 border-border hover:border-primary/50 transition-all duration-700 hover:-translate-y-4 hover:shadow-glow hover:shadow-primary/30 animate-scale-in hover:scale-105">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/50 transition-all duration-500 shadow-glow animate-zoom-in-out-sync">
                    <Building2 className="w-8 h-8 text-primary-foreground group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3">ООО «СЕПТИКПРО»</h3>
                    <p className="text-muted-foreground">Официальный партнер Яндекс</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-card/50 rounded-xl border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="font-bold text-sm text-muted-foreground">ИНН</span>
                      </div>
                      <div className="font-black text-lg">7733431709</div>
                    </div>
                    <div className="p-4 bg-card/50 rounded-xl border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="font-bold text-sm text-muted-foreground">КПП</span>
                      </div>
                      <div className="font-black text-lg">773301001</div>
                    </div>
                  </div>

                  <div className="p-4 bg-card/50 rounded-xl border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-primary" />
                      <span className="font-bold text-sm text-muted-foreground">ОГРН</span>
                    </div>
                    <div className="font-black text-lg">1237700874443</div>
                  </div>
                </div>
              </Card>

              {/* CTA Buttons */}
              <div className="lg:col-span-2 flex flex-col gap-8 pt-24 lg:pt-16">
                <div className="text-center">
                  <h3 className="text-5xl lg:text-7xl font-black mb-4 relative inline-block">
                    <span className="text-foreground">Парк</span> <span className="text-primary inline-block" style={{
                      textShadow: '0 0 15px rgba(229, 52, 18, 0.6)',
                      filter: 'drop-shadow(0 0 8px rgba(229, 52, 18, 0.4))'
                    }}>
                      БЕЗ ТОРМОЗОВ
                    </span>
                  </h3>
                  <p className="text-xl text-muted-foreground">Ваш надежный партнер</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                  <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/90 hover:via-primary hover:to-primary/90 text-primary-foreground font-black px-12 py-6 text-xl shadow-glow transition-all duration-300 hover:scale-105 group overflow-hidden rounded-2xl border-2 border-primary/20 hover:border-primary/40">
                    <a href="https://t.me/Park_Beztormozov" target="_blank" rel="noopener noreferrer">
                      <span className="relative flex items-center gap-3">
                        <MessageCircle className="w-6 h-6" />
                        Связаться в Telegram
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </a>
                  </Button>

                  <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/90 hover:via-primary hover:to-primary/90 text-primary-foreground font-black px-12 py-6 text-xl shadow-glow transition-all duration-300 hover:scale-105 group overflow-hidden rounded-2xl border-2 border-primary/20 hover:border-primary/40">
                    <a href="https://wa.me/79268553077" target="_blank" rel="noopener noreferrer">
                      <span className="relative flex items-center gap-3">
                        <Phone className="w-6 h-6" />
                        Связаться в WhatsApp
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
