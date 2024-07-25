import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonasModule } from './personas/personas.module';
import { AutosModule } from './autos/autos.module';
import { RolesModule } from './roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionesModule } from './ubicaciones/ubicaciones.module';

@Module({
  imports: [PersonasModule, AutosModule, RolesModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), UbicacionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
