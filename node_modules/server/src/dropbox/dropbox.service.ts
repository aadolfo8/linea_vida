import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Dropbox } from 'dropbox';

@Injectable()
export class DropboxService {
  constructor(private readonly httpService: HttpService) {}

  accessToken: string =
    'sl.BhvfQaIy5DsprqnOznJ8yMq0KblZS7cWDyjc6YpyV3rpzYcM0l--76SPAWeTYps9Q4PrsP0Gvr30iiQuBAiPSB4yjWlfNOTzCOTlQCLoP46KeKc1-2DkM3T6hY9njNREOgKvii8V';

  dbx: Dropbox = new Dropbox({
    accessToken: this.accessToken,
    fetch,
  });

  async obtenerDatosAnyos(){
    let anyos: string[] = [];
    let imagenes: string[] = [];
    
    // Obtengo un array con todas las capetas de los años
    try{
      const datos: any = await this.dbx.filesListFolder({path: '',});
      console.log(datos.result.entries);
      for(let x of datos.result.entries){
        if(x['.tag'] == 'folder')
        anyos.push(x.name);
      }
    }catch (error){
      console.log(error);
    }

    // Obtengo un array con todas als carpetas de los meses
    try {
      for(let anyo of anyos){
        console.log(anyo);
        const datos: any = await this.dbx.filesListFolder({path: `/${anyo}`,});
        for(let x of datos.result.entries){
          if(x['.tag'] == 'file')
          imagenes.push(x.name);
        }
      }
      console.log(imagenes);
      
    } catch (error) {
      console.log(error);
    }
  }

  imagenDelAnyo(id: number) {
    return 'Hola';
  }

  imagenDelMes(id: number) {
    return `This action returns all dropbox`;
  }

  imagenDelEvento(id: number) {
    return `This action returns a #${id} dropbox`;
  }
}
