import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docker-notes/',
  title: "Docker 教程",
  description: "从入门到掌握",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/ch1/ch1' },
      { text: '参考', link: '/others/reference' }
    ],

    sidebar: [
      {
        text: '项目说明',
        link: '/README',
        collapsed: false
      },
      {
        text: '第 1 章 Docker 介绍',
        link: '/ch1/ch1',
        collapsed: false,
        items: [
          { text: '1.1 Docker 的特点与架构', link: '/ch1/ch1_1' },
          { text: '1.2 Docker 核心概念', link: '/ch1/ch1_2' },
          { text: '1.3 Docker 和虚拟机对比', link: '/ch1/ch1_3' }
        ]
      },
      {
        text: '第 2 章 Docker 安装',
        link: '/ch2/ch2',
        collapsed: false,
        items: [
          { text: '2.1 CentOS Docker 安装', link: '/ch2/ch2_1' },
          { text: '2.2 macOS Docker 安装', link: '/ch2/ch2_2' },
          { text: '2.3 Windows Docker 安装', link: '/ch2/ch2_3' }
        ]
      },
      {
        text: '第 3 章 Docker 使用',
        link: '/ch3/ch3',
        collapsed: false,
        items: [
          { text: '3.1 Docker 基础使用', link: '/ch3/ch3_1' },
          { text: '3.2 Docker 镜像操作', link: '/ch3/ch3_2' },
          { text: '3.3 Docker 容器操作', link: '/ch3/ch3_3' },
          { text: '3.4 Docker 网络', link: '/ch3/ch3_4' },
          { text: '3.5 Docker 存储', link: '/ch3/ch3_5' }
        ]
      },
      {
        text: '第 4 章 Docker Dockerfile',
        link: '/ch4/ch4',
        collapsed: false,
        items: [
          { text: '4.1 Dockerfile 简单使用', link: '/ch4/ch4_1' },
          { text: '4.2 Dockerfile 常用指令', link: '/ch4/ch4_2' },
          { text: '4.3 Dockerfile 实际使用', link: '/ch4/ch4_3' }
        ]
      },
      {
        text: '第 5 章 Docker Compose',
        link: '/ch5/ch5',
        collapsed: false,
        items: [
          { text: '5.1 Docker Compose 安装', link: '/ch5/ch5_1' },
          { text: '5.2 Docker Compose 文件结构', link: '/ch5/ch5_2' },
          { text: '5.3 Docker Compose 常用操作命令', link: '/ch5/ch5_3' }
        ]
      },
      {
        text: '第 6 章 Docker 常用命令',
        link: '/ch6/ch6',
        collapsed: false,
        items: [
          { text: '6.1 Docker 服务命令', link: '/ch6/ch6_1' },
          { text: '6.2 Docker 镜像命令', link: '/ch6/ch6_2' },
          { text: '6.3 Docker 容器命令', link: '/ch6/ch6_3' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YYelf/docker-notes' }
    ]
  }
})
