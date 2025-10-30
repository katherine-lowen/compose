"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
const common_1 = require("@nestjs/common");
const minio_1 = require("minio");
function endpointHost() {
    const ep = process.env.S3_ENDPOINT || 'http://minio:9000';
    return ep.replace(/^https?:\/\//, '').split(':')[0] || 'minio';
}
let StorageService = class StorageService {
    constructor() {
        this.client = new minio_1.Client({
            endPoint: endpointHost(),
            port: 9000,
            useSSL: false,
            accessKey: process.env.S3_ACCESS_KEY || 'minio',
            secretKey: process.env.S3_SECRET_KEY || 'minio123',
        });
    }
};
exports.StorageService = StorageService;
exports.StorageService = StorageService = __decorate([
    (0, common_1.Injectable)()
], StorageService);
