import { Card } from "@/components/ui/card";
import { Check, Bike, Car, Truck } from "lucide-react";
import YandexLogo from "./YandexLogo";

const Pricing = () => {
  const pricing = [
    {
      category: "Пеший / Вело / Мото",
      plans: [
        {
          type: "Без СМЗ",
          commission: "3%",
          features: ["Комиссия парка", "1% за вывод средств"]
        },
        {
          type: "С СМЗ",
          commission: "3%",
          features: ["Комиссия парка", "1% за вывод средств"]
        }
      ]
    },
    {
      category: "Легковой автомобиль",
      plans: [
        {
          type: "Парковый водитель",
          commission: "3%",
          features: ["Комиссия парка", "1% за вывод средств"]
        },
        {
          type: "Парковый СМЗ",
          commission: "3%",
          features: ["Комиссия парка", "1% за вывод средств"]
        }
      ]
    },
    {
      category: "Грузовой автомобиль",
      plans: [
        {
          type: "Парковый водитель",
          commission: "3%",
          features: ["Комиссия парка", "1% за вывод средств"]
        },
        {
          type: "Парковый СМЗ",
          commission: "3%",
          features: ["Комиссия парка", "1% за вывод средств"]
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated Vehicle Icons - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[12%] left-[5%] animate-float" style={{ animationDelay: '0s', animationDuration: '4s' }}>
          <div className="relative">
            <Truck className="w-10 h-10" style={{ color: '#000000' }} />
            <YandexLogo />
          </div>
        </div>
        <Bike className="absolute top-[45%] left-[7%] w-10 h-10 animate-float" style={{ color: '#000000', animationDelay: '1.2s', animationDuration: '4.5s' }} />
        <Car className="absolute top-[70%] left-[4%] w-10 h-10 animate-float" style={{ color: '#000000', animationDelay: '0.5s', animationDuration: '5s' }} />
        <Bike className="absolute top-[18%] right-[6%] w-10 h-10 animate-float" style={{ color: '#000000', animationDelay: '0.8s', animationDuration: '4s' }} />
        <div className="absolute top-[60%] right-[4%] animate-float" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}>
          <div className="relative">
            <Truck className="w-12 h-12" style={{ color: '#000000' }} />
            <YandexLogo />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-lg">Тарифы</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Прозрачные условия работы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Честные условия без скрытых комиссий и платежей
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricing.map((category, index) => (
            <Card
              key={index}
              className="p-8 shadow-glow transition-all duration-500 animate-scale-in border-2 border-primary/50"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-2xl font-bold mb-8 pb-4 border-b border-border">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.plans.map((plan, planIndex) => (
                  <div key={planIndex} className="bg-muted/50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium">{plan.type}</span>
                      <span className="text-3xl font-bold text-primary">{plan.commission}</span>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Special Projects Section */}
        <Card className="p-8 md:p-12 bg-gradient-diagonal text-primary-foreground max-w-4xl mx-auto animate-fade-in border-none shadow-glow">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Работа на проектах Яндекс</h3>
            <p className="text-xl mb-6 opacity-90">
              Специальные условия для грузовых перевозок
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/20 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-lg font-semibold mb-2">Комиссия парка</p>
                <p className="text-4xl font-bold">1%</p>
              </div>
              <div className="bg-secondary/20 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-lg font-semibold mb-2">Комиссия Яндекс</p>
                <p className="text-4xl font-bold">0%</p>
              </div>
            </div>
            <p className="mt-6 opacity-80">
              * Яндекс не берет комиссию при работе на специальных проектах
            </p>
          </div>
        </Card>

        {/* Tariffs Info */}
        <div className="mt-16 max-w-4xl mx-auto" translate="no">
          <Card className="p-8 bg-card border-2 border-primary/50 shadow-glow">
            <h3 className="text-2xl font-bold mb-6 text-center">Тарифы в грузовом</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-xl">
                <p className="text-4xl font-bold text-primary mb-2">S</p>
                <p className="text-sm text-muted-foreground">Компактные авто</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-xl">
                <p className="text-4xl font-bold text-primary mb-2">M / L</p>
                <p className="text-sm text-muted-foreground">Средний объем</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-xl">
                <p className="text-4xl font-bold text-primary mb-2">XL / XXL</p>
                <p className="text-sm text-muted-foreground">До 2000 кг</p>
              </div>
            </div>
            <p className="mt-6 text-center text-muted-foreground">
              Новые тарифы Яндекс для более вместительных авто: ≈ 400×190×200 см, до 2000 кг
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
