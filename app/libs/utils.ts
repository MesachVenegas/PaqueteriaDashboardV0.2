import { faCashRegister, faDollarSign, faFileInvoiceDollar, faGear, faHandHoldingHeart, faLayerGroup, faLifeRing, faMoneyBillTransfer, faRankingStar, faTruckFast, faUsers } from "@fortawesome/free-solid-svg-icons";

export const menuLinks = [
  {
    title: "Principal",
    links: [
      { title: "Dashboard", url: "/dashboard" , icon: faLayerGroup},
      { title: "Ventas", url: "/dashboard/ventas" , icon: faDollarSign},
      { title: "Clientes", url: "/dashboard/clientes" , icon: faUsers},
      { title: "Provedores", url: "/dashboard/provedores" , icon: faHandHoldingHeart},
      { title: "Productos", url: "/dashboard/productos" , icon: faTruckFast},
    ]
  },
  {
    title: "Analítica",
    links: [
      { title: "Reportes", url: "/dashboard/reportes" , icon: faRankingStar},
      { title: "Remisiones", url: "/dashboard/remisiones" , icon: faFileInvoiceDollar},
      { title: "Cortes", url: "/dashboard/cortes" , icon: faCashRegister},
      { title: "Gastos", url: "/dashboard/gastos", icon: faMoneyBillTransfer },
    ]
  },
  {
    title: "Usuario",
    links: [
      { title: "Ajustes", url: "/dashboard/ajustes" , icon: faGear},
      { title: "Ayuda", url: "/dashboard/ayuda" , icon: faLifeRing},
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