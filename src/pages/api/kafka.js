import ProducerKafka from "./ProducerKafka"

export default (req, res) => {
  let kafka = new ProducerKafka()
  kafka.enviar(req.body)
  return res.status(200).json({ status: 'ok' })
}
