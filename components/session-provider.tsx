'use client';

import { useUser } from '@/lib/store/user';
import { createClient } from '@/utils/supabase/client'
import { useEffect } from 'react'

function SessionProvider() {
    const supabase = createClient();
    const setUser = useUser((state) => state.setUser);

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await supabase.auth.getSession();
            const userId = data.session?.user?.id;

            if (!userId) return;

            const { data: userInfo } = await supabase
                .from("users")
                .select("*")
                .eq("id", userId)
                .single();

            setUser(userInfo);
        };

        fetchUser();
    }, [setUser]); // Only include `setUser` in dependencies

    return null; // No need for an empty fragment (<> </>)
}

export default SessionProvider;
