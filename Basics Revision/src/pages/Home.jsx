import React from 'react'
import Card from '../components/Card'

/* 
  EDUCATIONAL REACT WORKFLOW COMMENTARY:
  
  1. COMPONENT REUSABILITY:
     In React, we build small, self-contained building blocks called "components" (like the `<Card />` imported above).
     Instead of copying and pasting the exact same HTML block three times, we write a single `<Card />` component 
     and reuse it. This follows the DRY (Don't Repeat Yourself) principle.

  2. PROPS (PROPERTIES):
     Props are the primary mechanism for passing data from a parent component (Home) down to a child component (Card).
     Props are read-only (immutable) parameters. Here, we pass `username`, `title`, and `description` to each `<Card />`.
     Inside `Card.jsx`, React gathers these inputs into a single object, allowing the child to customize its content 
     dynamically!

  3. VIRTUAL DOM & RENDERING:
     When this component executes, it returns JSX (JavaScript XML), which React compiles into virtual DOM elements.
     If a prop updates, React recalculates the virtual DOM, finds the exact diff, and applies it efficiently to 
     the actual browser DOM.
*/
const Home = () => {

  return (
    <div className="min-h-[calc(100vh-68px)] bg-gray-950 text-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4 uppercase tracking-wider">
          React Router Dom v7 practice
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500 mb-6 tracking-tight">
          Mastering Client-Side Routing
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          A sleek, modern practice application designed to revise basic concepts of single-page application (SPA) routing, route matching, active links, and dynamic components.
        </p>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-200 mb-8 border-b border-gray-800 pb-3 flex items-center justify-between">
          <span>Featured Profiles</span>
          <span className="text-xs font-normal text-gray-500">Props & Card Components</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <Card 
            username="Alice Smith" 
            title="Frontend Developer" 
            description="Alice is an expert in React, Tailwind CSS, and creating exceptionally premium visual experiences." 
          />
          <Card 
            username="Bob Jones" 
            title="Backend Architect" 
            description="Bob designs high-performance microservices, databases, and handles flawless system integrations." 
          />
          <Card 
            username="Charlie Brown" 
            title="UI/UX Designer" 
            description="Charlie elevates digital products through gorgeous typography, intuitive flows, and micro-interactions." 
          />
        </div>
      </div>
    </div>
  )
}

export default Home
