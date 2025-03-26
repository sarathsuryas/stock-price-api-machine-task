import { Transform } from 'class-transformer';
import { IsString, IsDateString, Matches, IsNotEmpty } from 'class-validator';

export class QueryStockStatDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zA-Z]+$/, {
    message: 'This field can only contain alphabets',
  })
  symbol: string;
  @IsNotEmpty()
  @Matches(/^\d{4}\/\d{2}\/\d{2}$/, {
    message: 'Date must be in the format YYYY/MM/DD',
  })
  date: string;
} 

function sanitize(value: any): any {
  throw new Error('Function not implemented.');
}
