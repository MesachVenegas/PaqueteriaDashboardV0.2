import prisma from "../prisma"

export const getDayliSales = async () => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  try {
    const sale = await prisma.order.aggregate({
      _sum: {
        total: true
      },
      where: {
        AND: [
          {
            registerAt: {
              gte: startOfDay.toISOString()
            }
          },
          {
            registerAt: {
              lt: endOfDay.toISOString()
            }
          }
        ]
      }
    })
    if(sale._sum.total === null) return 0;
    return sale._sum.total;
  } catch (error) {
    throw (error)
  }
}


export const getCustomersCountByMonth = async () => {
  try {
    const currentDate = new Date();
    const fourMonthsAgo = new Date(currentDate.setMonth(currentDate.getMonth() - 4));

    const customersByMonth = await prisma.client.groupBy({
      by: ['registerAt'],
      _count: {
        _all: true
      },
      where: {
        registerAt: {
          gte: fourMonthsAgo,
          lt: new Date(),
        },
      },
      orderBy: {
        registerAt: 'desc'
      }
    });

    return customersByMonth.map( counter => ({
      month: counter.registerAt.toLocaleString('default', { month: 'long' }),
      year: counter.registerAt.getFullYear(),
      clientes: counter._count._all
    }))

  } catch (error) {
    throw (error);
  }
}

export const getMonthlySales = async () => {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

  try {
    const sale = await prisma.order.aggregate({
      _sum: {
        total: true
      },
      where: {
        AND: [
          {
            registerAt: {
              gte: startOfMonth.toISOString()
            }
          },
          {
            registerAt: {
              lte: endOfMonth.toISOString()
            }
          }
        ]
      }
    })
    if (sale._sum.total === null) return 0;
    return sale._sum.total;
  } catch (error) {
    throw (error)
  }
}


export const getLastSales = async () => {
  try {
    const sale = await prisma.order.findMany({
      take: 5,
      orderBy: {
        registerAt: 'desc'
      },
      include: {
        client: true,
      }
    })
    return sale;
  } catch (error) {
    throw (error)
  }
}