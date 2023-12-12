import { faBlackTie } from "@fortawesome/free-brands-svg-icons";
import { faCashRegister, faDollarSign, faFileInvoiceDollar, faGear, faHandHoldingHeart, faLayerGroup, faLifeRing, faMoneyBillTransfer, faRankingStar, faTruckFast, faUsers } from "@fortawesome/free-solid-svg-icons";

export const menuLinks = [
  {
    title: "Principal",
    links: [
      { title: "Dashboard", url: "/dashboard", icon: faLayerGroup, user: true, admin: true },
      { title: "Ventas", url: "/dashboard/ventas", icon: faDollarSign, user: true, admin: true },
      { title: "Clientes", url: "/dashboard/clientes", icon: faUsers, user: true, admin: true },
      { title: "Provedores", url: "/dashboard/provedores", icon: faHandHoldingHeart, user: true, admin: true },
      { title: "Productos", url: "/dashboard/productos", icon: faTruckFast, user: true, admin: true },
    ]
  },
  {
    title: "Analítica",
    links: [
      { title: "Reportes", url: "/dashboard/reportes", icon: faRankingStar, user: true, admin: true },
      { title: "Remisiones", url: "/dashboard/remisiones", icon: faFileInvoiceDollar, user: true, admin: true },
      { title: "Cortes", url: "/dashboard/cortes", icon: faCashRegister, user: true, admin: true },
      { title: "Gastos", url: "/dashboard/gastos", icon: faMoneyBillTransfer, user: true, admin: true },
    ]
  },
  {
    title: "Usuario",
    links: [
      { title: "Ajustes", url: "/dashboard/ajustes", icon: faGear, user: true, admin: true },
      { title: "Admin", url: "/dashboard/admin", icon: faBlackTie, user: false, admin: true },
      { title: "Ayuda", url: "/dashboard/ayuda", icon: faLifeRing, user: true, admin: true },
    ]
  },
]


export const dataChart = [
  {
    name: 'Septiembre',
    clientes: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Noviembre',
    clientes: 700,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Diciembre',
    clientes: 300,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Enero',
    clientes: 180,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Febrero',
    clientes: 890,
    pv: 4800,
    amt: 2181,
  },
];

export const valueFormatter = (number: number) => `$ ${new Intl.NumberFormat("mx").format(number).toString()}`;

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