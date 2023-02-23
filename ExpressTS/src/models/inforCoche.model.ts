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

    @Column({ type: "int", name :"anyomatriculacion" })
    anyomatriculacion: number

    @Column({name: "etiquetaambiental"})
    etiquetaambiental: string

    @Column()
    imagen: string

    @Column({ type: "float" })
    peso: number
/*
    @CreateDateColumn({name: "createdat"})
    createdAt: Date
 
    @UpdateDateColumn(["updatedat"])
    updatedAt: Date
 */
};


