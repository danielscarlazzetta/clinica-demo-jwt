import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuCliDto } from './create-usu-cli.dto';

export class UpdateUsuCliDto extends PartialType(CreateUsuCliDto) {}
