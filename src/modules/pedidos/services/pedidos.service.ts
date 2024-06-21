import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Pedido } from '../schemas/pedidos.schema';


@Injectable()
export class PedidosService {
    //pedidos = []
    //constructor(@InjectModel('Pedidos') private readonly pedidosModel: Model<Pedidos>){}
    constructor(
        @InjectModel(Pedido.name)
        private pedidoModel: Model<Pedido>,
    ) {}

    async create(CreatePedidoDto: any): Promise<Pedido>{
        const res = new this.pedidoModel(CreatePedidoDto);
        //this.pedidos.push(pedido);
        return res.save();
    }

    async findAll(): Promise<Pedido[]> {
        return this.pedidoModel.find().exec();  
    }

    
    async findById(id: string): Promise<Pedido> {
        const pedido = await this.pedidoModel.findById(id);

        if (!pedido) {
            throw new NotFoundException('Pedido no encontrado');
        }

        return pedido;
    } 

    async deleteById(id: string): Promise<Pedido> {
        return await this.pedidoModel.findByIdAndDelete(id);
    }

    async updateById(id: string, pedido: Pedido): Promise<Pedido> {
        return await this.pedidoModel.findByIdAndUpdate(id, pedido, {
            new: true,
            runValidators: true,
        });
    }

}
