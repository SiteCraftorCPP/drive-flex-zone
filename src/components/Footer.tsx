import { Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ТаксиПарк</span>
            </div>
            <p className="text-sm text-secondary-foreground/70">
              Официальный партнер Яндекс Доставки. Помогаем курьерам и водителям зарабатывать больше.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#services" className="hover:text-primary transition-colors">Курьер пеший/вело</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Курьер на авто</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Водитель грузового</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#services" className="hover:text-primary transition-colors">Три способа начать зарабатывать</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">Всего 4 простых шага</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Прозрачные условия работы</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="https://wa.me/79269883077" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp +7 926 988-30-77</a></li>
              <li><a href="https://t.me/Alex_skorp" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Telegram: @Alex_skorp</a></li>
              <li>Москва, ул. Митинская, д. 16</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/70">
            © 2024 ООО "СЕПТИКПРО". Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/70">
            <a href="#pricing" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
