import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class Wallets {
    @Column({primary: true, generated:true})
    id: number;

    @Column()
    name: string;

    @Column({type: "float", default: 0})
    balance: number;

    @Column({type: "float", default: 0})
    value: number;

    @Column({type: "timestamp", default: null})
    firstTransactionDate: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column({default: ""})
    address: string;

    @Column({default: false})
    isFavorite: boolean;
}

