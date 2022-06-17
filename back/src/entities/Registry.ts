import { Entity, Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('registry')
export class Registry {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    weight: string;

    @Column()
    height: string;

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
	deletedAt: Date;
}