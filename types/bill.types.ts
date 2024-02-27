import { ClientProps } from "./client.types";
import { SaleFormProps } from "./order.types";

export interface PDFData {
  data: SaleFormProps;
  folio: string;
  client: ClientProps;
  volumetric: number;
  subtotal: number;
}

export interface PreviewProps extends PDFData {
  confirm: (value: boolean) => void;
  cancel: (value: boolean) => void;
}
