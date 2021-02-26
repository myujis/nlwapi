import { Column, CreateDateColumn, Entity } from "typeorm";
import { PrimaryColumn } from "typeorm/decorator/columns/PrimaryColumn";
import {v4 as uuid} from 'uuid';


@Entity("surveys")
class Survey{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    createdAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}
export { Survey };