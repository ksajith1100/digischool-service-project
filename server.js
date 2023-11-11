// ESM
import Fastify from "fastify";
import dbConnector from "./dbConnecter/dbConnector";
import firstRoute from "./routes/route";

const fastify = Fastify({
  logger: true,
});
fastify.register(dbConnector);
fastify.register(firstRoute);

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
