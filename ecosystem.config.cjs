module.exports = {
  apps: [
    {
      name: 'hat-boh-app',
      port: '3333',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: "production",
        NITRO_PORT: "3333" //modify this for each server instance
      }
    }
  ]
}