import { Tesla, Theme } from '../component'
import type { ITesla } from '../component'

const Home = ({ list }: ITesla) => (
  <Theme>
    <Tesla list={list} />
  </Theme>
)

export { getServerSidePropsTesla as getServerSideProps } from '../component'

export default Home
