import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: "notifications",
                brokers: ['darling-cod-8423-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'ZGFybGluZy1jb2QtODQyMyTQ5vrbYwvqdeU9UuZdPluNgUJqU76vNTDW5D0kjio',
                    password: 'ae9586a98ca743d2a9b1c819d5fc572d',
                },
                ssl: true,
            }
        });
    }
    async onModuleDestroy() {
        await this.close();
    }
}