import React from 'react';
import {
    Home,
    ShoppingCart,
    Coffee,
    Car,
    Zap,
    TrendingUp,
    Search,
    CreditCard,
    DollarSign,
    Briefcase,
    Gift,
    Smartphone,
    Monitor,
    Shield,
    Music,
    Video,
    Book,
    Smile,
    Award,
    Star,
    Heart,
    MapPin,
    Calendar,
    Cloud,
    Camera,
    Watch,
    Headphones,
    Anchor,
    Bike,
    Bus,
    Train,
    Plane,
    HelpCircle,
    Utensils,
    ShoppingBag,
    Landmark,
    PiggyBank,
    Banknote,
    Wallet,
    Percent,
    ArrowRightLeft,
    TrendingDown,
    Activity,
    LucideIcon,
    LucideProps
} from 'lucide-react-native';

export const iconMap: Record<string, LucideIcon> = {
    Home,
    ShoppingCart,
    ShoppingBag,
    Coffee,
    Car,
    Zap,
    TrendingUp,
    TrendingDown,
    Search,
    CreditCard,
    DollarSign,
    Briefcase,
    Gift,
    Smartphone,
    Monitor,
    Shield,
    Music,
    Video,
    Book,
    Smile,
    Award,
    Star,
    Heart,
    MapPin,
    Calendar,
    Cloud,
    Camera,
    Watch,
    Headphones,
    Anchor,
    Bike,
    Bus,
    Train,
    Plane,
    HelpCircle,
    Utensils,
    Landmark,
    PiggyBank,
    Banknote,
    Wallet,
    Percent,
    ArrowRightLeft,
    Activity
};

interface IconByNameProps extends LucideProps {
    name: string;
}

export const IconByName: React.FC<IconByNameProps> = ({ name, ...props }) => {
    // Intentamos encontrar el icono directamente o capitalizando la primera letra
    const formattedName = name ? name.charAt(0).toUpperCase() + name.slice(1) : 'HelpCircle';

    // Buscamos en el mapa, si no existe usamos HelpCircle por defecto
    const IconComponent = iconMap[name] || iconMap[formattedName] || HelpCircle;

    return <IconComponent {...props} />;
};
