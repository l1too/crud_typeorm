import { Persona } from "src/personas/entities/persona.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("auto")
export class Auto {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column("text")
    modelo:string

    @Column("text")
    marca:string

    @Column("text")
    color: string

    @Column("text")
    patente:string

    @ManyToOne(()=> Persona)
    persona:Persona

}
