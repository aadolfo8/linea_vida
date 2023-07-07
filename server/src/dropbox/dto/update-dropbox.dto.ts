import { PartialType } from '@nestjs/mapped-types';
import { CreateDropboxDto } from './create-dropbox.dto';

export class UpdateDropboxDto extends PartialType(CreateDropboxDto) {}
