import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Pedido{
    @Prop()
    numPedido: number;

    @Prop()
    nomCliente: string;

    @Prop()
    descripcion: string;

    @Prop()
    total: number;
}

export const PedidoSchema = SchemaFactory.createForClass(Pedido) 

//extends Document