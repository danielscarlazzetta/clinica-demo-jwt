import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuEmpDto } from './create-usu-emp.dto';

export class UpdateUsuEmpDto extends PartialType(CreateUsuEmpDto) {}
