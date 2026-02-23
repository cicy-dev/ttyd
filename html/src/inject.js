// This file is loaded by ttyd's custom HTML
// It injects tmux-app functionality

console.log('[ttyd] Injecting tmux-app...');

// // Get token from URL or localStorage
// const getToken = () => {
//     const stored = localStorage.getItem('token');
//     if (stored) return stored;
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get('token') || '';
// };

// // API configuration
// const API_BASE = 'https://g-fast-api.cicy.de5.net';
// const TTYD_BASE = 'https://ttyd-proxy.cicy.de5.net';

// const getApiUrl = (path) => {
//     if (path.startsWith('/ttyd/') && !path.startsWith('/ttyd/status')) {
//         return TTYD_BASE + path;
//     }
//     return API_BASE + path;
// };

// const authHeaders = () => ({
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'Authorization': 'Bearer ' + getToken()
// });

// // Initialize tmux-app
// async function initTmuxApp() {
//     const token = getToken();
//     if (!token) {
//         console.log('[ttyd] No token found');
//         return;
//     }

//     console.log('[ttyd] Token found, initializing...');
    
//     // Get pane info
//     const urlParams = new URLSearchParams(window.location.search);
//     const botName = urlParams.get('bot_name') || 'default';
    
//     try {
//         const res = await fetch(`${API_BASE}/api/tmux/panes/${encodeURIComponent(botName)}`, {
//             headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/json' }
//         });
//         if (res.ok) {
//             const data = await res.json();
//             console.log('[ttyd] Pane info:', data);
//         }
//     } catch (e) {
//         console.error('[ttyd] Failed to get pane info:', e);
//     }
// }

// // Wait for DOM
// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', initTmuxApp);
// } else {
//     initTmuxApp();
// }
