import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({unique:true})
    email:string;

    @Column()
    password:string

    @Column({default:true})
    isActive:boolean;

    @CreateDateColumn()
    createdAt:Date;

    @Column({nullable:true})
    createdBy:number;

    @UpdateDateColumn()
    updateAt:Date;

    @Column({nullable:true})
    updateBy:number;

    @DeleteDateColumn()
    deletedAt:Date;

    @Column({nullable:true})
    deletedBy:number;

}
