"use client";

import React from 'react'
import { usePathname } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

function Login() {
  const pathname = usePathname();

  const supabase = createClient();

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
            redirectTo: location.origin + "/auth/callback?next=" + pathname,
        },
    });
  };

  return (
    <button onClick={handleLogin} className="border border-[hsl(155_78%_40%)] hover:opacity-90 bg-[hsl(151_67%_67%)] dark:bg-[hsl(155_100%_19%)] text-[hsl(0_0%_9%)] dark:text-[hsl(0_0%_98%)] rounded-md px-4 py-[2px] text-sm font-mukta">
         Login
      </button>
  )
}

export default Login