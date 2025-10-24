import { Card } from "@/components/ui/card";
import { Wallet, Zap, Shield, TrendingUp, Users, Award } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Wallet,
      title: "Низкая комиссия",
      description: "От 2% для СМЗ и от 3% для парковых водителей. Одна из самых низких на рынке.",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Выплаты день в день",
      description: "Моментальные выводы средств без ограничений. 1% комиссия за вывод.",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "Официальный партнер",
      description: "Прямое партнерство с Яндекс. Гарантия стабильности и поддержки.",
      color: "text-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Рост дохода",
      description: "Доступ к проектам Яндекс с повышенными ставками и бонусами.",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Поддержка 24/7",
      description: "Всегда на связи. Помощь в любых вопросах по работе и техническим проблемам.",
      color: "text-pink-500"
    },
    {
      icon: Award,
      title: "Бонусная программа",
      description: "Система мотивации для активных курьеров. Дополнительные выплаты и призы.",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-lg">Преимущества</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 1000 курьеров и водителей уже работают с нами и получают стабильный доход
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 ${benefit.color}`}>
                <benefit.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <p className="text-muted-foreground">Активных курьеров</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Поддержка</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-primary mb-2">2%</div>
            <p className="text-muted-foreground">Мин. комиссия</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-primary mb-2">5 лет</div>
            <p className="text-muted-foreground">На рынке</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
