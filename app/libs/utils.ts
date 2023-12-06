import { faCashRegister, faDollarSign, faFileInvoiceDollar, faGear, faHandHoldingHeart, faLayerGroup, faLifeRing, faMoneyBillTransfer, faRankingStar, faUsers } from "@fortawesome/free-solid-svg-icons";

export const menuLinks = [
  {
    title: "Principal",
    links: [
      { title: "Dashboard", url: "/dashboard" , icon: faLayerGroup},
      { title: "Ventas", url: "/dashboard/ventas" , icon: faDollarSign},
      { title: "Clientes", url: "/dashboard/clientes" , icon: faUsers},
      { title: "Provedores", url: "/dashboard/provedores" , icon: faHandHoldingHeart},
      { title: "Gastos", url: "/dashboard/gastos" , icon: faMoneyBillTransfer},
    ]
  },
  {
    title: "Analítica",
    links: [
      { title: "Reportes", url: "/dashboard/reportes" , icon: faRankingStar},
      { title: "Remisiones", url: "/dashboard/remisiones" , icon: faFileInvoiceDollar},
      { title: "Cortes", url: "/dashboard/cortes" , icon: faCashRegister},
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