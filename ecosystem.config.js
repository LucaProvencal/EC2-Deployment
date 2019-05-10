module.exports = {
  apps: [{
    name: 'thedrumroom',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-234-30-106.compute-1.amazonaws.com',
      key: '~/.ssh/TheDrumRoomSSHKey.pem',
      ref: 'origin/master',
      repo: 'https://github.com/LucaProvencal/EC2-Deployment.git',
      path: '/home/ubuntu/EC2-Deployment',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}