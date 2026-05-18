:root {
    --primary: #4F46E5;
    --primary-hover: #4338CA;
    --secondary: #10B981;
    --bg-color: #F9FAFB;
    --text-main: #111827;
    --text-muted: #6B7280;
    --surface: #FFFFFF;
    --border: #E5E7EB;
    --radius: 16px;
    --radius-sm: 8px;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    -webkit-tap-highlight-color: transparent;
}

body {
    background-color: #E5E7EB;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.app-container {
    width: 100%;
    max-width: 414px;
    height: 100vh;
    max-height: 896px;
    background-color: var(--bg-color);
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: var(--shadow-lg);
    background-image: linear-gradient(to bottom right, #F9FAFB, #F3F4F6);
}

@media (min-width: 415px) {
    .app-container {
        height: 90vh;
        border-radius: 24px;
        border: 8px solid #1f2937;
    }
}

/* Animations */
@keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.screen {
    padding: 24px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    animation: fadeIn 0.3s ease-out;
}

/* Typography */
h1 { font-size: 28px; font-weight: 700; color: var(--text-main); margin-bottom: 8px; }
h2 { font-size: 22px; font-weight: 600; color: var(--text-main); margin-bottom: 16px; }
p { font-size: 16px; color: var(--text-muted); line-height: 1.5; }

/* Buttons */
.btn {
    width: 100%;
    padding: 16px;
    border-radius: var(--radius);
    border: none;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    text-align: center;
}

.btn-primary {
    background-color: var(--primary);
    color: white;
    box-shadow: 0 4px 14px 0 rgba(79, 70, 229, 0.39);
}

.btn-primary:hover { background-color: var(--primary-hover); transform: translateY(-2px); }

.btn-outline {
    background-color: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
}

.btn-outline:hover { background-color: rgba(79, 70, 229, 0.05); }

/* Language Screen */
.lang-screen {
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%);
    color: white;
}
.lang-screen h1 { color: white; margin-bottom: 40px; font-size: 36px;}
.lang-screen .btn { background: white; color: var(--primary); font-size: 18px;}

/* Onboarding Screen */
.onboarding-screen {
    justify-content: center;
    text-align: center;
}
.tags-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 32px;
}
.tag-btn {
    background: var(--surface);
    border: 2px solid var(--border);
    padding: 24px 16px;
    border-radius: var(--radius);
    font-size: 18px;
    font-weight: 600;
    color: var(--text-main);
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}
.tag-btn:hover, .tag-btn:active {
    border-color: var(--primary);
    background-color: rgba(79, 70, 229, 0.05);
    color: var(--primary);
    transform: scale(1.02);
}
.tag-icon { font-size: 32px; }

/* Main Dashboard */
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
}
.header-title { font-size: 20px; font-weight: 700; }
.back-btn { background: none; border: none; font-size: 24px; cursor: pointer; color: var(--text-main); }

.filter-scroll {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    padding-bottom: 12px;
    margin-bottom: 16px;
    scrollbar-width: none;
}
.filter-scroll::-webkit-scrollbar { display: none; }
.filter-pill {
    padding: 8px 16px;
    border-radius: 20px;
    background: var(--surface);
    border: 1px solid var(--border);
    white-space: nowrap;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;
}
.filter-pill.active {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}

.place-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 24px;
}
.place-card {
    background: var(--surface);
    border-radius: var(--radius);
    padding: 16px;
    box-shadow: var(--shadow);
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    animation: slideIn 0.4s ease-out backwards;
}
.place-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-lg); }
.place-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; }
.place-name { font-size: 18px; font-weight: 700; color: var(--text-main); }
.place-distance { font-size: 14px; color: var(--primary); font-weight: 600; background: rgba(79, 70, 229, 0.1); padding: 4px 8px; border-radius: var(--radius-sm); }
.place-category { font-size: 14px; color: var(--text-muted); margin-bottom: 12px; }
.place-why { background: #F3F4F6; padding: 12px; border-radius: var(--radius-sm); font-size: 14px; border-left: 4px solid var(--secondary); }
.place-why strong { display: block; margin-bottom: 4px; color: var(--text-main); font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;}

/* Place Details Screen */
.detail-hero {
    background: linear-gradient(135deg, #1f2937, #111827);
    margin: -24px -24px 24px -24px;
    padding: 24px;
    padding-top: 48px;
    color: white;
    position: relative;
}
.detail-hero .back-btn { color: white; position: absolute; top: 24px; left: 24px; }
.detail-title { font-size: 28px; margin-top: 24px; font-weight: 700; }
.detail-meta { display: flex; gap: 16px; margin-top: 8px; color: #D1D5DB; font-size: 14px; }

.section { margin-bottom: 24px; background: var(--surface); padding: 20px; border-radius: var(--radius); box-shadow: var(--shadow); }
.section h3 { font-size: 18px; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }

.info-row { display: flex; justify-content: space-between; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid var(--border); }
.info-row:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.info-label { color: var(--text-muted); font-weight: 500; }
.info-value { font-weight: 600; color: var(--text-main); text-align: right; max-width: 60%; }
.info-value.success { color: var(--secondary); }
.info-value.warning { color: #F59E0B; }

.fixed-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 24px;
    background: linear-gradient(to top, var(--bg-color) 70%, transparent);
}
.detail-scroll-area {
    padding-bottom: 100px;
}
