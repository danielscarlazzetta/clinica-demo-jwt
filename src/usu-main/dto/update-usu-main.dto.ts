import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuMainDto } from './create-usu-main.dto';

export class UpdateUsuMainDto extends PartialType(CreateUsuMainDto) {}
