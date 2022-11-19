import type { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { tesla: list } = await (
      await fetch(
        'https://raw.githubusercontent.com/marianzburlea/simple-api/main/data-base.json'
      )
    ).json()

    return { props: { list, message: 'ok' } }
  } catch (error: any) {
    return {
      props: {
        message: error.message,
        code: error.code,
      },
    }
  }
}
