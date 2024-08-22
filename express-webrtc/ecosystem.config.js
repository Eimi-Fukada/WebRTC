module.exports = {
  apps: [
    {
      name: "my-express-webrtc",
      script: "./bin/www",
      instances: 1, // 运行实例的数量
      autorestart: true, // 是否自动重启
      watch: true, // 是否监控文件更改
      max_memory_restart: "1G", // 内存使用达到多少时重启
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
