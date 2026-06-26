import type { LogoData } from "../types";
import {
  CoffeeIcon,
  ChefHatIcon,
  PizzaIcon,
  UtensilsIcon,
  FishIcon,
  IceCreamIcon,
} from "lucide-react";

// Placeholder logos — replace with actual brand SVGs/images later
export const logosData: LogoData[] = [];

export const logoIcons: Record<string, React.ElementType> = {
  brew: CoffeeIcon,
  bistro: ChefHatIcon,
  gourmet: PizzaIcon,
  kitchen: UtensilsIcon,
  seafood: FishIcon,
  sweet: IceCreamIcon,
};
