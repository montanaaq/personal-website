import type { FC } from 'react'
import Snowfall from 'react-snowfall'
import useIsChristmas from '../../../hooks/useIsChristmas'
import Circles from '../../Backgrounds/Circles/Circles'
import ViewPage from './ViewPage'

const InfoPage: FC = () => {
  const isChristmas = useIsChristmas()

  return (
    <>
      {isChristmas ? (
        <>
          <ViewPage />
          <Snowfall snowflakeCount={150} />
        </>
      ) : (
        <Circles>
          <ViewPage />
        </Circles>
      )}
    </>
  )
}

export default InfoPage
