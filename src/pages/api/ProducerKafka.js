import { Kafka } from 'kafkajs'
import dotenv from 'dotenv'
dotenv.config()

const topic = process.env.TOPICO_KAFKA
const broker = process.env.BROKERS_KAFKA
const clientId = process.env.CLIENTE_KAFKA

export default class ProducerKafka {
  constructor() {
    const kafka = new Kafka({
      clientId: clientId,
      brokers: [broker],
    })
    this.KafkaProducer = kafka.producer()
  }

  async enviar (mensagem) {
    await this.KafkaProducer.connect()
    await this.KafkaProducer.send({
      topic,
      messages: [{
        value: JSON.stringify(mensagem)
      }],
    })
    await this.KafkaProducer.disconnect()
  }
}