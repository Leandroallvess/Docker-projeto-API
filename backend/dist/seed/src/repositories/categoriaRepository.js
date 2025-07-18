"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaRepository = void 0;
const prismaClient_1 = require("../config/prismaClient");
class CategoriaRepository {
    listarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.prisma.categoria.findMany({ include: { produtos: true } });
        });
    }
    buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.prisma.categoria.findUnique({
                where: { id },
                include: { produtos: true },
            });
        });
    }
    criar(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.prisma.categoria.create({ data });
        });
    }
    atualizar(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.prisma.categoria.update({ where: { id }, data });
        });
    }
    deletar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prismaClient_1.prisma.categoria.delete({ where: { id } });
        });
    }
}
exports.CategoriaRepository = CategoriaRepository;
