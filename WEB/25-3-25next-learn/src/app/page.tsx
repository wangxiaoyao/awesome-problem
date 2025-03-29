import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Next.js 應用展示</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link 
          href="/order-system" 
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-2xl font-bold mb-2">餐廳點餐系統</h2>
          <p className="text-gray-600">一個簡單的餐廳點餐系統，可以添加商品到購物車並結賬</p>
        </Link>
        <Link 
          href="/hooksLearn" 
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-2xl font-bold mb-2">Hooks 學習</h2>
          <p className="text-gray-600">React Hooks 的學習和示例</p>
        </Link>
      </div>
    </div>
  );
}
