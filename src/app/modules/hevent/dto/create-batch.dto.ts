import { ApiProperty } from "@nestjs/swagger";
import { Batch } from "../entities/batch.entity";

export class CreateBatchDto extends Batch {

    @ApiProperty({ example: 'Batch Name' })
    name: string;
    @ApiProperty({ example: 29.99 })
    price: number;
    @ApiProperty({ example: '2024-12-12' })
    initialDate: Date;
    @ApiProperty({ example: '2024-12-12' })
    endDate: Date;
    @ApiProperty({ example: 100 })
    availableAmount: number;
    
}