import { Persona } from "src/personas/entities/persona.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("rol")
export class Role {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column("text")
    rol:string

    @OneToMany(() => Persona, (persona) => persona.role)
    personas: Persona[];
}
