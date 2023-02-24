import { Entity,BaseEntity,PrimaryGeneratedColumn, Column, CreateDateColumn  } from "typeorm";


@Entity('inforcoche')
export class InforCoche extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true,})
    idunico: string

    @Column()
    nombre: string

    @Column()
    marca: string

    @Column({ type: "int" })
    anyomatriculacion: number

    @Column()
    etiquetaambiental: string

    @Column()
    imagen: string

    @Column()
    peso: number
/*
    @CreateDateColumn({name: "createdat"})
    createdAt: Date
 
    @UpdateDateColumn(["updatedat"])
    updatedAt: Date
 */
};


