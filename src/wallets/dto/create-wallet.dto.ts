import { IsBoolean, IsOptional, IsPositive, IsString } from 'class-validator';


export class CreateWalletDto {
    @IsOptional()
    @IsString()
    address: string;

    @IsString()
    name?: string;

    @IsOptional()
    @IsPositive()
    value?: number;


    @IsOptional()
    firstTransactionDate?:Date;

    @IsOptional()
    @IsBoolean()
    isFavorite?:boolean;
}
