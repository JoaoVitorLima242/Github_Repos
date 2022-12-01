import { RepoContextProvider } from './src/contexts/Repos'
import Routes from './src/routes/index.routes'

export default function App () {
  return (
    <RepoContextProvider>
      <Routes />
    </RepoContextProvider>
  )
}
