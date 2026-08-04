// Supabase Configuration & Shared Helper
// Fixed SUPABASE_URL (Removed duplicate /rest/v1/)
const SUPABASE_URL = 'https://etizsatbjfsubdpsxjza.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_7ThT_6Up1Rya208GcGAEbg_Y_GNTi1N';

// Global Supabase Client
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const Auth = {
    setUser(user, type) {
        localStorage.setItem('svc_user', JSON.stringify(user));
        localStorage.setItem('svc_user_type', type);
    },
    getUser() {
        const user = localStorage.getItem('svc_user');
        return user ? JSON.parse(user) : null;
    },
    getUserType() {
        return localStorage.getItem('svc_user_type');
    },
    clear() {
        localStorage.removeItem('svc_user');
        localStorage.removeItem('svc_user_type');
        window.location.href = '../index.html';
    },
    requireAuth(expectedType) {
        const user = this.getUser();
        const type = this.getUserType();
        if (!user || type !== expectedType) {
            window.location.href = '../index.html';
        }
    }
};