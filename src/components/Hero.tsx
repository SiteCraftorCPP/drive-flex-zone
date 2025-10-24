import { Button } from "@/components/ui/button";
import { Truck, Bike, Car } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Diagonal Background Shape */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-diagonal opacity-10 transform rotate-12 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-primary/5 transform -rotate-12 -translate-x-1/4 translate-y-1/4 rounded-[3rem]" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                Официальный партнер Яндекс
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Начни зарабатывать{" "}
              <span className="text-primary">уже сегодня</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Подключаем курьеров и водителей к Яндекс Доставке. 
              Работай по удобному графику, выводи деньги каждый день.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Bike className="w-5 h-5 text-primary" />
                  <p className="text-sm text-muted-foreground">Пеший/Вело</p>
                </div>
                <p className="text-2xl font-bold">120-180k₽</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-primary" />
                  <p className="text-sm text-muted-foreground">Легковой</p>
                </div>
                <p className="text-2xl font-bold">180-220k₽</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" />
                  <p className="text-sm text-muted-foreground">Грузовой</p>
                </div>
                <p className="text-2xl font-bold">210-420k₽</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow transition-all hover:scale-105"
                onClick={scrollToServices}
              >
                Выбрать направление
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
              >
                Узнать больше
              </Button>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10 bg-card rounded-3xl p-8 shadow-card border border-border">
              <h3 className="text-2xl font-bold mb-6">Почему выбирают нас?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Высокий доход</h4>
                    <p className="text-sm text-muted-foreground">
                      Зарабатывайте от 120 000 до 420 000₽ в месяц
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Быстрые выплаты</h4>
                    <p className="text-sm text-muted-foreground">
                      Выводите деньги день в день без ограничений
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Свободный график</h4>
                    <p className="text-sm text-muted-foreground">
                      Работайте когда удобно, стройте график сами
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full animate-float" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
