import { Column, DeleteDateColumn, Entity } from "typeorm";
@Entity()
export class Wallets {
    @Column({primary: true, generated:true})
    id: number;

    @Column({unique:true,default: ""})
    address: string;

    @Column({default: false})
    isFavorite: boolean;

    @Column()
    name: string;

    @Column({type: "timestamp", default: null})
    firstTransactionDate: Date;

    @DeleteDateColumn()
    deletedAt: Date;
} 

