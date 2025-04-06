import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '餐廳點餐系統',
  description: '一個簡單的餐廳點餐系統，使用Next.js和React實現',
};

export default function OrderSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
} 