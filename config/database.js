module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cd99ol9a6gdv16a2u37g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_9uyz'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'f7XAfoxi2mZwR2y5OwGuqsba0M2XFGXi'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
