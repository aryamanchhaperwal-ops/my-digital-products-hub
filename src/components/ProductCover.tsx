import React from 'react';
import { Product } from '../types';

interface ProductCoverProps {
  product: Product;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showBadge?: boolean;
}

export const ProductCover: React.FC<ProductCoverProps> = ({
  product,
  size = 'md',
  className = '',
  showBadge = true
}) => {
  const getVisualElements = () => {
    switch (product.id) {
      case 'ai-career-blueprint':
        return (
          <g>
            {/* Career roadmap + AI + professional growth */}
            <defs>
              <linearGradient id="grad-blueprint" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
              <pattern id="grid-blueprint" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="400" height="280" fill="url(#grad-blueprint)" />
            <rect width="400" height="280" fill="url(#grid-blueprint)" />
            {/* Growth Curve / Roadmap Path */}
            <path
              d="M 40 220 C 120 210, 160 160, 230 130 C 290 100, 320 60, 360 45"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="4"
              strokeDasharray="6 4"
            />
            {/* Waypoints */}
            <circle cx="60" cy="216" r="7" fill="#93c5fd" />
            <circle cx="160" cy="165" r="9" fill="#bfdbfe" />
            <circle cx="250" cy="120" r="11" fill="#ffffff" />
            <circle cx="340" cy="55" r="13" fill="#38bdf8" />
            {/* Glowing target node */}
            <circle cx="340" cy="55" r="22" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
            <circle cx="340" cy="55" r="32" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            {/* Ascending staircase bars */}
            <rect x="70" y="180" width="18" height="35" rx="4" fill="rgba(255,255,255,0.2)" />
            <rect x="100" y="155" width="18" height="60" rx="4" fill="rgba(255,255,255,0.3)" />
            <rect x="130" y="130" width="18" height="85" rx="4" fill="rgba(255,255,255,0.4)" />
            <rect x="190" y="105" width="18" height="110" rx="4" fill="rgba(255,255,255,0.5)" />
            <rect x="220" y="80" width="18" height="135" rx="4" fill="rgba(255,255,255,0.65)" />
          </g>
        );

      case 'ai-workflows':
        return (
          <g>
            {/* Connected workflow nodes + automation + AI */}
            <defs>
              <linearGradient id="grad-wf" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4338ca" />
                <stop offset="50%" stopColor="#6d28d9" />
                <stop offset="100%" stopColor="#db2777" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad-wf)" />
            {/* Connecting lines */}
            <path d="M 90 90 L 190 60" stroke="#f472b6" strokeWidth="3" fill="none" />
            <path d="M 90 90 L 190 140" stroke="#c084fc" strokeWidth="3" fill="none" />
            <path d="M 190 60 L 310 100" stroke="#a78bfa" strokeWidth="3" fill="none" />
            <path d="M 190 140 L 310 100" stroke="#818cf8" strokeWidth="3" fill="none" />
            <path d="M 310 100 L 330 190" stroke="#f472b6" strokeWidth="3" fill="none" />
            <path d="M 190 140 L 190 220" stroke="#a78bfa" strokeWidth="3" fill="none" />
            {/* Workflow cards/nodes */}
            <rect x="40" y="65" width="90" height="50" rx="10" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
            <text x="85" y="95" fill="#fff" fontSize="12" fontWeight="700" textAnchor="middle">TRIGGER</text>
            <rect x="150" y="35" width="85" height="48" rx="10" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
            <text x="192" y="64" fill="#fff" fontSize="11" fontWeight="700" textAnchor="middle">AI PROCESS</text>
            <rect x="150" y="115" width="85" height="48" rx="10" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
            <text x="192" y="144" fill="#fff" fontSize="11" fontWeight="700" textAnchor="middle">FILTER</text>
            <rect x="270" y="75" width="90" height="50" rx="10" fill="rgba(255,255,255,0.4)" stroke="#fff" strokeWidth="2" />
            <text x="315" y="105" fill="#fff" fontSize="12" fontWeight="800" textAnchor="middle">EXECUTE</text>
            {/* Small output badge */}
            <rect x="280" y="165" width="90" height="40" rx="8" fill="rgba(255,255,255,0.2)" />
            <circle cx="300" cy="185" r="5" fill="#4ade80" />
            <text x="330" y="189" fill="#fff" fontSize="11" fontWeight="600">OUTPUT</text>
          </g>
        );

      case 'ai-agents-database':
        return (
          <g>
            {/* AI agent/network visualization + autonomous systems */}
            <defs>
              <linearGradient id="grad-agents" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" />
                <stop offset="60%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad-agents)" />
            {/* Neural / Agent Network */}
            <g opacity="0.35" stroke="#a5f3fc" strokeWidth="1.5">
              <line x1="200" y1="120" x2="100" y2="70" />
              <line x1="200" y1="120" x2="300" y2="70" />
              <line x1="200" y1="120" x2="80" y2="170" />
              <line x1="200" y1="120" x2="200" y2="210" />
              <line x1="200" y1="120" x2="320" y2="170" />
              <line x1="100" y1="70" x2="80" y2="170" />
              <line x1="300" y1="70" x2="320" y2="170" />
            </g>
            {/* Agent Nodes */}
            <circle cx="200" cy="120" r="32" fill="#ffffff" />
            <circle cx="200" cy="120" r="38" fill="none" stroke="#67e8f9" strokeWidth="3" strokeDasharray="5 3" />
            <text x="200" y="125" fill="#0891b2" fontSize="12" fontWeight="900" textAnchor="middle">ORCHESTRATOR</text>

            <circle cx="100" cy="70" r="22" fill="rgba(255,255,255,0.85)" />
            <text x="100" y="74" fill="#1e40af" fontSize="10" fontWeight="700" textAnchor="middle">PLANNER</text>

            <circle cx="300" cy="70" r="22" fill="rgba(255,255,255,0.85)" />
            <text x="300" y="74" fill="#1e40af" fontSize="10" fontWeight="700" textAnchor="middle">MEMORY</text>

            <circle cx="80" cy="170" r="20" fill="rgba(255,255,255,0.85)" />
            <text x="80" y="174" fill="#1e40af" fontSize="10" fontWeight="700" textAnchor="middle">TOOL</text>

            <circle cx="200" cy="210" r="22" fill="rgba(255,255,255,0.85)" />
            <text x="200" y="214" fill="#1e40af" fontSize="10" fontWeight="700" textAnchor="middle">ACTOR</text>

            <circle cx="320" cy="170" r="20" fill="rgba(255,255,255,0.85)" />
            <text x="320" y="174" fill="#1e40af" fontSize="10" fontWeight="700" textAnchor="middle">REFLECT</text>
          </g>
        );

      case 'ai-atlas':
        return (
          <g>
            {/* Digital map/atlas concept + AI tools */}
            <defs>
              <linearGradient id="grad-atlas" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad-atlas)" />
            {/* Isometric latitude & longitude grid */}
            <ellipse cx="200" cy="140" rx="140" ry="75" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
            <ellipse cx="200" cy="140" rx="100" ry="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <ellipse cx="200" cy="140" rx="55" ry="25" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            <line x1="60" y1="140" x2="340" y2="140" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
            <line x1="200" y1="50" x2="200" y2="230" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
            {/* Map Pin Points & Tool Badges */}
            <g transform="translate(130, 90)">
              <circle cx="0" cy="0" r="6" fill="#38bdf8" />
              <circle cx="0" cy="0" r="14" fill="none" stroke="rgba(56,189,248,0.4)" strokeWidth="2" />
            </g>
            <g transform="translate(260, 110)">
              <circle cx="0" cy="0" r="7" fill="#fbbf24" />
              <circle cx="0" cy="0" r="15" fill="none" stroke="rgba(251,191,36,0.4)" strokeWidth="2" />
            </g>
            <g transform="translate(180, 180)">
              <circle cx="0" cy="0" r="6" fill="#4ade80" />
            </g>
            {/* Center Compass Rose / 500 Tools mark */}
            <rect x="145" y="115" width="110" height="48" rx="12" fill="rgba(255,255,255,0.95)" />
            <text x="200" y="136" fill="#0369a1" fontSize="13" fontWeight="900" textAnchor="middle">500 AI TOOLS</text>
            <text x="200" y="152" fill="#64748b" fontSize="10" fontWeight="700" textAnchor="middle">CATEGORIZED MAP</text>
          </g>
        );

      case 'book-summary-vault':
        return (
          <g>
            {/* Books + knowledge + summary/notes concept */}
            <defs>
              <linearGradient id="grad-books" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad-books)" />
            {/* Stack of books & knowledge cards */}
            <g transform="translate(130, 50)">
              {/* Card 1 */}
              <rect x="30" y="20" width="160" height="110" rx="10" fill="rgba(255,255,255,0.2)" transform="rotate(8 110 75)" />
              {/* Card 2 */}
              <rect x="20" y="20" width="160" height="110" rx="10" fill="rgba(255,255,255,0.35)" transform="rotate(-4 100 75)" />
              {/* Main Book Card */}
              <rect x="15" y="20" width="160" height="115" rx="10" fill="#ffffff" />
              <rect x="28" y="35" width="70" height="8" rx="3" fill="#ea580c" />
              <rect x="28" y="52" width="125" height="5" rx="2" fill="#cbd5e1" />
              <rect x="28" y="65" width="115" height="5" rx="2" fill="#cbd5e1" />
              <rect x="28" y="78" width="95" height="5" rx="2" fill="#cbd5e1" />
              <rect x="28" y="98" width="60" height="20" rx="4" fill="#fef3c7" />
              <text x="58" y="112" fill="#92400e" fontSize="9" fontWeight="800" textAnchor="middle">200 BOOKS</text>
            </g>
            {/* Bookmark ribbon */}
            <path d="M 80 40 L 80 130 L 95 115 L 110 130 L 110 40 Z" fill="#fef08a" />
          </g>
        );

      case 'ai-certificate-vault':
        return (
          <g>
            {/* Certificates + AI + learning credentials */}
            <defs>
              <linearGradient id="grad-cert" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#047857" />
                <stop offset="50%" stopColor="#0d9488" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad-cert)" />
            {/* Certificate border parchment visual */}
            <rect x="65" y="45" width="270" height="180" rx="12" fill="#ffffff" />
            <rect x="75" y="55" width="250" height="160" rx="8" fill="none" stroke="#14b8a6" strokeWidth="2" strokeDasharray="6 3" />
            {/* Decorative Laurel / Seal */}
            <circle cx="200" cy="110" r="28" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2" />
            <circle cx="200" cy="110" r="22" fill="#0d9488" />
            <path d="M 194 109 L 198 114 L 208 103" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            {/* Certificate ribbon below seal */}
            <path d="M 192 130 L 184 150 L 195 144 L 202 152 L 200 130" fill="#0f766e" />
            <path d="M 206 130 L 214 150 L 205 144 L 198 152 L 200 130" fill="#115e59" />
            {/* Text lines */}
            <text x="200" y="172" fill="#0f172a" fontSize="13" fontWeight="800" textAnchor="middle">500 CREDENTIALS</text>
            <text x="200" y="190" fill="#64748b" fontSize="10" fontWeight="600" textAnchor="middle">COURSES & ACCREDITATIONS</text>
          </g>
        );

      case 'founder-os':
        return (
          <g>
            {/* Startup/founder operating system + business strategy */}
            <defs>
              <linearGradient id="grad-founder" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="50%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad-founder)" />
            {/* OS Window Frame - Clean Crisp Light Theme */}
            <rect x="50" y="40" width="300" height="190" rx="14" fill="#ffffff" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
            {/* OS Window Header */}
            <rect x="50" y="40" width="300" height="32" rx="14" fill="#f1f5f9" />
            <circle cx="70" cy="56" r="4" fill="#ef4444" />
            <circle cx="84" cy="56" r="4" fill="#f59e0b" />
            <circle cx="98" cy="56" r="4" fill="#10b981" />
            <text x="200" y="60" fill="#475569" fontSize="11" fontWeight="800" textAnchor="middle">founder_os.system // v3.0</text>
            {/* Dashboard widgets */}
            <rect x="65" y="85" width="80" height="60" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="75" y="102" fill="#7c3aed" fontSize="9" fontWeight="800">TRACTION</text>
            <text x="75" y="125" fill="#0f172a" fontSize="16" fontWeight="900">+340%</text>

            <rect x="155" y="85" width="85" height="60" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="165" y="102" fill="#0284c7" fontSize="9" fontWeight="800">RUNWAY</text>
            <text x="165" y="125" fill="#0f172a" fontSize="16" fontWeight="900">24 MOS</text>

            <rect x="250" y="85" width="85" height="60" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="260" y="102" fill="#059669" fontSize="9" fontWeight="800">VALUATION</text>
            <text x="260" y="125" fill="#0f172a" fontSize="15" fontWeight="900">READY</text>

            {/* Strategy Roadmap Timeline */}
            <rect x="65" y="160" width="270" height="50" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <circle cx="100" cy="185" r="7" fill="#7c3aed" />
            <line x1="107" y1="185" x2="185" y2="185" stroke="#cbd5e1" strokeWidth="3" />
            <circle cx="190" cy="185" r="7" fill="#3b82f6" />
            <line x1="197" y1="185" x2="275" y2="185" stroke="#cbd5e1" strokeWidth="3" />
            <circle cx="280" cy="185" r="7" fill="#10b981" />
          </g>
        );

      case 'github-repository-vault':
        return (
          <g>
            {/* Code repository + GitHub-inspired developer ecosystem visual */}
            <defs>
              <linearGradient id="grad-git" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad-git)" />
            {/* Code Bracket & Git Branches */}
            <g stroke="#ffffff" strokeWidth="3" fill="none">
              {/* Main branch */}
              <line x1="80" y1="70" x2="80" y2="210" />
              {/* Feature branch */}
              <path d="M 80 110 C 130 110, 150 145, 200 145 L 290 145" />
              <path d="M 80 160 C 120 160, 140 185, 170 185 L 260 185" />
            </g>
            {/* Git commits */}
            <circle cx="80" cy="70" r="7" fill="#ffffff" />
            <circle cx="80" cy="110" r="7" fill="#93c5fd" />
            <circle cx="80" cy="160" r="7" fill="#c7d2fe" />
            <circle cx="80" cy="210" r="7" fill="#ffffff" />
            <circle cx="200" cy="145" r="7" fill="#f43f5e" />
            <circle cx="290" cy="145" r="7" fill="#34d399" />
            {/* Code Pill Badge in clean white */}
            <rect x="175" y="65" width="185" height="52" rx="10" fill="#ffffff" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
            <text x="192" y="87" fill="#1d4ed8" fontSize="11" fontWeight="700" fontFamily="monospace">git checkout -b ai-core</text>
            <text x="192" y="104" fill="#64748b" fontSize="10" fontWeight="600" fontFamily="monospace">★ 50,000+ stars vetted</text>
          </g>
        );

      case 'productivity-vault':
        return (
          <g>
            {/* Calendar + checklist + organized productivity system */}
            <defs>
              <linearGradient id="grad-prod" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a21caf" />
                <stop offset="50%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad-prod)" />
            {/* Calendar & Checklist Cards */}
            <rect x="60" y="45" width="130" height="180" rx="12" fill="#ffffff" />
            {/* Calendar top bar */}
            <rect x="60" y="45" width="130" height="35" rx="12" fill="#c026d3" />
            <text x="125" y="68" fill="#ffffff" fontSize="12" fontWeight="800" textAnchor="middle">WEEKLY FOCUS</text>
            {/* Calendar dots/grid */}
            <circle cx="85" cy="100" r="6" fill="#fae8ff" stroke="#c026d3" strokeWidth="1.5" />
            <circle cx="115" cy="100" r="6" fill="#c026d3" />
            <circle cx="145" cy="100" r="6" fill="#fae8ff" stroke="#c026d3" strokeWidth="1.5" />
            <circle cx="165" cy="100" r="6" fill="#c026d3" />
            <circle cx="85" cy="130" r="6" fill="#c026d3" />
            <circle cx="115" cy="130" r="6" fill="#c026d3" />
            <circle cx="145" cy="130" r="6" fill="#fae8ff" stroke="#c026d3" strokeWidth="1.5" />
            <rect x="75" y="160" width="100" height="10" rx="3" fill="#e2e8f0" />
            <rect x="75" y="180" width="70" height="10" rx="3" fill="#e2e8f0" />

            {/* Checklist Card */}
            <rect x="210" y="55" width="140" height="170" rx="12" fill="rgba(255,255,255,0.95)" />
            {/* Check items */}
            <circle cx="232" cy="85" r="9" fill="#10b981" />
            <path d="M 228 85 L 231 88 L 236 82" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <rect x="248" y="81" width="85" height="7" rx="3" fill="#64748b" />

            <circle cx="232" cy="115" r="9" fill="#10b981" />
            <path d="M 228 115 L 231 118 L 236 112" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <rect x="248" y="111" width="75" height="7" rx="3" fill="#64748b" />

            <circle cx="232" cy="145" r="9" fill="#10b981" />
            <path d="M 228 145 L 231 148 L 236 142" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <rect x="248" y="141" width="80" height="7" rx="3" fill="#64748b" />

            <rect x="225" y="175" width="110" height="28" rx="6" fill="#fdf4ff" stroke="#e879f9" strokeWidth="1" />
            <text x="280" y="193" fill="#86198f" fontSize="10" fontWeight="800" textAnchor="middle">100 SYSTEMS</text>
          </g>
        );

      case 'prompt-vault':
        return (
          <g>
            {/* AI prompt/chat interface + prompt cards */}
            <defs>
              <linearGradient id="grad-prompt" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="50%" stopColor="#0d9488" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad-prompt)" />
            {/* Chat bubble cards */}
            <g transform="translate(60, 45)">
              {/* User Prompt bubble */}
              <rect x="50" y="10" width="220" height="46" rx="14" fill="rgba(255,255,255,0.25)" />
              <text x="68" y="32" fill="#ffffff" fontSize="10" fontWeight="700">PROMPT: [ROLE] Expert Strategist</text>
              <text x="68" y="46" fill="#e0f2fe" fontSize="9">Perform root cause synthesis with step-by-step...</text>

              {/* AI Response Card */}
              <rect x="0" y="70" width="270" height="110" rx="14" fill="#ffffff" />
              <rect x="20" y="88" width="60" height="8" rx="3" fill="#0d9488" />
              <rect x="20" y="106" width="230" height="6" rx="2" fill="#cbd5e1" />
              <rect x="20" y="120" width="200" height="6" rx="2" fill="#cbd5e1" />
              <rect x="20" y="134" width="170" height="6" rx="2" fill="#cbd5e1" />
              <circle cx="240" cy="155" r="10" fill="#ccfbf1" />
              <path d="M 237 155 L 243 155 M 240 152 L 240 158" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>
        );

      case 'stock-research-vault':
        return (
          <g>
            {/* Charts + company research + analytical dashboard concept */}
            <defs>
              <linearGradient id="grad-stock" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="50%" stopColor="#0d9488" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad-stock)" />
            {/* Analytical grid */}
            <line x1="60" y1="210" x2="340" y2="210" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <line x1="60" y1="160" x2="340" y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="60" y1="110" x2="340" y2="110" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />

            {/* Candlestick & Trend Line */}
            {/* Bullish Candles */}
            <rect x="90" y="160" width="16" height="35" rx="2" fill="#34d399" />
            <line x1="98" y1="150" x2="98" y2="200" stroke="#34d399" strokeWidth="2" />

            <rect x="130" y="140" width="16" height="40" rx="2" fill="#34d399" />
            <line x1="138" y1="130" x2="138" y2="185" stroke="#34d399" strokeWidth="2" />

            {/* Bearish dip */}
            <rect x="170" y="155" width="16" height="25" rx="2" fill="#f87171" />
            <line x1="178" y1="145" x2="178" y2="190" stroke="#f87171" strokeWidth="2" />

            {/* Big breakout candle */}
            <rect x="210" y="110" width="16" height="55" rx="2" fill="#34d399" />
            <line x1="218" y1="95" x2="218" y2="175" stroke="#34d399" strokeWidth="2" />

            <rect x="250" y="85" width="16" height="50" rx="2" fill="#34d399" />
            <line x1="258" y1="70" x2="258" y2="145" stroke="#34d399" strokeWidth="2" />

            {/* Moving Average curve */}
            <path
              d="M 70 190 Q 130 170, 180 160 T 280 80 T 340 60"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="3.5"
            />
            {/* Research Badge in clean white */}
            <rect x="195" y="195" width="160" height="30" rx="8" fill="#ffffff" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
            <text x="275" y="214" fill="#0f766e" fontSize="10" fontWeight="900" textAnchor="middle">FUNDAMENTAL VALUATION</text>
          </g>
        );

      default:
        return (
          <rect width="400" height="280" fill="#2563eb" />
        );
    }
  };

  const getDimensions = () => {
    switch (size) {
      case 'sm':
        return 'aspect-[16/10] w-full';
      case 'lg':
        return 'aspect-[16/11] w-full';
      case 'hero':
        return 'aspect-[16/11] w-full';
      case 'md':
      default:
        return 'aspect-[16/11] w-full';
    }
  };

  return (
    <div
      id={`cover-${product.id}`}
      className={`relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-md transition-all duration-300 ${getDimensions()} ${className}`}
    >
      <svg
        viewBox="0 0 400 280"
        className="w-full h-full object-cover block select-none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Abstract bespoke artwork for this specific product */}
        {getVisualElements()}

        {/* Top brand header strip overlay - Clean translucent pearl bar */}
        <rect x="0" y="0" width="400" height="34" fill="rgba(255, 255, 255, 0.9)" />
        <line x1="0" y1="34" x2="400" y2="34" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="1" />
        
        {/* Brand identifier */}
        <text
          x="18"
          y="21"
          fill="#1e293b"
          fontSize="9"
          fontWeight="800"
          letterSpacing="1.2"
        >
          ARYAMAN CHHAPERWAL • DIGITAL RESOURCE
        </text>

        {/* Format badge on top right */}
        <rect x="290" y="7" width="94" height="20" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
        <text
          x="337"
          y="21"
          fill="#0f172a"
          fontSize="8.5"
          fontWeight="800"
          textAnchor="middle"
        >
          {product.format === 'PDF' ? 'PDF GUIDE' : 'EXCEL / SHEETS'}
        </text>

        {/* Bottom Title Bar with crisp white card overlay */}
        <rect x="0" y="218" width="400" height="62" fill="#ffffff" />
        <line x1="0" y1="218" x2="400" y2="218" stroke="#e2e8f0" strokeWidth="1" />

        {/* Product Name on Cover */}
        <text
          x="18"
          y="243"
          fill="#0f172a"
          fontSize="14.5"
          fontWeight="900"
          letterSpacing="-0.2"
        >
          {product.name}
        </text>

        {/* Category on Cover */}
        <text
          x="18"
          y="263"
          fill="#64748b"
          fontSize="10"
          fontWeight="700"
        >
          {product.category}
        </text>

        {/* Price Tag Pill on Cover */}
        <rect x="314" y="230" width="70" height="36" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
        <text
          x="349"
          y="253"
          fill="#1d4ed8"
          fontSize="14.5"
          fontWeight="900"
          textAnchor="middle"
        >
          ₹{product.price}
        </text>
      </svg>

      {/* Floating subtle category badge */}
      {showBadge && (
        <div className="absolute top-10 left-3 z-10 pointer-events-none">
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-extrabold tracking-wide uppercase shadow-sm bg-white/95 text-slate-800 backdrop-blur-md border border-slate-200">
            {product.category}
          </span>
        </div>
      )}
    </div>
  );
};
