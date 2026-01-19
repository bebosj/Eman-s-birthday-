class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }
                header {
                    background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(225, 29, 72, 0.1);
                    padding: 1rem 0;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                }
                .logo-icon {
                    width: 2.5rem;
                    height: 2.5rem;
                    background: linear-gradient(135deg, #e11d48 0%, #7c3aed 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 0.75rem;
                    color: white;
                }
                .logo-text {
                    font-size: 1.5rem;
                    font-weight: 700;
                    background: linear-gradient(135deg, #e11d48 0%, #7c3aed 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                nav {
                    display: flex;
                    gap: 2rem;
                }
                nav a {
                    text-decoration: none;
                    color: #4b5563;
                    font-weight: 500;
                    padding: 0.5rem 0;
                    position: relative;
                    transition: color 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                nav a:hover {
                    color: #e11d48;
                }
                nav a::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #e11d48, #7c3aed);
                    transition: width 0.3s ease;
                }
                nav a:hover::after {
                    width: 100%;
                }
                .menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #4b5563;
                }
                @media (max-width: 768px) {
                    .container {
                        padding: 0 1rem;
                    }
                    nav {
                        display: none;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: rgba(255,255,255,0.98);
                        backdrop-filter: blur(10px);
                        flex-direction: column;
                        padding: 1rem;
                        gap: 0;
                        border-bottom: 1px solid rgba(225, 29, 72, 0.1);
                    }
                    nav.open {
                        display: flex;
                    }
                    nav a {
                        padding: 0.75rem 1rem;
                        border-bottom: 1px solid rgba(0,0,0,0.05);
                    }
                    nav a:last-child {
                        border-bottom: none;
                    }
                    .menu-btn {
                        display: block;
                    }
                }
            </style>
            <header>
                <div class="container">
                    <a href="index.html" class="logo">
                        <div class="logo-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </div>
                        <span class="logo-text">Mom's Birthday</span>
                    </a>
                    <button class="menu-btn" id="menuToggle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                    <nav id="navMenu">
                        <a href="#bouquet">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2v8M4.93 10.93l1.41 1.41"/>
                                <path d="M2 18h2M20 18h2M19.07 10.93l-1.41 1.41M22 22H2M8 6l4-4 4 4M16 18a4 4 0 0 0-8 0"/>
                                <circle cx="12" cy="12" r="4"/>
                            </svg>
                            Virtual Bouquet
                        </a>
                        <a href="#memories">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <polyline points="21 15 16 10 5 21"/>
                            </svg>
                            Memories
                        </a>
                        <a href="#surprise">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                            </svg>
                            Surprise
                        </a>
                        <a href="#message">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            Message
                        </a>
                    </nav>
                </div>
            </header>
            <script>
                // Simple script for mobile menu toggle (runs in shadow DOM)
                document.addEventListener('DOMContentLoaded', function() {
                    const menuToggle = this.shadowRoot.getElementById('menuToggle');
                    const navMenu = this.shadowRoot.getElementById('navMenu');
                    
                    if (menuToggle && navMenu) {
                        menuToggle.addEventListener('click', function() {
                            navMenu.classList.toggle('open');
                        });
                        
                        // Close menu when clicking a link
                        const navLinks = navMenu.querySelectorAll('a');
                        navLinks.forEach(link => {
                            link.addEventListener('click', () => {
                                navMenu.classList.remove('open');
                            });
                        });
                    }
                }.bind(this));
            </script>
        `;
    }
}

customElements.define('custom-header', CustomHeader);
