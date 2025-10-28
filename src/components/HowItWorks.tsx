import { Card } from "@/components/ui/card";
import { FileText, Smartphone, DollarSign, CheckCircle, SmartphoneIcon, Target, Bike, Car, Truck } from "lucide-react";
import YandexLogo from "./YandexLogo";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Заполните заявку",
      description: "Простая онлайн-форма. Заполнение занимает не более 5 минут."
    },
    {
      number: "02",
      icon: Smartphone,
      title: "Скачайте приложения",
      description: "Яндекс Про для работы с заказами."
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Пройдите регистрацию",
      description: "Наши специалисты помогут с подключением и ответят на все вопросы."
    },
    {
      number: "04",
      icon: DollarSign,
      title: "Начните зарабатывать",
      description: "Принимайте заказы и получайте деньги уже в первый день работы."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Animated Vehicle Icons - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        <Car className="absolute top-[10%] left-[4%] w-10 h-10 animate-float text-primary" style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <Bike className="absolute top-[35%] left-[6%] w-10 h-10 animate-float text-primary" style={{ animationDelay: '1.2s', animationDuration: '4.5s' }} />
        <div className="absolute top-[65%] left-[3%] animate-float" style={{ animationDelay: '0.5s', animationDuration: '5s' }}>
          <div className="relative">
            <Truck className="w-12 h-12 text-primary" />
            <YandexLogo />
          </div>
        </div>
        <Bike className="absolute top-[15%] right-[5%] w-10 h-10 animate-float text-primary" style={{ animationDelay: '0.8s', animationDuration: '4s' }} />
        <Car className="absolute top-[55%] right-[8%] w-10 h-10 animate-float text-primary" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
      </div>

      {/* Diagonal Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 transform skew-x-12 translate-x-1/3" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-lg">Как начать</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Всего 4 простых шага
          </h2>
          <p className="text-xl text-secondary-foreground/70 max-w-2xl mx-auto">
            От регистрации до первого заказа — меньше 24 часов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <Card className="group p-8 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:-translate-y-4 hover:shadow-glow hover:shadow-primary/30 hover:scale-105 hover:border-primary border-2 border-border h-full flex flex-col items-center text-center cursor-pointer">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/50 transition-all duration-500 shadow-glow mx-auto animate-zoom-in-out-sync">
                  <step.icon className="w-8 h-8 text-primary-foreground group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-500">{step.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 bg-primary/10 border-2 border-primary/30 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
              <SmartphoneIcon className="w-5 h-5 text-primary" />
              Приложения для работы
            </h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>• <strong>Яндекс Про</strong> — приложение для работы с заказами и маршрутизации</li>
              <li className="text-sm mt-3">* При первом выводе приложение попросит подписать оферту</li>
            </ul>
          </Card>

          <Card className="p-8 bg-primary/10 border-2 border-primary/30 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
              <Target className="w-5 h-5 text-primary" />
              Самостоятельная регистрация
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              Вы можете зарегистрироваться самостоятельно или с помощью наших специалистов.
            </p>
            <p className="text-secondary-foreground/80">
              Мы всегда на связи и готовы помочь на любом этапе подключения.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
