import { Loader } from '../../../matterial'

import Layout from 'components/Layout'
import { COLORS } from '../../const'

export default function LoaderComponent() {
  return (
    <Layout>
      <h1>Loader</h1>
      <p>Indicates something's happening.</p>
      <h2>Sample</h2>
      <Loader />
      <h2>Loader Props</h2>
      <h3>Size</h3>
      <p>{`size={number}`}</p>
      <Loader size={50} />
      <h3>Color</h3>
      <p>{`color={${[...COLORS, 'string'].map(c => `"${c}"`).join(' | ')}}`}</p>
      <div style={{ display: 'flex', gap: '1em' }}>
        <Loader color="primary" />
        <Loader color="secondary" />
        <Loader color="hotpink" />
      </div>
    </Layout>
  )
}
