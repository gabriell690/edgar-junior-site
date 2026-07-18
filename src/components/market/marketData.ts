 
import {
  BadgePercent,
  Landmark,
  Building2,
  Activity,
  MapPin,
  TrendingUp,
} from "lucide-react";

export const marketData = {
  "João Pessoa": {
    subtitle: "Inteligência Imobiliária • João Pessoa",

    indicators: [
      { nome: "SELIC", valor: "15,00%", info: "+0,25%", icon: BadgePercent },
      { nome: "CDI", valor: "14,90%", info: "+0,20%", icon: Landmark },
      { nome: "INCC", valor: "6,84%", info: "+0,42%", icon: Building2 },
      { nome: "JOÃO PESSOA", valor: "+18%", info: "Valorização", icon: Activity },
      { nome: "CABO BRANCO", valor: "+22%", info: "Alta", icon: TrendingUp },
      { nome: "BESSA", valor: "+17%", info: "Alta", icon: MapPin },
    ],
  },

  "Campina Grande": {
    subtitle: "Inteligência Imobiliária • Campina Grande",

    indicators: [
      { nome: "SELIC", valor: "15,00%", info: "+0,25%", icon: BadgePercent },
      { nome: "CDI", valor: "14,90%", info: "+0,20%", icon: Landmark },
      { nome: "INCC", valor: "6,84%", info: "+0,42%", icon: Building2 },
      { nome: "CAMPINA GRANDE", valor: "Mercado aquecido", info: "Em expansão", icon: Activity },
      { nome: "CATOLÉ", valor: "Alta procura", info: "Residencial", icon: TrendingUp },
      { nome: "ALTO BRANCO", valor: "Em crescimento", info: "Valorização", icon: MapPin },
    ],
  },
};