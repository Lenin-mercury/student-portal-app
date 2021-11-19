import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { StudentsController} from './Students/student.controller';
import { studentSchema } from './Schema/Student.schema';
import {StudentService} from './Services/student.service';

@Module({
  imports: [

    MongooseModule.forRoot((process.env.MONGODB_STORE_URI || 'mongodb+srv://lenin_k:Lenin007@cluster0.jj3td.mongodb.net/studentDatabase?retryWrites=true&w=majority')),MongooseModule.forFeature([{
      name:'Students',
      schema:studentSchema,
      collection:'Students'
    }])
  ],
  controllers: [AppController, StudentsController],
  providers: [AppService, StudentService],
})
export class AppModule {}