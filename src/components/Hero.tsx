import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Zap, Calendar, Star, TrendingUp, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-secondary/5 to-background">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
          <Star className="w-6 h-6 text-primary/30" />
        </div>
        <div className="absolute top-40 right-32 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>
          <TrendingUp className="w-8 h-8 text-primary/20" />
        </div>
        <div className="absolute bottom-40 left-32 animate-bounce" style={{ animationDelay: '3s', animationDuration: '3.5s' }}>
          <Users className="w-7 h-7 text-primary/25" />
        </div>
        <div className="absolute bottom-32 right-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}>
          <Award className="w-6 h-6 text-primary/30" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-7xl mx-auto text-center">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-2 border-primary/40 rounded-full px-8 py-3 mb-10 animate-fade-in backdrop-blur-sm hover:scale-105 transition-all shadow-glow hover:shadow-primary/20">
            <div className="relative">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-base font-bold">Официальный партнер Яндекс</span>
          </div>

          {/* Enhanced Headline */}
          <h1 className="text-6xl lg:text-8xl font-black mb-8 animate-fade-in leading-[1.1]">
            <span className="block mb-2 animate-slide-in-left">Начни зарабатывать</span>
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              уже сегодня
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-xl lg:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto animate-fade-in font-medium" style={{ animationDelay: '0.6s' }}>
            Подключайся к <span className="text-primary font-bold relative">
              Яндекс Доставке
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-primary/20 rounded-full" />
            </span> и получай стабильный доход
          </p>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
            {/* Income Card */}
            <div className="cursor-default group relative bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-xl border-2 border-border rounded-3xl p-10 hover:border-primary/50 transition-all duration-700 hover:-translate-y-4 hover:shadow-glow hover:shadow-primary/30 animate-scale-in overflow-hidden hover:scale-105" style={{ animationDelay: '0.9s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl pointer-events-none" />
              <div className="relative">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/50 transition-all duration-500 mx-auto shadow-lg animate-zoom-in-out-sync">
                  <DollarSign className="w-10 h-10 text-primary-foreground group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="text-6xl font-black text-primary mb-4 group-hover:scale-110 group-hover:text-primary/90 transition-all duration-500">120-420k ₽</div>
                <div className="text-muted-foreground font-semibold text-xl group-hover:text-foreground transition-colors duration-500">Ежемесячный доход</div>
                <div className="text-sm text-primary/70 mt-2 font-medium group-hover:text-primary/90 transition-colors duration-500">В зависимости от направления</div>
              </div>
            </div>

            {/* Commission Card - Featured */}
            <div className="cursor-default group relative bg-gradient-to-br from-primary/10 via-primary/5 to-card/50 backdrop-blur-xl border-2 border-primary/40 rounded-3xl p-10 hover:border-primary transition-all duration-500 hover:-translate-y-3 hover:shadow-glow animate-scale-in overflow-hidden scale-105" style={{ animationDelay: '1.2s' }}>
              <div className="absolute top-6 right-6 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50" />
              <div className="relative">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto shadow-lg animate-zoom-in-out-sync">
                  <Zap className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="text-6xl font-black text-primary mb-4 group-hover:scale-105 transition-transform duration-300">от 2%</div>
                <div className="text-muted-foreground font-semibold text-xl">Комиссия парка</div>
                <div className="text-sm text-primary/70 mt-2 font-medium">Минимальная ставка</div>
              </div>
            </div>

            {/* Registration Card */}
            <div className="cursor-default group relative bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-xl border-2 border-border rounded-3xl p-10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-glow animate-scale-in overflow-hidden" style={{ animationDelay: '1.5s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto shadow-lg animate-zoom-in-out-sync">
                  <Calendar className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="text-6xl font-black text-primary mb-4 group-hover:scale-105 transition-transform duration-300">10 минут</div>
                <div className="text-muted-foreground font-semibold text-xl">Быстрая регистрация</div>
                <div className="text-sm text-primary/70 mt-2 font-medium">Подключение к системе</div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="animate-fade-in" style={{ animationDelay: '1.8s' }}>
            <div className="flex flex-col items-center gap-8">
              {/* Main CTA Button */}
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/90 hover:via-primary hover:to-primary/90 text-primary-foreground font-black px-20 py-10 text-2xl shadow-glow transition-all duration-300 hover:scale-105 group overflow-hidden rounded-2xl border-2 border-primary/20 hover:border-primary/40"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative flex items-center gap-4">
                  Выбрать направление
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Button>

              {/* Additional Info */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>Без скрытых платежей</span>
                </div>
                <div className="flex items-center gap-2 text-lg font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span>Поддержка 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-lg font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <span>Официальное трудоустройство</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
