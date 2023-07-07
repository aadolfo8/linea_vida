export interface DataYear {
  id_year: number;
  year: number;
  imagen: string;
  descripcion: string;
}

export interface DataMes {
  id_mes: number;
  id_year: number;
  imagen: string;
  descripcion: string;
}

export interface DataEvento {
  id_evento: number;
  id_mes: number;
  imagen: string;
  descripcion: string;
}

export interface ImagenesEvento {
  id_imagenEvent: number;
  id_evento: number;
  imagen: string;
}
