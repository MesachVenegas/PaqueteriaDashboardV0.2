import {
  faCashRegister,
  faDollarSign,
  faFileInvoiceDollar,
  faGear,
  faHandHoldingHeart,
  faLayerGroup,
  faLifeRing,
  faMoneyBillTransfer,
  faRankingStar,
  faTruckFast,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

export const states = [
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Ciudad de México",
  "Coahuila",
  "Colima",
  "Durango",
  "Estado de México",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas",
]


export const menuLinks = [
  {
    title: "principal",
    links: [
      { title: "dashboard", url: "/dashboard", icon: faLayerGroup, user: true, admin: true },
      { title: "ventas", url: "/dashboard/sales", icon: faDollarSign, user: true, admin: true },
      { title: "clientes", url: "/dashboard/clients", icon: faUsers, user: true, admin: true },
      { title: "provedores", url: "/dashboard/providers", icon: faHandHoldingHeart, user: true, admin: true },
      { title: "productos", url: "/dashboard/products", icon: faTruckFast, user: true, admin: true },
    ]
  },
  {
    title: "analítica",
    links: [
      { title: "reportes", url: "/dashboard/reports", icon: faRankingStar, user: true, admin: true },
      { title: "remisiones", url: "/dashboard/bills", icon: faFileInvoiceDollar, user: true, admin: true },
      { title: "cortes", url: "/dashboard/cuts", icon: faCashRegister, user: true, admin: true },
      { title: "gastos", url: "/dashboard/outlays", icon: faMoneyBillTransfer, user: true, admin: true },
    ]
  },
  {
    title: "usuario",
    links: [
      { title: "ajustes", url: "/dashboard/settings", icon: faGear, user: true, admin: true },
      { title: "ayuda", url: "/dashboard/help", icon: faLifeRing, user: true, admin: true },
    ]
  },
]