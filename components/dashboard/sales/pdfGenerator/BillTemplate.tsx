import { useState } from "react";
import { Page, Text, View, Document, Image, StyleSheet } from "@react-pdf/renderer";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ClientProps } from "@/app/libs/definitions";

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    gap: '10px',
    paddingLeft: '2.5rem',
    paddingRight: '2.5rem',
  },
  img_container: {
    width: '180px',
    height: '90px',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: 'auto',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    fontSize: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    borderBottom: '1px solid #000',
    width: '90%',
    textAlign: 'center',
  },
  addressed: {
    display: 'flex',
    fontSize: 12,
    flexDirection: 'column',
    width: '90%',
    gap: '8px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    gap: '8px',
  },
  address: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  package: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    fontSize: 14,
    width: '60%',
  },
  payment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: '10px'
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '2px solid #3c3c3c',
    fontSize: 12,
    width: '90%',
    gap: '8px',
  },
  social_item : {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px',
    gap: '4px',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '4px',
    maxWidth: '200px',
  },
  legal: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#3c3c3c',
    borderRadius: '8px',
    color: '#fff',
    padding: '10px',
    gap: '8px',
    width: '90%',
  },
  client: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '8px',
    width: '90%',
  },
  reference: {
    fontSize: '12px',
    maxHeight: '50px' ,
  }
})


export default function BillPayment({ data, folio, client, volumetric }: { data: any, folio: string, client: ClientProps, volumetric: number }) {


  return (
    <Document>
      <Page size="A4" style={ styles.page }>
        <View style={ styles.header }>
          <View>
            <View style={ styles.img_container }>
              <Image
                src='/assets/logo_no_bg.png'
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </View>
            <View style={ styles.details }>
              <Text style={{ fontSize: '12px'}}>
                Paqueteria 5 Estrellas S.A de C.V, La escondida, 22106 Tijuana, Baja California, Mexico
              </Text>
              <View>
                <Text style={{fontSize: '12px'}}>Tels: 663 221 9250 ó 664 130 3694</Text>
              </View>
            </View>
          </View>
          <View style={ styles.text }>
            <Text>{format(new Date(), "PPPP", {locale: es })}</Text>
            <Text>Folio: {folio}</Text>
            <Text>Pago: {data?.payment}</Text>
          </View>
        </View>

        <View style={ styles.title }>
          <Text style={{ marginBottom: '5px'}} >Destinatario</Text>
        </View>
        <View style={ styles.addressed }>
          <View style={ styles.client }>
            <Text>Nombre: {data?.name}</Text>
            <Text>Teléfono: {data?.phone}</Text>
          </View>
          <Text>Calle: {data?.street}</Text>
          <View style={ styles.container }>
            <View style={ styles.address }>
              <Text>Colonia: {data?.colony}</Text>
              <Text>Estado: {data?.state}</Text>
            </View>
            <View style={ styles.address }>
              <Text>Delegación: {data?.delegation}</Text>
              <Text>Código Postal: {data?.zip_code}</Text>
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <Text>Referencias:</Text>
            <Text style={ styles.reference }>
              {data?.references}
            </Text>
          </View>
        </View>
        <View style={ styles.title }>
          <Text style={{ marginBottom: '5px'}} >Cliente</Text>
        </View>
        <View style={ styles.addressed}>
          {
            client ? (
              <>
                <Text>Nombre: {client.name} {client.last_name}</Text>
                <Text>Teléfono: {client.phone}</Text>
              </>
            ): (
              <>
                <Text>Nombre: </Text>
                <Text>Teléfono: </Text>
              </>
            )
          }
        </View>
        <View style={ styles.title }>
          <Text style={{ marginBottom: '5px'}} >Detalles del Paquete</Text>
        </View>
        <View style={ styles.package }>
          <View style={ styles.container }>
            <View style={ styles.address }>
              <Text>Largo: {data?.length} cms</Text>
              <Text>Ancho: {data?.width} cms</Text>
            </View>
            <View style={ styles.address }>
              <Text>Alto: {data?.height} cms</Text>
              <Text>Peso: {data?.weight} kgs</Text>
            </View>
          </View>
          <View style={ styles.address }>
            <Text>Peso Volumétrico: {volumetric.toFixed(1)} kgs</Text>
          </View>
        </View>
        <View style={ styles.legal }>
          <Text style={{ fontSize: '12px', textAlign: 'center'}}>
            MUCHAS GRACIAS POR LA OPORTUNIDAD DE SERVIRLE
          </Text>
          <Text style={{ fontSize: '12px'}}>
            Para Rastrear su pedido por favor ingres a nuestra pagina web
          </Text>
          <Text style={{ fontSize: '12px'}}>
            https://www.paqueteria5estrellas.com/#/tracking
          </Text>
          <Text style={{ fontSize: '12px'}}>
            Mi paquete NO va asegurado por la paqueteria
          </Text>
          <Text style={{ fontSize: '12px'}}>
              Acepto que el rastreo de guía (Aéreo o Terrestre) puede durar hasta 2 días hábiles en aparecer algún movimiento.
          </Text>
          <Text style={{ fontSize: '12px'}}>
            Acepto que una vez haya llegado el paquete a OCURRE solo tendré 3 días para reclamarlo
          </Text>
          <Text style={{ fontSize: '12px'}}>
            Acepto que el envió Aéreo puede durar gasta 5 días hábiles(Lunes a Viernes) en ser entregado.
          </Text>
          <Text style={{ fontSize: '12px'}}>
            Acepto que el envió Terrestre puede durar hasta 15 días hábiles(Lunes a Viernes) en ser entregado.
          </Text>
        </View>
        <View style={ styles.payment }>
          <Text>{data.send}</Text>
          <Text>Total: $0 mxn</Text>
        </View>
        <View style={ styles.social }>
            <View style={ styles.social_item }>
              <Image
                src='/assets/world.png'
                style={{ width: '15px', height: '15px' }}
              />
              <Text>paqueteria5estrellas.com</Text>
            </View>
            <View style={ styles.social_item }>
              <Image
                src='/assets/facebook.png'
                style={{ width: '15px', height: '15px' }}
              />
              <Text>paqueteria5estrellas</Text>
            </View>
            <View style={ styles.social_item }>
              <Image
                src='/assets/tiktok.png'
                style={{ width: '15px', height: '15px' }}
              />
              <Text>@paqueteria5estrellas</Text>
            </View>
        </View>
      </Page>
    </Document>
  )
}