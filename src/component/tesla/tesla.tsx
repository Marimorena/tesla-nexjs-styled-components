import { Background, Global, Text } from '..'
import type * as T from './tesla.type'

const Tesla = ({ list }: T.ITesla) => (
  <>
    <Global font="Roboto" />

    {list.map((section, key) => (
      <Background
        section={section}
        key={section.id}
        goTo={list[key < list.length - 1 ? key + 1 : 0].id}
      />
    ))}
  </>
)

Tesla.defaultProps = {
  list: [],
}

export default Tesla
