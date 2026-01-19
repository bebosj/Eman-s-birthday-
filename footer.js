class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }
                footer {
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    color: #cbd5e1;
                    padding: 3rem 0 1.5rem;
                    margin-top: auto;
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 2rem;
                    margin-bottom: 2rem;
                }
                @media (min-width: 768px) {
                    .footer-content {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                .footer-section h3 {
                    color: white;
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    position: relative;
                    display: inline-block;
                }
                .footer-section h3::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -5px;
                    width: 40px;
                    height: 2px;
                    background: linear-gradient(90deg, #e11d48, #7c3aed);
                }
                .footer-section p {
                    line-height: 1.6;
                    margin-bottom: 1rem;
                }
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                .social-links a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.1);
                    color: #cbd5e1;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                .social-links a:hover {
                    background: linear-gradient(135deg, #e11d48 0%, #7c3aed 100%);
                    transform: translateY(-3px);
                    color: white;
                }
                .footer-links {
                    list-style: none;
                    padding: 0;
                }
                .footer-links li {
                    margin-bottom: 0.75rem;
                }
                .footer-links a {
                    color: #94a3b8;
                    text-decoration: none;
                    transition: color 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .footer-links a:hover {
                    color: #e11d48;
                }
                .footer-bottom {
                    border-top: 1px solid rgba(255,255,255,0.1);
                    padding-top: 1.5rem;
                    text-align: center;
                }
                .heart {
                    color: #e11d48;
                    animation: pulse 1.5s infinite;
                    display: inline-block;
                }
                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.2);
                    }
                }
                .copyright {
                    font-size: 0.875rem;
                    color: #94a3b8;
                }
            </style>
            <footer>
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3>About This Card</h3>
                            <p>A heartfelt digital birthday card created with love, featuring an interactive bouquet, memories, and virtual surprises for the world's best mom.</p>
                            <div class="social-links">
                                <a href="#" title="Share Love">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06#1#06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </a>
                                <a href="#" title="Share Flowers">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <line x1="2" y1="12" x2="22" y2="12"/>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                                    </svg>
                                </a>
                                <a href="#" title="Share Happiness">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                                        <line x1="9" y1="9" x2="9.01" y2="9"/>
                                        <line x1="15" y1="9" x2="15.01" y2="9"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="footer-section">
                            <h3>Quick Links</h3>
                            <ul class="footer-links">
                                <li>
                                    <a href="#bouquet">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M12 2v8M4.93 10.93l1.41 1.41"/>
                                            <path d="M2 18h2M20 18h2M19.07 10.93l-1.41 1.41M22 22H2M8 6l4-4 4 4M16 18a4 4 0 0 0-8 0"/>
                                            <circle cx="12" cy="12" r="4"/>
                                        </svg>
                                        Interactive Bouquet
                                    </a>
                                </li>
                                <li>
                                    <a href="#memories">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                            <circle cx="8.5" cy="8.5" r="1.5"/>
                                            <polyline points="21 15 16 10 5 21"/>
                                        </svg>
                                        Memory Gallery
                                    </a>
                                </li>
                                <li>
                                    <a href="#surprise">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                        </svg>
                                        Virtual Surprises
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h3>Made With</h3>
                            <p>Created using HTML, CSS, JavaScript, and lots of love.</p>
                            <p>Colors inspired by beautiful roses and violets for the most beautiful mom.</p>
                            <p class="copyright">
                                <span class="heart">❤️</span> This digital bouquet will never wilt.
                            </p>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p class="copyright">
                            © ${new Date().getFullYear()} Mom's Blooming Birthday Bouquet. All love reserved. | Made with <span class="heart">❤️</span> for the world's best mom.
                        </p>
                        <p class="copyright mt-2">
                            Replace [Your Name Here] with your name before sharing with mom!
                        </p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
