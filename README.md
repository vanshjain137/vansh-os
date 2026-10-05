# 🍏 macOS Interactive Portfolio

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vanshjain137)
[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Website-blue?style=for-the-badge)](https://vansh-os-three.vercel.app/)

A high-fidelity, interactive macOS desktop environment built for the web. This project serves as my personal developer portfolio, moving beyond static pages to provide an immersive, OS-level user experience.

## 🔗 Project Links
- **Live Demo:** [https://vansh-os-three.vercel.app/](https://vansh-os-three.vercel.app/)
- **GitHub Repository:** [View Repository](https://github.com/vanshjain137/vansh-os)

## 🚀 Key Features

### Core OS Mechanics
- **Authentic Window Management:** Dynamic z-index layering, maximize/minimize states, and focus mechanics simulating a real operating system.
- **Advanced DOM Manipulation:** Bounded drag-and-drop window mechanics utilizing custom `onPointerDownCapture` event handling.
- **Global State Management:** Seamless state sharing across disparate "apps" (Finder, Safari, Terminal) without prop drilling using Zustand.

### Integrated Applications
- **Finder & Terminal:** Interactive file system navigation and a command-line interface mimicking real bash commands.
- **Resume Viewer:** Built-in PDF reader with un-clickable annotation layers optimized for buttery-smooth window dragging.
- **Cinema Mode:** Dynamic media scaling and high-performance GSAP animations.

## 🛡️ Architecture & Best Practices
- **Optimized Asset Delivery:** Custom CDN worker configuration for `react-pdf` to optimize Vite production chunk splitting.
- **Clean Event Handling:** Memory-leak prevention by properly binding and unbinding complex mouse and pointer events.
- **Responsive Scaling:** UI components scale seamlessly without breaking desktop metaphor constraints.
- **Clean Code:** Zero ESLint warnings and structured component architecture.

## 🛠️ Tech Stack
- **Frontend:** React.js, Vite
- **Styling:** Tailwind CSS
- **Animations:** GSAP
- **State Management:** Zustand, React Context
- **Integrations:** React-PDF

## ⚙️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/vanshjain137/vansh-os.git](https://github.com/vanshjain137/vansh-os.git)
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

## 📦 Production Build

To create an optimized production build:

   ```bash
   npm run build
   ```

---

Developed by **Vansh Jain**
