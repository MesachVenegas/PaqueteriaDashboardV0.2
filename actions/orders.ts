'use server'

import * as z from 'zod';

import prisma from "@/lib/prisma";
import { AddresserDataSchema } from '@/schema/order.schema';


export async function generateOrder(data: z.infer<typeof AddresserDataSchema>, clientId: string, userId: string) {
  try {
    // const validFields = AddresserDataSchema.safeParse(data);
    // if(!validFields.success) throw new Error('Algunos de los campos son inválidos. Verifica los campos.');

    // const { full_name, phone, street, number, colony, delegation, zip_code, state, references, length, height, width, weight, delivery_type, order_total } = validFields.data;

    // const newOrder = await prisma.order.create({
    //   data: {
    //     client_id: '',
    //     user_id: '',
    //     addressed_name: full_name,
    //     pkg_long: Number(length),
    //     pkg_width: Number(width),
    //     pkg_height: Number(height),
    //     pkg_weight: Number(weight),
    //     type: delivery_type,
    //     total: Number(order_total),
    //     is_complete: false,
    //     is_cancelled: false,
    //   }
    // })

  } catch (error) {
    throw error;
  }
}