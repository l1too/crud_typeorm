import { Auto } from "src/autos/entities/auto.entity";
import { Role } from "src/roles/entities/role.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("persona")
export class Persona {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column("text")
    nombre:string

    @Column("text")
    apellido:string

    @Column("text")
    dni:string

    @Column("text")
    lenguaje:string

    @OneToMany(()=> Auto, (auto)=> auto.persona)
    auto: Auto
    
    @ManyToOne(()=> Role, (role)=> role.personas)
    role:Role
}
