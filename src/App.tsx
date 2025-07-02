import { useState } from 'react'
import './App.css'
import { withSuspense } from './components/withSuspense'
import Loading from './components/Loading'

const SlowComponent = withSuspense(
    () => import('./components/SlowComponent'),
    <div>Default loading state...</div>
);

const AnotherSlowComponent = withSuspense(
    () => import('./components/SlowComponent')
);

function App() {
    const [showComponents, setShowComponents] = useState(false)

    return (
        <>
            <div className="suspense-demo">
                <button
                    onClick={() => setShowComponents(!showComponents)}
                    className="demo-button"
                >
                    {showComponents ? 'Hide' : 'Show'} Lazy Components
                </button>

                {showComponents && (
                    <div className="components-container">
                        <h3>Component with custom suspense fallback:</h3>
                        <SlowComponent
                            suspense={<Loading />}
                            text="This component has a custom loading indicator!"
                            delay={3000}
                        />

                        <h3>Component with default suspense fallback:</h3>
                        <AnotherSlowComponent
                            text="This component uses the default loading indicator!"
                            delay={5000}
                        />
                    </div>
                )}
            </div>
        </>
    )
}

export default App