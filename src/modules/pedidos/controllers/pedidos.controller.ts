import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { PedidosService } from '../services/pedidos.service';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePedidoDto } from '../dto/create-pedido.dto';
import { Pedido } from '../schemas/pedidos.schema';
import { UpdatePedidoDto } from '../dto/update-pedido.dto';

@Controller('pedidos')
export class PedidosController {
    constructor(private readonly pedidosService: PedidosService) {}

    @Post()
    async create (@Body() createPedidoDto: any) {
        this.pedidosService.create(createPedidoDto);
    }

    @Get()
    async findAll(){
        return this.pedidosService.findAll();
    }
    
    @Get(':id')
    async getPedido(@Param('id') id: string): Promise<Pedido>{
        return this.pedidosService.findById(id);
    }

    @Delete(':id')
    async deletePedido(@Param('id') id: string): Promise<Pedido>{
        return this.pedidosService.deleteById(id);
    }

    @Put(':id')
    async updatePedido(@Param('id') id: string, @Body() pedido: UpdatePedidoDto, ): Promise<Pedido>{
        return this.pedidosService.updateById(id, pedido);
    }

}
