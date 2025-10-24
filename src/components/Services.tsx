import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bike, Car, Truck, Package, MapPin, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bike,
      title: "Курьер пеший / на велосипеде",
      income: "120 000 - 180 000 ₽",
      description: "Идеально для начинающих. Получите термокороб в офисе парка бесплатно.",
      features: [
        "Работа в центре города",
        "Небольшие расстояния",
        "Гибкий график",
        "Термокороб в подарок"
      ],
      commission: "От 2% комиссия парка",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Car,
      title: "Курьер на легковом авто",
      income: "180 000 - 220 000 ₽",
      description: "Подойдет любой легковой автомобиль. Больше заказов, выше доход.",
      features: [
        "Любой легковой авто",
        "Крупногабаритные заказы",
        "Больше заказов",
        "Высокие чаевые"
      ],
      commission: "От 2.4% комиссия парка",
      gradient: "from-primary/30 to-primary/10",
      featured: true
    },
    {
      icon: Truck,
      title: "Водитель грузового авто",
      income: "210 000 - 420 000 ₽",
      description: "Максимальный заработок. Доставка от 0.7 до 5 тонн по проектам Яндекс.",
      features: [
        "Авто от 0.7 до 5 тонн",
        "Крупные проекты",
        "Максимальный доход",
        "Стабильный поток заказов"
      ],
      commission: "От 2.4% комиссия парка",
      gradient: "from-primary/25 to-primary/8"
    }
  ];

  const handleConnect = (serviceTitle: string) => {
    // Здесь можно добавить логику отправки формы или открытия модального окна
    console.log(`Подключение к: ${serviceTitle}`);
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-lg">Выберите направление</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Три способа начать зарабатывать
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий формат работы и подключайтесь к Яндекс Доставке за несколько минут
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in border-2 ${
                service.featured ? 'border-primary' : 'border-border'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {service.featured && (
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    Популярное
                  </span>
                </div>
              )}

              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} -z-10`} />

              {/* Icon */}
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Title & Income */}
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-4 h-4 text-primary" />
                <p className="text-2xl font-bold text-primary">{service.income}</p>
              </div>

              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Commission Badge */}
              <div className="bg-secondary/10 rounded-lg p-3 mb-6 border border-border">
                <p className="text-sm font-medium text-center">{service.commission}</p>
              </div>

              {/* CTA Button */}
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg shadow-glow transition-all hover:scale-105"
                onClick={() => handleConnect(service.title)}
              >
                Подключиться
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card p-6 rounded-2xl shadow-card border border-border">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-medium">Регистрация за 10 минут</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">Работа по всему городу</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
