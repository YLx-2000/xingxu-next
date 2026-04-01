import './globals.css';

export const metadata = {
  title: '星叙 XingXu',
  description: '星叙 1.0 内测演示版 · 高质量创意协作平台原型',
  icons: {
    icon: '/xingxu-logo-circle.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
