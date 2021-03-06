import { Kafka } from 'kafka-node'

const topic = (process.env.TOPICO_KAFKA || 'mapeamento-drone')
const brokers = (process.env.BROKERS_KAFKA || '').split(',')
const clientId = (process.env.APP_CODE || 'drone')

export default class ProducerKafka {
  constructor(drone) {
    this.drone = drone

    const kafka = new Kafka({
      clientId,
      brokers,
    })
    this.KafkaProducer = kafka.producer()
  }

  async enviar () {
    await this.KafkaProducer.connect()
    await this.KafkaProducer.send({
      topic,
      messages: JSON.stringify(this.drone),
    })
    await this.KafkaProducer.disconnect()
  }
}