import { Column, DeleteDateColumn, Entity } from "typeorm";
@Entity()
export class Wallets {
    @Column({primary: true, generated:true})
    id: number;

    @Column()
    address: string;

    @Column({default: false})
    isFavorite: boolean;

    @DeleteDateColumn()
    deletedAt: Date;
} 

