import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Clock, Smartphone, Shield, HeadphonesIcon } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Высокий доход",
      description: "От 120 000 до 420 000 рублей в месяц в зависимости от выбранного направления",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: TrendingUp,
      title: "Минимальная комиссия",
      description: "Всего от 2% комиссии парка. Выводите заработанные средства каждый день",
      gradient: "from-primary/25 to-primary/10"
    },
    {
      icon: Clock,
      title: "Быстрая регистрация",
      description: "Подключение к Яндекс Доставке занимает всего 10 минут",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Smartphone,
      title: "Удобные приложения",
      description: "Яндекс Про для работы и Taxi CRM для вывода средств",
      gradient: "from-primary/25 to-primary/10"
    },
    {
      icon: Shield,
      title: "Официальный партнер",
      description: "Проверенный партнер Яндекс с прозрачными условиями",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: HeadphonesIcon,
      title: "Поддержка 24/7",
      description: "Наша команда всегда готова помочь вам",
      gradient: "from-primary/25 to-primary/10"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <span className="inline-block text-primary font-black text-lg mb-4 px-6 py-2 bg-primary/10 rounded-full border-2 border-primary/30">ПРЕИМУЩЕСТВА</span>
          <h2 className="text-5xl lg:text-6xl font-black mt-4 mb-6">Почему выбирают <span className="text-primary">нас</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group relative p-10 hover:shadow-glow transition-all duration-500 hover:-translate-y-3 animate-scale-in border-2 hover:border-primary/50 overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all relative z-10">
                <benefit.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-4 relative z-10">{benefit.title}</h3>
              <p className="text-muted-foreground relative z-10">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
