1. monorepo的管理工具
   1. lerna：
   2. turbo：
   3. rush：
2. monorepo的优势
   1. 代码复用: 
      公共配置：eslint、prettier、babel、ts、webpack
      20个nextjs应用，一个组 5个人维护，lambda配置：20.x
   2. 依赖管理：
      workspace：pnpm、yarn、npm8+
   3. 统一的开发环境
      1. nodejs，nvm
   4. 微前端：webpack：module federation
3. workspace
   - pnpm i class-variance-authority -w 安装到根目录
   - pnpm i class-variance-authority --filter conponents 安装到指定的子包
   - pnpm add @yd/hooks --filter components --workspace workspace直接的互相饮用