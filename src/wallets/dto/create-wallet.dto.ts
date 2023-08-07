import { IsOptional, IsPositive, IsString } from 'class-validator';


export class CreateWalletDto {
    @IsString()
    name?: string;

    @IsOptional()
    @IsPositive()
    value?: number;

    @IsOptional()
    @IsString()
    address?: string;
}
