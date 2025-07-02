import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  content: string;

  @IsInt()
  userId: number;
} 