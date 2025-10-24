import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Zap, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-secondary/5 to-background">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary/40 rounded-full px-8 py-3 mb-10 animate-fade-in backdrop-blur-sm hover:scale-105 transition-all shadow-glow">
            <div className="relative">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            </div>
            <span className="text-base font-bold">Официальный партнер Яндекс</span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-black mb-8 animate-fade-in leading-[1.1]">
            <span className="block mb-2">Начни зарабатывать</span>
            <span className="block bg-gradient-diagonal bg-clip-text text-transparent">уже сегодня</span>
          </h1>

          <p className="text-xl lg:text-3xl text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in font-medium">
            Подключайся к <span className="text-primary font-bold">Яндекс Доставке</span> и получай стабильный доход
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            <div className="group relative bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-xl border-2 border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow animate-scale-in overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-black text-primary mb-3">120-420k ₽</div>
                <div className="text-muted-foreground font-semibold text-lg">Ежемесячный доход</div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-xl border-2 border-primary/30 rounded-3xl p-8 hover:border-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-glow animate-scale-in overflow-hidden scale-105">
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold z-20">ХИТ</div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto shadow-glow">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-5xl font-black text-primary mb-3">от 2%</div>
                <div className="text-muted-foreground font-semibold text-lg">Комиссия парка</div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-xl border-2 border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow animate-scale-in overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-black text-primary mb-3">10 минут</div>
                <div className="text-muted-foreground font-semibold text-lg">Быстрая регистрация</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <Button 
              size="lg"
              className="relative bg-gradient-diagonal hover:opacity-90 text-primary-foreground font-black px-16 py-8 text-2xl shadow-glow transition-all duration-300 hover:scale-105 group overflow-hidden"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-3">
                Выбрать направление
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
