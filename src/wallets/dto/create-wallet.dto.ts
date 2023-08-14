import { IsBoolean, IsOptional, IsPositive, IsString } from 'class-validator';


export class CreateWalletDto {

    @IsString()
    address: string;

    @IsOptional()
    @IsBoolean()
    isFavorite?:boolean;

    @IsOptional()
    deletedAt?:Date;

}
