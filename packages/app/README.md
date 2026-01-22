# Labware App - AI Agent Management Interface

> 2D tycoon-style interface for managing 64 specialized AI agents

## Features

- **2D Office View**: Retro tycoon-game interface with 4 floors
- **64 AI Agents**: Cartoon farm animal avatars with unique personalities
- **Team View Modal**: Full organizational chart with 3-layer hierarchy
- **Chat Panel**: Sliding side panel for agent conversations
- **Status Indicators**: Animated real-time agent status (available, processing, escalation, offline)
- **Floor Filtering**: Filter agents by department/floor
- **Retro Styling**: Office furniture decorations (desks, plants, coffee stations)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State**: React hooks (useState)

## Project Structure

```
packages/app/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main entry point
│   └── globals.css        # Global styles
├── src/
│   ├── App.tsx            # Main app component
│   └── components/
│       ├── AnimalAvatar.tsx      # SVG cartoon animal heads (15 animals)
│       ├── ChatPanel.tsx         # Sliding chat interface
│       ├── OfficeView.tsx        # Main 2D office view
│       ├── OfficeFurniture.tsx   # Retro furniture decorations
│       └── TeamViewModal.tsx     # Full org chart modal
├── vercel.json            # Vercel deployment config
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS config
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Local Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# From repository root
npm install

# Or from packages/app
cd packages/app
npm install
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 to see the app.

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

Create `.env.local` in `packages/app/`:

```bash
NEXT_PUBLIC_API_URL=https://api.labware.icu
NEXT_PUBLIC_APP_URL=https://app.labware.icu
```

See `.env.example` for full list.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy to Vercel:**
1. Push to GitHub
2. Import project in Vercel dashboard
3. Set root directory to `packages/app`
4. Deploy

## Components

### AnimalAvatar
SVG-based cartoon farm animal heads with animated status indicators.

**Animals**: Bear, Dog, Cat, Bunny, Tiger, Cow, Horse, Pig, Chicken, Bull, Duck, Sheep, Goat, Fox, Owl

**Props**:
- `animal`: FarmAnimalType
- `size`: number (default: 80px)
- `color`: string (hex color)
- `status`: 'available' | 'processing' | 'escalation' | 'offline'

### OfficeView
Main 2D tycoon-style office interface showing all 64 agents across 4 floors.

**Features**:
- Zoom controls (50%-200%)
- Pan with click and drag
- Floor filtering
- Hover tooltips
- Minimap
- Status legend

### ChatPanel
Sliding side panel for agent conversations.

**Features**:
- Message history
- Typing indicators
- Multiline input
- File upload (future)
- Agent details expandable section

### TeamViewModal
Full organizational chart showing all 64 agents in 3 layers.

**Features**:
- Expandable layers
- Click agent to chat
- Department grouping
- Smooth animations

## Agent System

### 64 Agents Across 3 Layers

**Layer 1**: CEO Advisor (1 agent)
- Agent 001: Alex Strategic (Bear 🐻)

**Layer 2**: C-Suite Executives (7 agents)
- CFO, CTO, CMO, COO, CCO, CPO, CProdO

**Layer 3**: Specialists (56 agents)
- Finance, Technology, Marketing, Operations
- Compliance, HR, Product, Domain Expertise

### Agent Properties

Each agent has:
- **Unique ID**: 001-064
- **Name**: E.g., "Alex Strategic"
- **Role**: E.g., "CEO Advisor & Orchestrator"
- **Department**: E.g., "Executive"
- **Layer**: 1, 2, or 3
- **Animal Avatar**: One of 15 farm animals
- **AI Model**: Primary + fallback (Claude, GPT-4, etc.)
- **Tools**: n8n workflow nodes
- **Status**: Real-time availability

## Roadmap

### Current (v1.0) ✅
- [x] 2D office view
- [x] All 64 agents with cartoon avatars
- [x] Team View modal
- [x] Chat panel UI
- [x] Floor filtering
- [x] Status indicators

### Next (v1.1) 🚧
- [ ] Backend API integration
- [ ] Real agent conversations
- [ ] Message persistence
- [ ] Authentication
- [ ] Tool execution visualization

### Future (v2.0) 📋
- [ ] Multi-agent coordination display
- [ ] Agent-to-agent communication visualization
- [ ] Analytics dashboard
- [ ] Custom agent training
- [ ] Mobile responsive optimization

## Contributing

This is part of a monorepo. See the root [README.md](../../README.md) for contribution guidelines.

## License

Proprietary - Labware.icu

## Support

For issues or questions:
- Email: support@labware.icu
- GitHub: https://github.com/laurentlaboise/labware/issues

---

**Built with Dignity Through Utility** 🏢
