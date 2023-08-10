import { Module } from "@nestjs/common";
import { ApiService } from "./api-data.service";


@Module({
    providers: [ApiService],
    exports:[ApiService],
})
export class ApiDataModule{}