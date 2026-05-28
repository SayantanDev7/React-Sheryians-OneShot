import React from 'react'

/* 
  EDUCATIONAL REACT WORKFLOW COMMENTARY:
  
  1. WHAT IS A SINGLE PAGE APPLICATION (SPA)?
     Unlike old-school websites where clicking a link triggers a request to the server, 
     leading to a full white-screen reload, a React SPA loads the HTML, CSS, and JS once. 
     React Router intercept links to dynamically swap DOM elements without page reloads, 
     keeping application state completely intact.

  2. THE WORKFLOW OF CLIENT-SIDE ROUTING:
     - The browser URL changes when you click a `<Link>` or `<NavLink>`.
     - The `<BrowserRouter>` hears this change and updates the virtual DOM.
     - `<Routes>` performs a matching algorithm on current pathname.
     - The matched `<Route>` element (like this `<About />` component) mounts.

  3. HOW DYNAMIC PARAMETERS WORK:
     To create a dynamic detail page, you define a route path like `/about/:name` in App.jsx.
     The colon (`:`) marks `name` as a variable parameter. In the matching child component,
     you import the `useParams()` hook from 'react-router-dom'.
     Executing `const { name } = useParams()` extracts the active URL value, allowing 
     you to query databases, load customized templates, or display personalized elements.
*/
const About = () => {

  return (
    <div className="min-h-[calc(100vh-68px)] bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500 mb-8 tracking-tight text-center">
          About React Router Dom
        </h1>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-3">What is React Router?</h2>
            <p className="text-gray-300 leading-relaxed text-base">
              React Router is a lightweight, fully-featured routing library for the React JavaScript library. 
              It enables the creation of single-page web applications (SPAs) with navigation without page refreshes, 
              preserving application state and giving users a smooth, native-like experience.
            </p>
          </section>

          <section className="border-t border-gray-800 pt-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Key Concepts to Revise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-950 p-5 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <code className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded text-sm font-mono">&lt;BrowserRouter&gt;</code>
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The parent component that stores the current location and navigates using the browser's history API. Wraps the main App tree.
                </p>
              </div>
              <div className="bg-gray-950 p-5 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <code className="text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded text-sm font-mono">&lt;Routes&gt;</code> &amp; <code className="text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded text-sm font-mono">&lt;Route&gt;</code>
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <code className="bg-gray-800 text-blue-300 px-1.5 py-0.5 rounded font-mono text-xs">&lt;Routes&gt;</code> selects the best match for the current URL among its child <code className="bg-gray-800 text-blue-300 px-1.5 py-0.5 rounded font-mono text-xs">&lt;Route&gt;</code> elements. <code className="bg-gray-800 text-blue-300 px-1.5 py-0.5 rounded font-mono text-xs">&lt;Route&gt;</code> maps a path to a React component.
                </p>
              </div>
              <div className="bg-gray-950 p-5 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                  <code className="text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded text-sm font-mono">&lt;Link&gt;</code> vs. Anchor
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  <code className="bg-gray-800 text-blue-300 px-1.5 py-0.5 rounded font-mono text-xs">&lt;Link&gt;</code> performs client-side routing, preventing the default browser page reload, which preserves the application state.
                </p>
              </div>
              <div className="bg-gray-950 p-5 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <code className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-sm font-mono">&lt;NavLink&gt;</code>
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  A special type of <code className="bg-gray-800 text-blue-300 px-1.5 py-0.5 rounded font-mono text-xs">&lt;Link&gt;</code> that knows whether or not it is active. Useful for adding dynamic style classes to active menu links.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
