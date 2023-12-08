"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Home() {

  const handleConnectWallet = () => {
    // Navigate to the "/tenders" route
    router.push('/tenders');
  };

  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-4xl font-bold mb-6 text-center">Tender Management System</h1>
    <button 
    onClick={handleConnectWallet}
    className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition duration-300">
      Connect Wallet
    </button>
  </div>
  )
}
