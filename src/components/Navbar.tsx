'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { AuthModal } from './AuthModal'
import { UserAvatar } from './Avatar'

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const { data: session } = useSession()

  return (
    <>
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              plynt
            </Link>
            <nav className="flex items-center gap-4">
              {!session?.user && (
                <Link
                  href="/pricing"
                  className="text-sm text-gray-400 hover:text-purple-300 transition-colors"
                >
                  Pricing
                </Link>
              )}

              {session?.user ? (
                <UserAvatar user={session.user} onSignOut={() => signOut()} />
              ) : (
                <>
                  <button
                    id="login-trigger"
                    onClick={() => setShowLoginModal(true)}
                    className="text-sm text-gray-400 hover:text-purple-300 transition-colors"
                  >
                    Login
                  </button>
                  <button
                    id="signup-trigger"
                    onClick={() => setShowSignupModal(true)}
                    className="text-sm text-gray-400 hover:text-purple-300 transition-colors"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        mode="login"
      />
      
      <AuthModal 
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        mode="signup"
      />
    </>
  )
}

