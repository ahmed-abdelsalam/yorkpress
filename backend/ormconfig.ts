const path = require('path');

module.exports = {
  type: 'sqlite',
  database: 'models/db.sqlite',
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, 'models', 'entity', '**', '*.ts')],
  migrations: [path.join(__dirname, 'models', 'migration', '**', '*.ts')],
  subscribers: [path.join(__dirname, 'models', 'subscriber', '**', '*.ts')],
  cli: {
    entitiesDir: path.join(__dirname, 'models', 'entity'),
    migrationsDir: path.join(__dirname, 'models', 'migration'),
    subscribersDir: path.join(__dirname, 'models', 'subscriber'),
  },
};
