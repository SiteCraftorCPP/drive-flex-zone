import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Bike, Car, Truck, Building2, User, FileText, Calendar, MessageCircle, Rocket } from "lucide-react";

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
                ООО "СЕПТИКПРО" - ваш надежный партнер в сфере доставки. Мы поможем вам начать зарабатывать уже сегодня!
              </p>
            </div>

            {/* Company Info Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Company Details Card */}
              <Card className="group p-8 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-xl border-2 border-border hover:border-primary/50 transition-all duration-700 hover:-translate-y-4 hover:shadow-glow hover:shadow-primary/30 animate-scale-in hover:scale-105">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/50 transition-all duration-500 shadow-glow animate-zoom-in-out-sync">
                    <Building2 className="w-8 h-8 text-primary-foreground group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3">ООО "СЕПТИКПРО"</h3>
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

                  <div className="p-4 bg-primary/10 rounded-xl border border-primary/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-bold text-sm text-primary">Дата образования</span>
                    </div>
                    <div className="font-black text-lg text-primary">12.12.2023</div>
                  </div>
                </div>
              </Card>

              {/* Contact Methods Card */}
              <Card className="group p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl border-2 border-primary/30 hover:border-primary/50 transition-all duration-700 hover:-translate-y-4 hover:shadow-glow hover:shadow-primary/30 animate-scale-in hover:scale-105" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/50 transition-all duration-500 shadow-glow animate-zoom-in-out-sync">
                    <User className="w-8 h-8 text-primary-foreground group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3">Руководитель</h3>
                    <p className="text-muted-foreground">Генеральный директор</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/30">
                    <div className="text-center">
                      <div className="font-black text-xl mb-2">Ражев Александр Владимирович</div>
                      <div className="text-primary font-semibold">Генеральный директор</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-muted-foreground">Telegram</div>
                          <Button asChild variant="link" className="p-0 h-auto font-black text-primary text-lg hover:text-primary/80">
                            <a href="https://t.me/Alex_skorp" target="_blank" rel="noopener noreferrer">
                              @Alex_skorp
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-muted-foreground">WhatsApp</div>
                          <Button asChild variant="link" className="p-0 h-auto font-black text-primary text-lg hover:text-primary/80">
                            <a href="https://wa.me/79269883077" target="_blank" rel="noopener noreferrer">
                              +7 926 988-30-77
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Address Card */}
              <Card className="group p-8 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-xl border-2 border-border hover:border-primary/50 transition-all duration-700 hover:-translate-y-4 hover:shadow-glow hover:shadow-primary/30 animate-scale-in hover:scale-105" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/50 transition-all duration-500 shadow-glow animate-zoom-in-out-sync">
                    <MapPin className="w-8 h-8 text-primary-foreground group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3">Юр адрес</h3>
                    <p className="text-muted-foreground">Москва, Митино</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-card/50 rounded-xl border border-border">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-muted-foreground">Полный адрес</div>
                      </div>
                    </div>
                    <div className="font-black text-lg leading-relaxed">
                      125430, г. Москва,<br />
                      вн.тер.г. Муниципальный Округ Митино,<br />
                      ул. Митинская, д. 16,<br />
                      Помещение 23П
                    </div>
                  </div>

                  <div
                    className="p-6 bg-gradient-diagonal text-primary-foreground rounded-xl shadow-glow hover:scale-105 hover:shadow-xl hover:shadow-primary/50 transition-all duration-500 cursor-pointer group"
                    onClick={() => {
                      const formSection = document.getElementById('contact-form');
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <div className="text-center">
                      <div className="font-black text-xl mb-2">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Rocket className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                        </div>
                        Готовы начать зарабатывать?
                      </div>
                      <div className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        Свяжитесь с нами прямо сейчас!
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/90 hover:via-primary hover:to-primary/90 text-primary-foreground font-black px-12 py-6 text-xl shadow-glow transition-all duration-300 hover:scale-105 group overflow-hidden rounded-2xl border-2 border-primary/20 hover:border-primary/40">
                <a href="https://t.me/Alex_skorp" target="_blank" rel="noopener noreferrer">
                  <span className="relative flex items-center gap-3">
                    <MessageCircle className="w-6 h-6" />
                    Связаться в Telegram
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-black px-12 py-6 text-xl transition-all duration-300 hover:scale-105 group overflow-hidden rounded-2xl">
                <a href="https://wa.me/79269883077" target="_blank" rel="noopener noreferrer">
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
      </section>
    </>
  );
};

export default CTA;
