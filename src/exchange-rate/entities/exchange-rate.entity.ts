import { Column, Entity } from 'typeorm';
@Entity()
export class ExchangeRate {
  @Column({primary: true, generated:true})
  id: number;
  @Column()
  USD: string;
  @Column()
  EUR: string;
}
