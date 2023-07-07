import { Controller, Get, Param } from '@nestjs/common';
import { DropboxService } from './dropbox.service';


@Controller('dropbox')
export class DropboxController {
  constructor(private readonly dropboxService: DropboxService) {}

  @Get('obtenerDatosAnyos')
  obtenerDatosAnyos(){
    return this.dropboxService.obtenerDatosAnyos();
  }

  @Get('anyo/:id')
  imagenDelAnyo(@Param('id') id: string) {
    return this.dropboxService.imagenDelAnyo(+id)
  }

  @Get('mes/:id')
  imagenDelMes(@Param('id') id: string) {
    return this.dropboxService.imagenDelMes(+id);
  }

  @Get('evento/:id')
  imagenDelEvento(@Param('id') id: string) {
    return this.dropboxService.imagenDelMes(+id);
  }

}
