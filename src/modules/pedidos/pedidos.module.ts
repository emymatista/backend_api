import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pedido, PedidoSchema } from './schemas/pedidos.schema';
import { PedidosController } from './controllers/pedidos.controller';
import { PedidosService } from './services/pedidos.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: Pedido.name, schema: PedidoSchema}]),
    ],
    controllers: [PedidosController],
    providers: [PedidosService]
})
export class PedidosModule {}
