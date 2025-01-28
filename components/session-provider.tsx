'use client';

import { useUser } from '@/lib/store/user';
import { createClient } from '@/utils/supabase/client'
import React, { useEffect } from 'react'

function SessionProvider() {
  
    const supabase = createClient();
    const setUser = useUser((state) => state.setUser);

    const readUserSession = async () => {
        const { data } = await supabase.auth.getSession();
        setUser(data.session?.user);
    };

    useEffect(() => {
        readUserSession();
    }, []);

    return (
    <></>
  )
}

export default SessionProvider