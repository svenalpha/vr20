import { Helmet } from 'react-helmet-async'
import HelmetProvider from '@core/contexts/HelmetContext'


function App(props: any) {

	return (
		<>
			<Helmet>
				<title>ViteSSR + React + Helmet</title>
			</Helmet>

			<HelmetProvider>
				{props.children}
			</HelmetProvider>
		</>
	)
}

export default App
