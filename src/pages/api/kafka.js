import ProducerKafka from "./ProducerKafka"

export default (req, res) => {
  let kafka = new ProducerKafka(req.body)
  kafka.enviar()
  return res.status(200).json({ status: 'ok' })
}
