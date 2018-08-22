import cluster from 'cluster';
import os from 'os';

if (cluster.isMaster) {
  const cpus = os.cpus();
  for (let cpu of cpus) {
    cluster.fork();
  }
} else {
  require('./server');
}
