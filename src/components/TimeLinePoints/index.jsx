export const TimeLinePoints = ({ points }) => {
  return (
    points.map((point, i) => {
      return (
        <li key={`timeLinePoint el ${i}`}>
          {(point.description !== null || point.title !== null) &&
            <div className='timePointInfo'>
              <div className='leftDecoration' />
              <h2 className='timePointPosition bold subtitle'>{point.title}</h2>
              <span className='normal littleText'>{point.description}</span>
            </div>}
        </li>
      )
    })
  )
}
